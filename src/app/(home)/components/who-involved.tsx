import IdCard, { IdCardProps } from './id-card';
import AdamPhoto from '@/assets/people/adam.jpg';
import AlexPhoto from '@/assets/people/alex.jpg';
import MaximusPhoto from '@/assets/people/maximus.jpg';
import JoshPhoto from '@/assets/people/josh.jpg';
import ElliePhoto from '@/assets/people/ellie.jpg';
import DaePhoto from '@/assets/people/dae.jpg';
import DannyPhoto from '@/assets/people/danny.jpg';
import EthanPhoto from '@/assets/people/ethan.jpg';
import AvatarImage from '@/assets/people/avatar.jpg';

const people: IdCardProps[] = [
  {
    name: 'Adam',
    role: 'WSAF Lead (Technical)',
    description: '4th Year Computer Systems Engineering',
    image: AdamPhoto,
  },
  {
    name: 'Alex',
    role: 'WSAF Lead (Operations)',
    description: '2nd Year\nChemistry (PhD)',
    image: AlexPhoto,
  },
  {
    name: 'Dae',
    role: 'WSAF Lead (Communications)',
    description: '2nd Year\nLiberal Arts',
    image: DaePhoto,
  },
  {
    name: 'Maximus',
    role: 'WSAF Lead (Finance & Data)',
    description: '1st Year\nMathematics',
    image: MaximusPhoto,
  },
  {
    name: 'Josh',
    role: 'Head of\nDigital',
    description: '2nd Year Computer Science',
    image: JoshPhoto,
  },
  {
    name: 'Ellie',
    role: 'Head of Marketing',
    description: '2nd Year English and Theatre Studies',
    image: ElliePhoto,
  },
  {
    name: 'Ethan',
    role: 'Head of\nTeam Catering',
    description: '3rd Year Mechanical Engineering',
    image: EthanPhoto,
  },
  {
    name: 'Danny',
    role: 'Sustainability Coordinator',
    description: '2nd Year Biological Sciences',
    image: DannyPhoto,
  },
  {
    name: 'You?',
    role: 'Volunteer',
    emailDescription: true,
    image: AvatarImage,
  },
];

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
        {people.map((person) => (
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
  );
}
