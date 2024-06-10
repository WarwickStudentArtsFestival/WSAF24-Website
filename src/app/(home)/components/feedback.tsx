import { FiSend, FiTv, FiVideo } from 'react-icons/fi';

export default function Feedback() {
  return (
    <section className="mb-4 md:mb-8">
      <h2>Feedback</h2>
      <p className="mb-2 mx-4 max-w-3xl mx-auto px-2">
        As WSAF 2024 comes to a close, we&apos;d greatly appreciate any feedback
        on who attended the event and how we can improve. Please fill in the
        brief feedback form below or email us at{' '}
        <a href="mailto:feedback@wsaf.org.uk" className="text-accent">
          feedback@wsaf.org.uk
        </a>
        .
      </p>

      <div>
        <a
          href="/feedback"
          target="_blank"
          className="inline-block bg-tertiary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mb-2 mx-4"
        >
          <span className="text-xl uppercase font-bold">
            <FiSend className="inline mr-2 mb-1" />
            Feedback Form
          </span>
        </a>
      </div>
    </section>
  );
}
