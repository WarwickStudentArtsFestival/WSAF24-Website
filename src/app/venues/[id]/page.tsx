import PageHeader from '@/app/components/page-header';
import { getVenue, getVenues } from '@/lib/venues';
import { Metadata } from 'next';

export async function generateStaticParams() {
  const venues = await getVenues();
  return venues.map((venue) => ({ id: venue.toString() }));
}

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string };
}): Promise<Metadata> {
  const venue = await getVenue(parseInt(id));
  if (!venue) {
    return {
      title: 'Venue Not Found',
      description: 'Not Found',
    };
  }

  return {
    title: `${venue.name} | WSAF 2024`,
    description: venue.address,
  };
}

export default async function Venue({
  params: { id },
}: {
  params: { id: string };
}) {
  const venue = await getVenue(parseInt(id));
  if (!venue)
    return (
      <main>
        <PageHeader title="Not Found" />
        <p>Venue Not Found</p>

        <a href="/venues">Go back to venues</a>
      </main>
    );

  return (
    <main>
      <PageHeader title={venue.name} />
      <p>{venue.address}</p>

      <a href="/venues">Go back to venues</a>
    </main>
  );
}
