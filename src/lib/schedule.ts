import { schedule_event, schedule_venue } from '@prisma/client';
import {
  getEventInstances,
  schedule_event_with_relations,
  schedule_eventinstance_with_relations,
} from '@/lib/events';

export type VenueScheduleDay = {
  venue: schedule_venue;
  eventInstances: schedule_eventinstance_with_relations[];
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
  let currentDayVenueEvents: Record<string, VenueScheduleDay> = {};

  for (const eventInstance of eventInstances) {
    if (
      !currentScheduleDay ||
      currentDateString !== eventInstance.start.toDateString()
    ) {
      if (currentScheduleDay) {
        currentScheduleDay.venueScheduleDays = Object.values(
          currentDayVenueEvents,
        );
        scheduleDays.push(currentScheduleDay);
      }

      currentDateString = eventInstance.start.toDateString();
      currentScheduleDay = {
        earliestEventDate: eventInstance.start,
        venueScheduleDays: [],
      };
      currentDayVenueEvents = {};
    }

    if (currentDayVenueEvents[eventInstance.venue_id.toString()]) {
      currentDayVenueEvents[
        eventInstance.venue_id.toString()
      ].eventInstances.push(eventInstance);
    } else {
      currentDayVenueEvents[eventInstance.venue_id.toString()] = {
        venue: eventInstance.schedule_venue,
        eventInstances: [eventInstance],
      };
    }
  }
  if (currentScheduleDay) {
    currentScheduleDay.venueScheduleDays = Object.values(currentDayVenueEvents);
    scheduleDays.push(currentScheduleDay);
  }

  return scheduleDays;
}
