import PersonIdCard from '@/app/components/person-id-card';

export default function KeyDates() {
  return (
    <section>
      <h2>Who's Involved?</h2>

      <div className="flex justify-center flex-wrap mb-8">
        <PersonIdCard
          name="Adam"
          description="5th Year Computer Systems Engineering"
          role="Role"
        />
        <PersonIdCard
          name="Adam"
          description="5th Year Computer Systems Engineering"
          role="Role"
        />
        <PersonIdCard
          name="Adam"
          description="5th Year Computer Systems Engineering"
          role="Role"
        />
        <PersonIdCard
          name="Adam"
          description="5th Year Computer Systems Engineering"
          role="Role"
        />
      </div>
    </section>
  );
}
