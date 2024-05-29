import { ScheduleDay } from '@/lib/schedule';
import ScheduleVenueDay from '@/app/schedule/components/schedule-venue-day';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import ScheduleDayTimelineClient, {
  TimelineData,
  TimelineOptions,
} from '@/app/schedule/components/schedule-day-timeline-client';
import { getEventColourHex } from '@/lib/events';
dayjs.extend(advancedFormat);

export default function ScheduleDayTimeline({
  scheduleDay,
}: {
  scheduleDay: ScheduleDay;
}) {
  const data: TimelineData = [
    [
      { type: 'string', id: 'Venue' },
      { type: 'string', id: 'Event' },
      { type: 'date', id: 'Start' },
      { type: 'date', id: 'End' },
    ],
  ];
  const options: TimelineOptions = {
    timeline: {
      groupByRowLabel: true,
      rowLabelStyle: {
        fontName: 'var(--font-lexend)',
        fontSize: 14,
        color: '#ffffff',
      },
      barLabelStyle: {
        fontName: 'var(--font-lexend)',
        fontSize: 12,
      },
    },
    colors: [],
    backgroundColor: '#087F8C',
    alternatingRowStyle: false,
    avoidOverlappingGridLines: true,
  };
  const urls = [];

  for (const venueScheduleDay of scheduleDay.venueScheduleDays) {
    for (const event of venueScheduleDay.eventInstances) {
      if (!event) continue;

      data.push([
        event.schedule_venue.name,
        event.schedule_event.title,
        event.start,
        event.end,
      ]);

      options.colors.push(getEventColourHex(event.schedule_event));
      urls.push(`/events/${event.schedule_event.slug}`);
    }
  }

  return (
    <div
      className="overflow-x-scroll px-4 timeline-view"
      style={{ display: 'none' }}
    >
      <ScheduleDayTimelineClient
        data={data}
        options={options}
        id={`schedule-timeline-${scheduleDay.venueScheduleDays[0]?.eventInstances[0]?.id}`}
        urls={urls}
        height={scheduleDay.venueScheduleDays.length * 41 + 80}
      />
    </div>
  );
}
