import PageHeader from '@/app/components/page-header';
import { Metadata } from 'next';
import { getEvent, getEvents } from '@/lib/events';

export async function generateStaticParams() {
  const events = await getEvents();
  return events.map((event) => ({ id: event.toString() }));
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const event = await getEvent(parseInt(id));
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
  params: { id },
}: {
  params: { id: string };
}) {
  const event = await getEvent(parseInt(id));
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
      <p>{event.public_description}</p>

      <a href="/events">Go back to events</a>
    </main>
  );
}
