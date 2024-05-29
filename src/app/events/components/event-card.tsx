import {
  formatShowDateTime,
  getEventColourClasses,
  getEventLogo,
  schedule_event_with_relations_and_instances,
} from '@/lib/events';
import Image from 'next/image';

export default function EventCard({
  event,
  className,
  spacingClasses,
}: {
  event: schedule_event_with_relations_and_instances;
  className?: string;
  spacingClasses?: string;
}) {
  return (
    <a
      href={`/events/${event.slug}`}
      className={`block break-inside-avoid hover:scale-105 ${className || ''}`}
    >
      <article
        className={`group p-4 ${getEventColourClasses(event)} drop-shadow-md ${spacingClasses || 'mb-4 mx-2'} h-full`}
      >
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
            width={128}
            height={128}
            className="w-20 mx-auto group-hover:scale-110 transition-all duration-75"
          />
        </div>

        <header>
          {event.schedule_organisation && (
            <p className="italic text-xs">
              {event.schedule_organisation.name} Presents
            </p>
          )}
          <h3 className="text-lg font-bold leading-6">{event.title}</h3>
          <div className="text-sm uppercase">
            {event.schedule_event_categories
              .map((category) => category.schedule_category.name)
              .join(' | ')}
          </div>
        </header>
      </article>
    </a>
  );
}
