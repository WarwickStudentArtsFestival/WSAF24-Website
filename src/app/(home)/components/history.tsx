import { FiArrowRight } from 'react-icons/fi';

export default function History() {
  return (
    <section className="mb-4 md:mb-12">
      <h2>History</h2>
      <p className="mt-2 mb-3 mx-auto px-4 max-w-4xl">
        Although we are a completely new team, Warwick Student Arts Festival is
        not a completely new thing to Warwick - it used to be yearly event with
        the earliest recorded event in{' '}
        <a
          href="https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/"
          target="_blank"
          className="text-accent"
        >
          2004
        </a>{' '}
        and last recorded event in{' '}
        <a
          href="https://web.archive.org/web/20160126222504/http://www.wsaf.co.uk/schedule"
          target="_blank"
          className="text-accent"
        >
          2015
        </a>
        .
      </p>

      <a
        href="/history"
        className="inline-block bg-tertiary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mb-4 mx-4"
      >
        <span className="text-xl lg:text-2xl uppercase font-bold">
          <FiArrowRight className="inline mr-2 mb-1" />
          WSAF&apos;s History
        </span>
      </a>
    </section>
  );
}
