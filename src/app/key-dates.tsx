import KeyDate, { KeyDateProps } from '@/app/components/key-date';

const keyDates: KeyDateProps[] = [
  {
    name: 'Submissions Open',
    date: 'Mon 1st Apr',
    dateTime: '2024-04-01',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Submissions Close',
    date: 'Fri 26th Apr',
    dateTime: '2024-04-26',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Submissions Confirmed',
    date: 'Fri 3rd May',
    dateTime: '2024-05-03',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'Schedule Announced',
    date: 'Fri 17th May',
    dateTime: '2024-05-17',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    name: 'WSAF',
    date: 'Sat 8th - Mon 10th June',
    dateTime: '2024-06-08',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod  tempor incididunt ut labore et dolore magna aliqua.',
  },
];

export default function KeyDates() {
  return (
    <section className="mb-20">
      <h2 className="mb-4">Key Dates</h2>

      <div className="relative">
        <hr className="hidden lg:block border-secondary border-b-8 absolute top-1/2 w-full" />
        <div className="flex flex-col flex-wrap md:flex-row justify-center items-stretch gap-y-6 lg:-space-x-36 xl:-space-x-28">
          {keyDates.map((date) => (
            <KeyDate
              key={date.name}
              name={date.name}
              date={date.date}
              dateTime={date.dateTime}
              description={date.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
