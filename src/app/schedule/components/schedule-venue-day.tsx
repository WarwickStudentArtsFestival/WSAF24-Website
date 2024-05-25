import { VenueScheduleDay } from '@/lib/schedule';
import ScheduleEventInstance from '@/app/schedule/components/schedule-event-instance';

export default function ScheduleVenueDay({
  venueScheduleDay,
  hideVenues,
}: {
  venueScheduleDay: VenueScheduleDay;
  hideVenues?: boolean;
}) {
  return (
    <div className="flex mb-4 overflow-x-scroll">
      <div className="sm:w-24 xl:w-64 flex-shrink-0" />
      {hideVenues || (
        <div className="flex w-44 flex-grow-0 flex-shrink-0 sticky left-0 z-10">
          <div className="bg-primary flex items-center justify-end text-right flex-grow">
            <a
              href={`/venues/${venueScheduleDay.venue.slug}`}
              className="hover:scale-105"
            >
              <h3 className="bg-accent text-black font-bold uppercase py-1 px-4 sticky ml-2 mr-1">
                {venueScheduleDay.venue.name}
              </h3>
            </a>
          </div>
          <div className="w-1 flex-shrink-0 bg-gradient-to-r from-primary sticky left-0" />
        </div>
      )}

      <div className="flex">
        {venueScheduleDay.eventInstances.map((eventInstance) => (
          <ScheduleEventInstance
            eventInstance={eventInstance}
            key={eventInstance.id}
          />
        ))}
      </div>
    </div>
  );
}
