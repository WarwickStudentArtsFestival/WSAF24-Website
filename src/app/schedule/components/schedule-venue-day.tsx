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
    <div className="flex relative w-min min-w-full">
      {hideVenues || (
        <div className="flex w-20 md:w-36 lg:w-44 flex-grow-0 flex-shrink-0 sticky left-0 z-20 overflow-hidden">
          <div className="items-stretch md:items-center bg-primary flex justify-end text-center md:text-right flex-grow max-w-full py-2">
            <a
              href={`/venues/${venueScheduleDay.venue.slug}`}
              className="hover:scale-105 max-w-full bg-accent flex justify-center items-center ml-2 mr-1
              "
            >
              <h3 className="[writing-mode:vertical-rl] md:[writing-mode:horizontal-tb] [transform:rotate(-180deg)] md:[transform:rotate(0)] h-min text-sm lg:text-base text-black font-bold uppercase break-words py-1 px-1 md:px-2 lg:px-4 ">
                {venueScheduleDay.venue.name}
              </h3>
            </a>
          </div>
          <div className="w-1 flex-shrink-0 bg-gradient-to-r from-primary sticky left-0" />
        </div>
      )}

      <div className="relative z-10 flex my-1.5">
        {hideVenues || (
          <div className="absolute top-0 bottom-0 left-0 w-full flex items-center z-0">
            <div className="absolute w-full h-1 bg-accent opacity-30" />
          </div>
        )}

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
