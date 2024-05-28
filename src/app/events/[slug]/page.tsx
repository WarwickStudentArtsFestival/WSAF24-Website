import PageHeader from '@/app/components/page-header';
import { Metadata } from 'next';
import { getEvent, getEvents, getOrganisationLogo } from '@/lib/events';
import Image from 'next/image';

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

  return {
    title: `${event.title} | WSAF 2024`,
    description: event.public_description,
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
      <PageHeader title={event.title} />
      <div className="max-w-7xl mx-auto px-8 flex">
        <aside className="w-96 p-4 bg-tertiary">
          <div className="text-left">
            <ul>
              {event.schedule_category && (
                <li>
                  <strong>Category: </strong>
                  {event.schedule_category.name}
                </li>
              )}
              {event.schedule_event_categories.length > 1 && (
                <li>
                  <strong>Additional Categories: </strong>
                  {event.schedule_event_categories
                    .filter(
                      (category) => category.id !== event.schedule_category?.id,
                    )
                    .join(', ')}
                </li>
              )}
              {event.schedule_organisation && (
                <li>
                  <strong>Presented By: </strong>
                  {event.schedule_organisation.name}
                </li>
              )}
            </ul>
            {event.schedule_organisation && (
              <div>
                <h3 className="uppercase text-lg font-bold">
                  About the Presenter
                </h3>
                {event.schedule_organisation.logo && (
                  <Image
                    src={getOrganisationLogo(event.schedule_organisation)}
                    alt="Organisation Logo"
                    height={128}
                    width={128}
                    className="float-left w-32 m-2"
                  />
                )}
                <p>{event.schedule_organisation.description}</p>
              </div>
            )}
          </div>
        </aside>
        <div className="w-96 flex-grow">
          <p>{event.public_description}</p>
        </div>
      </div>

      <a href="/events">Go back to events</a>
    </main>
  );
}
