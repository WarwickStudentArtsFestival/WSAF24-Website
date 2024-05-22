import PageHeader from '@/app/components/page-header';
import { getVenues } from '@/lib/venues';

export default async function Venues() {
  const venues = await getVenues();

  return (
    <main>
      <PageHeader title="Venues" />
      <p>Venues</p>

      <div className="flex gap-4 flex-wrap justify-center">
        {venues.map((venue) => (
          <a
            key={venue.id}
            href={`/venues/${venue.id}`}
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
