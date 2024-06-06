import { FiArrowRight } from 'react-icons/fi';

export default function FabTerrace() {
  return (
    <section className="mb-4 md:mb-8">
      <h2>FAB Terrace Tickets</h2>
      <p className="mb-2 mx-4 max-w-2xl mx-auto px-2">
        On Sunday evening, we&apos;ll be hosting two sunset sessions on the{' '}
        <a
          href="http://localhost:3000/venues/fab-terrace"
          className="text-accent"
        >
          FAB Terrace
        </a>
        .<br />
        If you&apos;d like to attend, please make sure to{' '}
        <a href="https://www.ticketsource.co.uk/wsaf" className="text-accent">
          book a ticket
        </a>{' '}
        to reserve your place!
      </p>

      <a
        href="https://www.ticketsource.co.uk/wsaf"
        target="_blank"
        className="inline-block bg-tertiary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mb-4 mx-4"
      >
        <span className="text-xl uppercase font-bold">
          <FiArrowRight className="inline mr-2 mb-1" />
          Reserve Your Place
        </span>
      </a>
    </section>
  );
}
