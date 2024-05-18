import IdCard from '@/app/components/id-card';
import AvatarImage from '@/assets/people/avatar.jpg';
import organisers from '@/app/team/organisers';

export default function KeyDates() {
  return (
    <section className="mb-12">
      <h2>Who&apos;s Involved?</h2>
      <p className="mt-2 mb-1 mx-4">
        This year&apos;s WSAF is being organised by the following volunteers. If
        you think you could add something to the team, contact us at{' '}
        <a
          href="mailto:info@wsaf.org.uk"
          target="_blank"
          className="text-accent"
        >
          info@wsaf.org.uk
        </a>
        .
      </p>

      <div className="flex justify-center flex-wrap mb-8">
        {organisers.map((person) => (
          <IdCard
            key={person.name}
            name={person.name}
            description={person.description}
            emailDescription={person.emailDescription}
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
    </section>
  );
}
