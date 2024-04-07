import KeyDate, { KeyDateProps } from '@/app/components/key-date';

const keyDates: KeyDateProps[] = [
  {
    name: 'Submissions Open',
    date: 'Mon 1st Apr',
    dateTime: '2024-04-01',
    description: 'WSAF performance submissions open.',
  },
  {
    name: 'Submissions Close',
    date: 'Fri 26th Apr',
    dateTime: '2024-04-26',
    description:
      'Submission form closes and the schedule and logistics are finalised.',
  },
  {
    name: 'WSAF',
    date: 'Sat 8th - Mon 10th June',
    dateTime: '2024-06-08',
    description:
      'The festival itself - a 3 day showcase and celebration of all aspects of the arts.',
  },
];

export default function KeyDates() {
  return (
    <section className="mb-12">
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
