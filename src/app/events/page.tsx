import PageHeader from '@/app/components/page-header';
import { getEvents } from '@/lib/events';
import EventCard from '@/app/events/components/event-card';

export default async function Events() {
  const events = await getEvents();

  return (
    <main>
      <PageHeader title="Events" />
      <p>Events</p>

      <div className="flex gap-4 flex-wrap justify-center">
        {events.map((event) => (
          <EventCard event={event} key={event.id} />
        ))}
      </div>

      <a href="/schedule">View full schedule</a>
    </main>
  );
}
