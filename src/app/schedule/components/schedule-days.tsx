import { ScheduleDay } from '@/lib/schedule';
import ScheduleVenueDay from '@/app/schedule/components/schedule-venue-day';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

export default function ScheduleDays({
  scheduleDays,
  hideVenues,
}: {
  scheduleDays: ScheduleDay[];
  hideVenues?: boolean;
}) {
  return (
    <div>
      {scheduleDays.map((scheduleDay) => (
        <div
          key={scheduleDay.earliestEventDate.toDateString()}
          className="mb-12 relative"
        >
          <div className="relative">
            <div className="absolute top-0 bottom-0 flex justify-center items-center left-0 right-0">
              <div className="bg-accent w-full h-1" />
            </div>

            <h2 className="relative text-2xl font-semibold px-3 py-0.5 bg-accent">
              {dayjs(scheduleDay.earliestEventDate).format('dddd Do')}
            </h2>
          </div>

          <div className="overflow-x-scroll flex">
            <div className="w-4 xs:w-6 sm:w-12 md:w-16 lg:w-24 xl:w-52 2xl:w-64 flex-grow flex-shrink-0 mr-3" />
            <div>
              {scheduleDay.venueScheduleDays.map((venueScheduleDay) => (
                <ScheduleVenueDay
                  venueScheduleDay={venueScheduleDay}
                  key={venueScheduleDay.venue.id}
                  hideVenues={hideVenues}
                />
              ))}
            </div>
            <div className="w-4 xs:w-6 sm:w-12 md:w-16 lg:w-24 xl:w-52 2xl:w-64 flex-grow flex-shrink" />
          </div>
        </div>
      ))}
    </div>
  );
}
