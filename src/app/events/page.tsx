import PageHeader from '@/app/components/page-header';
import { getEvents } from '@/lib/events';
import EventCard from '@/app/events/components/event-card';

export default async function Events() {
  const events = await getEvents();

  return (
    <main>
      <PageHeader title="Events" />
      <div>
        <p>Events Text Blah Blah Blah</p>
        <div>
          <a
            href="/schedule"
            className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 m-4"
          >
            <span className="text-xl uppercase font-bold">Full Schedule</span>
          </a>
        </div>
      </div>

      <div className="max-w-screen-6xl mx-auto">
        <div className="xs:columns-2 md:columns-3 xl:columns-4 2xl:columns-5 3xl:columns-6 4xl:columns-7 gap-0 m-4">
          {events.map((event) => (
            <EventCard event={event} key={event.id} />
          ))}
        </div>
      </div>
    </main>
  );
}
