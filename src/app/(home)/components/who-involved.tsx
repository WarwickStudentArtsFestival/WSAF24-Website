import IdCard from '@/app/components/id-card';
import AvatarImage from '@/assets/people/avatar.jpg';
import organisers from '@/app/team/organisers';
import volunteers from '@/app/team/volunteers';
import { FiArrowRight } from 'react-icons/fi';

export default function KeyDates() {
  return (
    <section className="mb-4 md:mb-12">
      <h2>Who&apos;s Involved?</h2>
      <p className="mt-2 mb-1 mx-4">
        This year&apos;s WSAF is being organised by the following volunteers, in
        combination with many other people working behind the scenes in roles
        such as marketing, tech and logistics.
        <br />
        <a href="/team" className="text-accent">
          Find out more about the full team and how you can get involved here.
        </a>
      </p>

      <div className="flex justify-center flex-wrap mb-4">
        {organisers.map((person) => (
          <IdCard
            key={person.name}
            name={person.name}
            description={person.description}
            role={person.role}
            image={person.image}
          />
        ))}
        {volunteers.map((person) => (
          <IdCard
            key={person.name}
            name={person.name}
            description={person.description}
            role={person.role}
            image={person.image}
          />
        ))}
        <IdCard
          name="You?"
          role="Volunteer"
          image={AvatarImage}
          emailDescription
        />
      </div>

      <a
        href="/team"
        className="inline-block bg-tertiary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mb-4 mx-4"
      >
        <span className="text-xl uppercase font-bold">
          <FiArrowRight className="inline mr-2 mb-1" />
          View or Join the WSAF Team
        </span>
      </a>
    </section>
  );
}
