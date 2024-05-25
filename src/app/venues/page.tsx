import PageHeader from '@/app/components/page-header';
import { getVenues } from '@/lib/venues';
import { FiCalendar, FiTv } from 'react-icons/fi';
import { getEventCount } from '@/lib/events';

export const dynamic = 'force-dynamic';
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
        <p>
          You can find our full weekend&apos;s schedule here or in our printed
          programmes - simply head to one of our{' '}
          <a href="/venues" className="text-accent">
            venues
          </a>{' '}
          to pick one up!
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
            href="/venues"
            className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105"
          >
            <FiCalendar className="inline-block mb-2 mr-2" />
            <span className="text-xl uppercase font-bold">Schedule</span>
          </a>
        </div>
      </div>

      <div className="flex gap-4 flex-wrap justify-center">
        {venues.map((venue) => (
          <a
            key={venue.id}
            href={`/venues/${venue.slug || ''}`}
            className="hover:scale-105"
          >
            <article className="bg-secondary p-4">
              <h3 className="uppercase text-lg">{venue.name}</h3>
            </article>
          </a>
        ))}
      </div>
    </main>
  );
}
