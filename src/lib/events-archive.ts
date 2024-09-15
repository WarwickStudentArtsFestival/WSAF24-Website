import { archivePromise } from '@/lib/archive';
import * as events from '@/lib/events';
import {
  schedule_event_with_category,
  schedule_event_with_relations_and_instances,
  schedule_event_with_relations_and_instances_and_children,
  schedule_eventinstance_with_relations,
} from '@/lib/events';

export async function getEventInstances(
  venueId?: number,
): Promise<schedule_eventinstance_with_relations[]> {
  return (
    (await archivePromise(
      'events-getEventInstances',
      events.getEventInstances,
      venueId,
    )) || []
  );
}

export async function getEvent(
  slug: string,
): Promise<schedule_event_with_relations_and_instances_and_children | null> {
  return archivePromise('events-getEvent', events.getEvent, slug);
}

export async function getEvents(
  randomise: boolean = false,
  pastEvents: number = 0, // 0 = All, 1 = future only, 2 = past only
): Promise<schedule_event_with_relations_and_instances[]> {
  return (
    (await archivePromise(
      'events-getEvents',
      events.getEvents,
      randomise ? 1 : 0,
      pastEvents,
    )) || []
  );
}

export async function getEventTinyDescriptions(): Promise<
  schedule_event_with_category[]
> {
  return (
    (await archivePromise(
      'events-getEventTinyDescriptions',
      events.getEventTinyDescriptions,
    )) || []
  );
}

export async function getEventCount(): Promise<number> {
  return (
    (await archivePromise('events-getEventCount', events.getEventCount)) || 0
  );
}
