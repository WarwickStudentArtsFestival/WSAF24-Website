import {
  getEventColourClasses,
  schedule_eventinstance_with_relations,
} from '@/lib/events';
import Image from 'next/image';
import { getEventLogo } from '@/lib/event-images';
import dayjs from 'dayjs';

export default function ScheduleEventInstance({
  eventInstance,
}: {
  eventInstance: schedule_eventinstance_with_relations;
}) {
  return (
    <a
      href={`/events/${eventInstance.schedule_event.slug}`}
      className="block w-72 mr-3"
    >
      <article
        className={`group p-4 ${getEventColourClasses(eventInstance.schedule_event)} drop-shadow-md h-full`}
      >
        <p>
          <time
            dateTime={eventInstance.start.toISOString()}
            className="uppercase text-xl font-bold mb-1"
          >
            {dayjs(eventInstance.start).format('h:mma')}
          </time>
        </p>
        <div className="m-2">
          <Image
            src={getEventLogo(eventInstance.schedule_event)}
            alt="Event logo"
            className="w-20 mx-auto group-hover:scale-110 transition-all duration-75"
          />
        </div>

        <header>
          {eventInstance.schedule_event.schedule_organisation && (
            <p className="italic text-xs">
              {eventInstance.schedule_event.schedule_organisation.name} Presents
            </p>
          )}
          <h3 className="text-lg font-bold leading-6">
            {eventInstance.schedule_event.title}
          </h3>
          <div className="text-sm uppercase">
            {eventInstance.schedule_event.schedule_event_categories
              .map((category) => category.schedule_category.name)
              .join(' | ')}
          </div>
        </header>
      </article>
    </a>
  );
}
