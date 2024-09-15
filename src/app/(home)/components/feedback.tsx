import { FiSend, FiTv, FiVideo } from 'react-icons/fi';

export default function Feedback() {
  return (
    <section className="mb-4 md:mb-8">
      <h2>Feedback</h2>
      <p className="mb-2 mx-4 max-w-3xl mx-auto px-2">
        As WSAF 2024 comes to a close, we&apos;d greatly appreciate any feedback
        on who attended the event and how we can improve. Although our feedback
        form has now closed, please let us know any additional thoughts at{' '}
        <a href="mailto:feedback@wsaf.org.uk" className="text-accent">
          feedback@wsaf.org.uk
        </a>
        .
      </p>
    </section>
  );
}
