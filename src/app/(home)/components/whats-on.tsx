import { FiArrowRight } from 'react-icons/fi';
import { getEvents } from '@/lib/events';
import EventCard from '@/app/events/components/event-card';

export default async function WhatsOn() {
  const events = (await getEvents(true, 1)).slice(0, 6);

  return (
    <section className="mb-8">
      <h2>What&apos;s On?</h2>
      <p className="max-w-6xl mx-auto px-4 mb-2">
        Across <strong>Saturday 8th June</strong>,{' '}
        <strong>Sunday 9th June</strong> and <strong>Monday 10th June</strong>{' '}
        we&apos;ll feature a{' '}
        <a href="/events" className="text-accent">
          huge variety of events
        </a>{' '}
        across all our{' '}
        <a href="/venues" className="text-accent">
          on-campus venues
        </a>
        . You can find the{' '}
        <a href="/schedule" className="text-accent">
          full event schedule here
        </a>
        .
      </p>

      <div className="mx-4 mb-4 flex justify-center flex-wrap gap-4">
        {events.map((event) => (
          <EventCard
            event={event}
            key={event.id}
            className="w-80"
            spacingClasses="m-0"
          />
        ))}
      </div>

      <a
        href="/events"
        className="inline-block bg-tertiary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mb-4"
      >
        <span className="text-xl lg:text-2xl uppercase font-bold">
          <FiArrowRight className="inline mr-2 mb-1" />
          View the Full List
        </span>
      </a>
    </section>
  );
}
