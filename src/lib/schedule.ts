import { schedule_venue } from '@prisma/client';
import { schedule_eventinstance_with_relations } from '@/lib/events';
import { getEventInstances } from '@/lib/events-archive';
import { convertArchivedDate } from '@/lib/archive';

export type VenueScheduleDay = {
  venue: schedule_venue;
  eventInstances: (schedule_eventinstance_with_relations | null)[];
};

export type ScheduleDay = {
  earliestEventDate: Date;
  venueScheduleDays: VenueScheduleDay[];
};

export async function getScheduleDays(
  venueId?: number,
): Promise<ScheduleDay[]> {
  const scheduleDays: ScheduleDay[] = [];

  const eventInstances = await getEventInstances(venueId);
  let currentDateString = null;
  let currentScheduleDay: ScheduleDay | null = null;
  let currentDayEventCount = 0;
  let currentEventStartTime = null;
  let currentTimeVenueEvents: Record<string, boolean> = {};

  for (const eventInstance of eventInstances) {
    const eventStart = convertArchivedDate(eventInstance.start);

    if (currentDateString !== eventStart.toDateString()) {
      if (currentScheduleDay) {
        if (currentEventStartTime) {
          currentScheduleDay?.venueScheduleDays
            .filter(
              (venueScheduleDay) =>
                !currentTimeVenueEvents[venueScheduleDay.venue.id.toString()],
            )
            .forEach((venueScheduleDay) =>
              venueScheduleDay.eventInstances.push(null),
            );
        }
        scheduleDays.push(currentScheduleDay);
      }

      currentDateString = eventStart.toDateString();
      currentScheduleDay = {
        earliestEventDate: eventStart,
        venueScheduleDays: [],
      };
      currentDayEventCount = 0;
      currentEventStartTime = null;
      currentTimeVenueEvents = {};
    }

    if (
      currentEventStartTime !== eventStart.toTimeString() ||
      currentTimeVenueEvents[eventInstance.venue_id.toString()]
    ) {
      if (currentEventStartTime) {
        currentScheduleDay?.venueScheduleDays
          .filter(
            (venueScheduleDay) =>
              !currentTimeVenueEvents[venueScheduleDay.venue.id.toString()],
          )
          .forEach((venueScheduleDay) =>
            venueScheduleDay.eventInstances.push(null),
          );
        currentDayEventCount++;
      }

      currentEventStartTime = eventStart.toTimeString();
      currentTimeVenueEvents = {};
    }

    const venueScheduleDay = currentScheduleDay?.venueScheduleDays.find(
      (venueScheduleDay) =>
        venueScheduleDay.venue.id === eventInstance.venue_id,
    );
    if (venueScheduleDay) {
      venueScheduleDay.eventInstances.push(eventInstance);
    } else {
      currentScheduleDay?.venueScheduleDays.push({
        venue: eventInstance.schedule_venue,
        eventInstances: [
          ...new Array(currentDayEventCount).fill(null),
          eventInstance,
        ],
      });
    }
    currentTimeVenueEvents[eventInstance.venue_id.toString()] = true;
  }

  if (currentScheduleDay) {
    if (currentEventStartTime) {
      currentScheduleDay?.venueScheduleDays
        .filter(
          (venueScheduleDay) =>
            !currentTimeVenueEvents[venueScheduleDay.venue.id.toString()],
        )
        .forEach((venueScheduleDay) =>
          venueScheduleDay.eventInstances.push(null),
        );
      currentDayEventCount++;
    }
    scheduleDays.push(currentScheduleDay);
  }

  return scheduleDays;
}
