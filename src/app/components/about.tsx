import { FiExternalLink } from 'react-icons/fi';

export default function About() {
  return (
    <section className="-top-8 relative">
      <h2>What is WSAF?</h2>
      <div className="px-8 lg:text-lg max-w-5xl mx-auto">
        <p className="font-bold mb-2">
          Warwick Student Arts Festival (WSAF) is a 3 day showcase and
          celebration of all aspects of the arts at Warwick.
        </p>
        <p>
          Every day will feature a morning-to-evening programme of events
          including theatre, dance, music, film, literature, comedy and art held
          across the entirety of campus. If you have a show, some art, a dance,
          a poem or anything in-between that you want to show, we&apos;d love to
          see you there!
        </p>
        <a
          href="https://forms.office.com/pages/responsepage.aspx?id=vc-6Ce9HZUSSZTVG8ur2vFkUeDcXxJtJj843aI4gzYJUNEJZSVlJN1k5UlBKUE01VzA2VjhNMlIyMiQlQCN0PWcu"
          target="_blank"
          className="inline-block bg-secondary m-4 px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105"
        >
          <span className="text-xl lg:text-2xl uppercase font-bold">
            Registration Form Now Open{' '}
            <FiExternalLink className="inline-block mb-2" />
          </span>
          <span className="block text-sm">Closes Sunday 12th May</span>
        </a>
      </div>
    </section>
  );
}
