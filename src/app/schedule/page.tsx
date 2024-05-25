import PageHeader from '@/app/components/page-header';
import { getScheduleDays } from '@/lib/schedule';
import ScheduleDays from '@/app/schedule/components/schedule-days';
import { getVenueCount } from '@/lib/venues';
import { getEvent, getEventCount } from '@/lib/events';
import { FiHome, FiTv } from 'react-icons/fi';
import { Metadata } from 'next';

export const dynamic = 'force-dynamic';
export async function generateMetadata(): Promise<Metadata> {
  const venueCount = await getVenueCount();
  const eventCount = await getEventCount();

  return {
    title: 'Schedule | Warwick Student Arts Festival 2024',
    description: `WSAF 2024 will take place across Saturday 8th - Monday 10th June, with ${eventCount} events across ${venueCount} venues.`,
  };
}
export const metadata: Metadata = {
  title: 'Schedule | Warwick Student Arts Festival 2024',
  description:
    "Warwick Student Arts Festival would not be possible without our amazing team of volunteers. From marketing to catering and from stewarding to tech, our team have been working hard since February to make the event the best that it can be. However, we're still looking for people to help!",
};

export default async function Schedule() {
  const scheduleDays = await getScheduleDays();
  const venueCount = await getVenueCount();
  const eventCount = await getEventCount();

  return (
    <main>
      <PageHeader title="Schedule" />
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
          across our{' '}
          <strong>
            <a href="/venues" className="text-accent">
              {venueCount} venues
            </a>
          </strong>
          .
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
            <FiHome className="inline-block mb-2 mr-2" />
            <span className="text-xl uppercase font-bold">Venues</span>
          </a>
        </div>
      </div>

      <ScheduleDays scheduleDays={scheduleDays} />
    </main>
  );
}
