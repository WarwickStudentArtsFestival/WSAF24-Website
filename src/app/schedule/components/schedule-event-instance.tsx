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
      className="block w-52 mr-3"
    >
      <article
        className={`group p-2 ${getEventColourClasses(eventInstance.schedule_event)} drop-shadow-md h-full relative`}
      >
        <div className="p-6 absolute left-0 right-0 bottom-0 top-0">
          <Image
            src={getEventLogo(eventInstance.schedule_event)}
            alt="Event logo"
            className="w-32 max-h-full object-contain mx-auto group-hover:scale-125 transition-all duration-75 opacity-35"
          />
        </div>

        <div className="relative">
          <div className="block uppercase text-lg font-bold mb-1">
            <time dateTime={eventInstance.start.toISOString()}>
              {dayjs(eventInstance.start).format('h:mma')}
            </time>{' '}
            -{' '}
            <time dateTime={eventInstance.end.toISOString()}>
              {dayjs(eventInstance.end).format('h:mma')}
            </time>
          </div>

          {eventInstance.schedule_event.schedule_organisation && (
            <p className="italic text-2xs">
              {eventInstance.schedule_event.schedule_organisation.name} Presents
            </p>
          )}
          <h3 className="font-bold leading-5">
            {eventInstance.schedule_event.title}
          </h3>
          <div className="text-xs uppercase">
            {eventInstance.schedule_event.schedule_event_categories
              .map((category) => category.schedule_category.name)
              .join(' | ')}
          </div>
        </div>
      </article>
    </a>
  );
}
