import PageHeader from '@/app/components/page-header';
import { getScheduleDays } from '@/lib/schedule';
import ScheduleDays from '@/app/schedule/components/schedule-days';

export default async function Schedule() {
  const scheduleDays = await getScheduleDays();

  return (
    <main>
      <PageHeader title="Schedule" />
      <div>
        <p>Schedule Text Blah Blah Blah</p>
        <div>
          <a
            href="/events"
            className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 m-4"
          >
            <span className="text-xl uppercase font-bold">All Events</span>
          </a>
        </div>
      </div>

      <ScheduleDays scheduleDays={scheduleDays} />
    </main>
  );
}
