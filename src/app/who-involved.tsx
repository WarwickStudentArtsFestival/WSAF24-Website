import IdCard, { IdCardProps } from '@/app/components/id-card';
import AdamPhoto from '@/assets/people/adam.jpg';
import AlexPhoto from '@/assets/people/alex.jpg';
import MaximusPhoto from '@/assets/people/maximus.jpg';
import JoshPhoto from '@/assets/people/josh.jpg';
import ElliePhoto from '@/assets/people/ellie.jpg';

const people: IdCardProps[] = [
  {
    name: 'Adam',
    role: 'Coordinator',
    description: '4th Year Computer Systems Engineering',
    image: AdamPhoto,
  },
  {
    name: 'Alexander',
    role: 'Coordinator',
    description: '',
    image: AlexPhoto,
  },
  {
    name: 'Dae',
    role: 'Coordinator',
    description: '',
  },
  {
    name: 'Maximus',
    role: 'Coordinator',
    description: '1st Year Mathematics',
    image: MaximusPhoto,
  },
  {
    name: 'Josh',
    role: 'Webmaster',
    description: '2nd Year Computer Science',
    image: JoshPhoto,
  },
  {
    name: 'Ellie',
    role: 'Design Officer',
    description: '2nd Year English and Theatre Studies',
    image: ElliePhoto,
  },
];

export default function KeyDates() {
  return (
    <section className="mb-12">
      <h2>Who&apos;s Involved?</h2>
      <p>Some random text goes here</p>

      <div className="flex justify-center flex-wrap mb-8">
        {people.map((person) => (
          <IdCard
            key={person.name}
            name={person.name}
            description={person.description}
            role={person.role}
            image={person.image}
          />
        ))}
      </div>
    </section>
  );
}
