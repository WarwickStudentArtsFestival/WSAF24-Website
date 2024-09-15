import PageHeader from '@/app/components/page-header';
import { getVenue, getVenues } from '@/lib/venues-archive';
import { Metadata } from 'next';
import { getScheduleDays } from '@/lib/schedule';
import ScheduleDays from '@/app/schedule/components/schedule-days';
import { FiHome } from 'react-icons/fi';

export async function generateStaticParams() {
  const venues = (await getVenues()) || [];
  return venues
    .filter((venue) => venue.slug)
    .map((venue) => ({ slug: venue.slug }));
}

// export const dynamic = 'force-dynamic';
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const venue = await getVenue(slug);
  if (!venue) {
    return {
      title: 'Venue Not Found',
      description: 'Not Found',
    };
  }

  return {
    title: `${venue.name} | WSAF 2024`,
    description: venue.description,
  };
}

export default async function Venue({
  params: { slug },
}: {
  params: { slug: string };
}) {
  const venue = await getVenue(slug);
  if (!venue)
    return (
      <main>
        <PageHeader title="Not Found" />
        <p>Venue Not Found</p>

        <a href="/venues">Go back to venues</a>
      </main>
    );

  const scheduleDays = await getScheduleDays(parseInt(venue.id.toString()));

  return (
    <main>
      <PageHeader title={venue.name} />
      <p>{venue.description}</p>
      {venue.campus_map_url && (
        <a href={venue.campus_map_url} className="text-accent" target="_blank">
          View on Campus Map
        </a>
      )}

      <div>
        <a
          href="/venues"
          className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 m-4"
        >
          <FiHome className="inline-block mb-2 mr-2" />
          <span className="text-xl uppercase font-bold">All Venues</span>
        </a>
      </div>

      <h2>Venue Schedule</h2>
      <ScheduleDays scheduleDays={scheduleDays} hideVenues />
    </main>
  );
}
