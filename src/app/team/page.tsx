import PageHeader from '@/app/components/page-header';
import PosteringImage from '@/assets/images/postering.jpg';
import Image from 'next/image';
import organisers from '@/app/team/organisers';
import IdCard from '@/app/components/id-card';
import volunteers from '@/app/team/volunteers';

export default function Team() {
  return (
    <main>
      <section className="mb-16">
        <PageHeader title="Team" />

        <div className="flex justify-center max-w-5xl mx-auto px-2">
          <div>
            Warwick Student Arts Festival would not be possible without our
            amazing team of volunteers.
          </div>
          <Image
            src={PosteringImage}
            alt="Postering"
            className="max-w-md float-right"
          />
        </div>
      </section>

      <section className="mb-16">
        <h2>Organiser Team</h2>
        <p>Our central organising team...</p>

        <div className="flex justify-center flex-wrap mb-8 mx-4">
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
        </div>
      </section>

      <section className="mx-4">
        <h2>Volunteer Team</h2>
        <p>Our volunteer team...</p>
        {volunteers.map((person) => (
          <IdCard
            key={person.name}
            name={person.name}
            description={person.description}
            emailDescription={person.emailDescription}
            role={person.role}
            image={person.image}
          />
        ))}
      </section>
    </main>
  );
}
