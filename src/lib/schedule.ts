import { schedule_event, schedule_venue } from '@prisma/client';
import {
  getEventInstances,
  schedule_eventinstance_with_relations,
} from '@/lib/events';

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
    if (currentDateString !== eventInstance.start.toDateString()) {
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

      currentDateString = eventInstance.start.toDateString();
      currentScheduleDay = {
        earliestEventDate: eventInstance.start,
        venueScheduleDays: [],
      };
      currentDayEventCount = 0;
      currentEventStartTime = null;
      currentTimeVenueEvents = {};
    }

    if (
      currentEventStartTime !== eventInstance.start.toTimeString() ||
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

      currentEventStartTime = eventInstance.start.toTimeString();
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
    scheduleDays.push(currentScheduleDay);
  }

  return scheduleDays;
}
