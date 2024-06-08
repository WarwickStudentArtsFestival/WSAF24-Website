import PageHeader from '@/app/components/page-header';
import { getVenueCount, getVenues } from '@/lib/venues';
import { FiCalendar, FiTv } from 'react-icons/fi';
import { getEventCount } from '@/lib/events';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export async function generateMetadata(): Promise<Metadata> {
  const venueCount = await getVenueCount();
  const eventCount = await getEventCount();

  return {
    title: 'Venues | Warwick Student Arts Festival 2024',
    description: `WSAF 2024 will take place across Saturday 8th - Monday 10th June, with ${eventCount} events across ${venueCount} venues.`,
  };
}

export default async function Venues() {
  const venues = await getVenues();
  const eventCount = await getEventCount();

  return (
    <main>
      <PageHeader title="Venues" />
      <div className="px-8 max-w-6xl mx-auto">
        <p className="lg:text-lg mb-2">
          Warwick Student Arts Festival 2024 will take place across{' '}
          <strong>Saturday 8th June</strong>, <strong>Sunday 9th June</strong>{' '}
          and <strong>Monday 10th June</strong>, with{' '}
          <strong>
            {' '}
            <a href="/events" className="text-accent">
              {eventCount} events
            </a>
          </strong>{' '}
          across our <strong>{venues.length} venues</strong>.
        </p>
        <div className="flex gap-2 justify-center flex-wrap m-4 mt-2">
          <a
            href="/events"
            className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105"
          >
            <FiTv className="inline-block mb-2 mr-2" />
            <span className="text-xl uppercase font-bold">Events</span>
          </a>
          <a
            href="/schedule"
            className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105"
          >
            <FiCalendar className="inline-block mb-2 mr-2" />
            <span className="text-xl uppercase font-bold">Schedule</span>
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 flex gap-4 flex-wrap justify-center mb-4">
        {venues.map((venue) => (
          <a
            key={venue.id}
            href={`/venues/${venue.slug || ''}`}
            className="hover:scale-105 bg-accent"
          >
            <article className="p-4 text-black max-w-64">
              <h3 className="uppercase text-lg font-bold">{venue.name}</h3>
              <p className="uppercase text-xs font-bold">
                {venue._count.schedule_eventinstance} Event
                {venue._count.schedule_eventinstance === 1 ? '' : 's'}
              </p>
              <p className="text-sm mt-1">{venue.description}</p>
            </article>
          </a>
        ))}
      </div>
    </main>
  );
}
