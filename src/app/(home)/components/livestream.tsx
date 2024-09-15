import { FiTv, FiVideo } from 'react-icons/fi';

export default function Livestream() {
  return (
    <section className="mb-4 md:mb-8">
      <h2>Livestream</h2>
      <p className="mb-2 mx-4 max-w-2xl mx-auto px-2">
        Several of our events on the{' '}
        <a
          href="http://localhost:3000/venues/benefactors-place"
          className="text-accent"
        >
          Piazza Stage
        </a>
        ,{' '}
        <a
          href="http://localhost:3000/venues/curiositea"
          className="text-accent"
        >
          Curiositea
        </a>{' '}
        and{' '}
        <a
          href="http://localhost:3000/venues/fab-terrace"
          className="text-accent"
        >
          FAB Terrace
        </a>{' '}
        were{' '}
        <a
          href="https://www.youtube.com/channel/UCCFESD5QMLnlgKQjkBLuv3A"
          className="text-accent"
        >
          livestreamed and recorded
        </a>{' '}
        in collaboration with{' '}
        <a
          href="https://www.youtube.com/@RAWVisual/streams"
          className="text-accent"
        >
          RAW Visual
        </a>
        .
      </p>

      <div>
        <a
          href="https://www.youtube.com/channel/UCCFESD5QMLnlgKQjkBLuv3A"
          target="_blank"
          className="inline-block bg-tertiary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mb-2 mx-4"
        >
          <span className="text-xl uppercase font-bold">
            <FiTv className="inline mr-2 mb-1" />
            WSAF YouTube Channel
          </span>
        </a>
      </div>

      <div>
        <a
          href="https://www.youtube.com/@RAWVisual/streams"
          target="_blank"
          className="inline-block bg-tertiary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mb-4 mx-4"
        >
          <span className="text-sm uppercase font-bold">
            <FiVideo className="inline mr-2 mb-1" />
            Watch the Day One Recap
          </span>
        </a>
      </div>
    </section>
  );
}
