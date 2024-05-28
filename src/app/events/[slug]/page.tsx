import PageHeader from '@/app/components/page-header';
import { Metadata } from 'next';
import {
  formatShowDateTime,
  formatShowTime,
  getEvent,
  getEventBorderClasses,
  getEventColourClasses,
  getEventLogo,
  getEvents,
  getOrganisationLogo,
} from '@/lib/events';
import Image from 'next/image';
import { FiGlobe, FiInstagram, FiTv } from 'react-icons/fi';
import ScheduleEventInstance from '@/app/schedule/components/schedule-event-instance';

/*export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({ slug: event.slug }));
}*/

export const dynamic = 'force-dynamic';
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const event = await getEvent(slug);
  if (!event) {
    return {
      title: 'Event Not Found',
      description: 'Not Found',
    };
  }

  const eventLogo = getEventLogo(event);

  return {
    title: event.schedule_organisation
      ? `${event.title} | ${event.schedule_organisation.name} | WSAF 2024`
      : `${event.title} | WSAF 2024`,
    description: event.short_description,
    openGraph: {
      images:
        eventLogo && typeof eventLogo === 'string'
          ? [
              {
                url: eventLogo,
              },
            ]
          : [],
    },
  };
}

export default async function Event({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const event = await getEvent(slug);
  if (!event)
    return (
      <main>
        <PageHeader title="Not Found" />
        <p>Event Not Found</p>

        <a href="/events">Go back to events</a>
      </main>
    );

  return (
    <main>
      <PageHeader
        title={event.title}
        headingClass={getEventColourClasses(event)}
        borderClass={getEventBorderClasses(event)}
      />
      <div className="-mt-1 text-xl uppercase font-bold">
        {event.schedule_event_categories
          .map((category) => category.schedule_category.name)
          .join(' | ')}
      </div>

      <div className="max-w-7xl mx-auto px-8 flex mt-2 flex-col lg:flex-row-reverse items-stretch">
        <div
          className={`flex-grow lg:px-4 ${event.schedule_organisation ? 'lg:text-left' : 'text-center'}`}
        >
          <p>{event.short_description}</p>
          {event.long_description && (
            <p className="mt-1 text-sm whitespace-pre-wrap">
              {event.long_description}
            </p>
          )}

          <div className="my-2">
            <h3 className="uppercase text-lg font-bold">Times</h3>
            <div
              className={`flex flex-wrap gap-2 ${event.schedule_organisation ? 'justify-center lg:justify-start' : 'justify-center'}`}
            >
              {event.schedule_eventinstance.map((instance) => (
                <div key={instance.id}>
                  <a
                    href={`/venues/${instance.schedule_venue.slug}`}
                    className="bg-accent"
                  >
                    <article className="bg-accent p-2 text-black">
                      <p className="uppercase text-sm font-bold">
                        {instance.schedule_venue.name}
                      </p>
                      <time
                        dateTime={instance.start.toISOString()}
                        className="text-sm"
                      >
                        {formatShowDateTime(instance.start)}
                      </time>{' '}
                      -{' '}
                      <time
                        dateTime={instance.end.toISOString()}
                        className="text-sm"
                      >
                        {formatShowTime(instance.end)}
                      </time>
                    </article>
                  </a>
                  {instance.other_schedule_eventinstance.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {instance.other_schedule_eventinstance.map(
                        (childInstance) => (
                          <ScheduleEventInstance
                            eventInstance={childInstance}
                            key={childInstance.id}
                            eventPage
                          />
                        ),
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
        {event.schedule_organisation && (
          <aside className="lg:w-96 lg:flex-shrink-0 px-4 p-2 lg:p-4 bg-secondary mt-2 lg:mt-0">
            <div className="text-left">
              <h3 className="uppercase text-lg font-bold">
                Presented By {event.schedule_organisation.name}
              </h3>
              {event.schedule_organisation.logo && (
                <Image
                  src={getOrganisationLogo(event.schedule_organisation)}
                  alt="Organisation Logo"
                  height={128}
                  width={128}
                  className="float-left w-24 m-2"
                />
              )}
              <p className="text-sm whitespace-pre-wrap font-light">
                {event.schedule_organisation.description}
              </p>

              <ul>
                {event.schedule_organisation.website_url && (
                  <li>
                    <a
                      href={event.schedule_organisation.website_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-tertiary px-4 py-1 drop-shadow-sm hover:scale-105 mt-2"
                    >
                      <FiGlobe className="inline-block mr-1 mb-1" />
                      <span>
                        {event.schedule_organisation.website_name ||
                          event.schedule_organisation.website_url}
                      </span>
                    </a>
                  </li>
                )}
                {event.schedule_organisation.instagram_handle && (
                  <li>
                    <a
                      href={`https://www.instagram.com/${event.schedule_organisation.instagram_handle}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-tertiary px-4 py-1 drop-shadow-sm hover:scale-105 mt-2"
                    >
                      <FiInstagram className="inline-block mr-1 mb-1" />
                      <span>
                        @{event.schedule_organisation.instagram_handle}
                      </span>
                    </a>
                  </li>
                )}
              </ul>
            </div>
          </aside>
        )}
      </div>

      <div>
        <a
          href="/events"
          className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 m-4"
        >
          <FiTv className="inline-block mb-2 mr-2" />
          <span className="text-xl uppercase font-bold">All Events</span>
        </a>
      </div>
    </main>
  );
}
