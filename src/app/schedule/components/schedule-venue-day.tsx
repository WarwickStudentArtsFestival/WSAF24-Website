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
    <div className="flex relative">
      <div className="sm:w-24 xl:w-64 flex-shrink-0" />
      {hideVenues || (
        <div className="flex w-44 flex-grow-0 flex-shrink-0 sticky left-0 z-20">
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

      {/*<div className="relative">
        <div className="absolute top-0 bottom-0 left-0 w-screen flex items-center z-0">
          <div className="absolute w-full border-b-4 border-b-accent opacity-50" />
        </div>
      </div>*/}

      <div className="relative z-10 flex my-1.5">
        {venueScheduleDay.eventInstances.map((eventInstance, index) =>
          eventInstance ? (
            <ScheduleEventInstance
              eventInstance={eventInstance}
              key={eventInstance.id}
            />
          ) : (
            <div key={index} className="w-52 mr-3"></div>
          ),
        )}
      </div>
    </div>
  );
}
