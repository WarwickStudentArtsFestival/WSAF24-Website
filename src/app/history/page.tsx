import PageHeader from '@/app/components/page-header';
import FestivalsTable from '@/app/history/festivals-table';

export default function History() {
  return (
    <main>
      <PageHeader title="The History of WSAF" />
      <p>Bit of an introduction.</p>

      <section>
        <FestivalsTable />
      </section>

      <section>
        <p>
          The first ever Warwick Student Arts Festival took place in 2004, with
          over 50 events take place across campus in a &apos;spectacular
          celebration of the creative talent at the University&apos;.
        </p>

        <p>
          In 2009, Warwick Student Arts Festival was temporarily renamed to
          SPLAT-Fest, standing for Student Performance, Literature, Art &
          Theatre.
        </p>
      </section>
    </main>
  );
}
