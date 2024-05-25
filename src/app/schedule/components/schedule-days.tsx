import { ScheduleDay } from '@/lib/schedule';
import ScheduleVenueDay from '@/app/schedule/components/schedule-venue-day';
import dayjs from 'dayjs';

export default function ScheduleDays({
  scheduleDays,
  hideVenues,
}: {
  scheduleDays: ScheduleDay[];
  hideVenues?: boolean;
}) {
  return (
    <div className="">
      {scheduleDays.map((scheduleDay) => (
        <div
          key={scheduleDay.earliestEventDate.toDateString()}
          className="mb-8 relative"
        >
          <h2 className="text-xl font-semibold px-3 py-0.5">
            {dayjs(scheduleDay.earliestEventDate).format('dddd')}
          </h2>
          {scheduleDay.venueScheduleDays.map((venueScheduleDay) => (
            <ScheduleVenueDay
              venueScheduleDay={venueScheduleDay}
              key={venueScheduleDay.venue.id}
              hideVenues={hideVenues}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
