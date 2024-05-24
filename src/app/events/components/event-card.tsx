import {
  formatShowDateTime,
  schedule_event_with_relations,
} from '@/lib/events';
import Image from 'next/image';
import { getEventLogo } from '@/lib/event-images';

export default function EventCard({
  event,
}: {
  event: schedule_event_with_relations;
}) {
  return (
    <a href={`/events/${event.id}`} className="hover:scale-105">
      <article className="w-80 p-4 bg-secondary">
        <div className="text-xs">
          {event.schedule_eventinstance.map((instance) => (
            <p key={instance.id}>
              <time dateTime={instance.start.toISOString()}>
                {formatShowDateTime(instance.start)}
              </time>{' '}
              {instance.schedule_venue.name}
            </p>
          ))}
        </div>
        <div className="m-2">
          <Image
            src={getEventLogo(event)}
            alt="Event logo"
            className="w-20 mx-auto"
          />
        </div>

        <header>
          {event.schedule_organisation && (
            <p className="italic text-xs">
              {event.schedule_organisation.name} Presents
            </p>
          )}
          <h3 className="text-lg font-bold leading-6">{event.title}</h3>
          <div className="text-sm">
            {event.schedule_event_categories.map((category) => (
              <span key={category.id} className="uppercase mx-1">
                {category.schedule_category.name}
              </span>
            ))}
          </div>
        </header>
      </article>
    </a>
  );
}
