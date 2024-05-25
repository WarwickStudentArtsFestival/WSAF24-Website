import PageHeader from '@/app/components/page-header';
import { getEventCount, getEvents } from '@/lib/events';
import EventCard from '@/app/events/components/event-card';
import { FiCalendar, FiHome } from 'react-icons/fi';
import { getVenueCount } from '@/lib/venues';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export async function generateMetadata(): Promise<Metadata> {
  const venueCount = await getVenueCount();
  const eventCount = await getEventCount();

  return {
    title: 'Events | Warwick Student Arts Festival 2024',
    description: `WSAF 2024 will take place across Saturday 8th - Monday 10th June, with ${eventCount} events across ${venueCount} venues.`,
  };
}

export default async function Events() {
  const events = await getEvents();
  const venueCount = await getVenueCount();

  return (
    <main>
      <PageHeader title="Events" />
      <div className="px-8 max-w-6xl mx-auto mb-8">
        <p className="lg:text-lg mb-2">
          Warwick Student Arts Festival 2024 will take place across{' '}
          <strong>Saturday 8th June</strong>, <strong>Sunday 9th June</strong>{' '}
          and <strong>Monday 10th June</strong>, with{' '}
          <strong> {events.length} events</strong> across our{' '}
          <strong>
            <a href="/venues" className="text-accent">
              {venueCount} venues
            </a>
          </strong>
          .
        </p>
        <p>
          From pantomimes to ceilidhs and knitting showcases to aerial arts,
          whatever you&apos;re interests there&apos;s sure to be something
          you&apos;ll enjoy!
        </p>
        <div className="flex gap-2 justify-center flex-wrap m-4 mt-2">
          <a
            href="/schedule"
            className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105"
          >
            <FiCalendar className="inline-block mb-2 mr-2" />
            <span className="text-xl uppercase font-bold">Schedule</span>
          </a>
          <a
            href="/venues"
            className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105"
          >
            <FiHome className="inline-block mb-2 mr-2" />
            <span className="text-xl uppercase font-bold">Venues</span>
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
