import { schedule_event_with_relations } from '@/lib/events';

export default function EventCard({
  event,
}: {
  event: schedule_event_with_relations;
}) {
  return (
    <article className="w-80 p-4 bg-secondary">
      <header>
        {event.schedule_organisation && (
          <p className="italic text-xs">
            {event.schedule_organisation.name} Presents
          </p>
        )}
        <h3 className="text-lg font-bold">{event.title}</h3>
        <div>
          {event.schedule_event_categories.map((category) => (
            <span key={category.id} className="uppercase">
              {category.schedule_category.name}
            </span>
          ))}
        </div>
      </header>
    </article>
  );
}
