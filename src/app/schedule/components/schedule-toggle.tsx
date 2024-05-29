'use client';

import { useEffect, useState } from 'react';
import { FiCalendar, FiClock } from 'react-icons/fi';

export default function ScheduleToggle() {
  const [scheduleView, setScheduleView] = useState(true);

  const updateView = (scheduleView: boolean) => {
    Array.prototype.forEach.call(
      document.getElementsByClassName('schedule-view'),
      (element) => {
        element.style['display'] = scheduleView ? 'flex' : 'none';
      },
    );
    Array.prototype.forEach.call(
      document.getElementsByClassName('timeline-view'),
      (element) => {
        element.style['display'] = scheduleView ? 'none' : 'block';
      },
    );
  };

  useEffect(() => {
    if (localStorage.getItem('timeline-view')) {
      updateView(false);
      setScheduleView(false);
    }
  }, []);

  const switchToTimeline = () => {
    localStorage.setItem('timeline-view', '1');
    updateView(false);
    setScheduleView(false);
    window.dispatchEvent(new Event('resize'));
  };

  const switchToSchedule = () => {
    localStorage.removeItem('timeline-view');
    updateView(true);
    setScheduleView(true);
  };

  return (
    <div className="text-right">
      <button
        className="inline-block bg-secondary px-2 py-0.5 rounded-sm drop-shadow-sm hover:scale-105 mr-4"
        onClick={scheduleView ? switchToTimeline : switchToSchedule}
      >
        {scheduleView ? (
          <FiClock className="inline-block mb-1 mr-1" />
        ) : (
          <FiCalendar className="inline-block mb-1 mr-1" />
        )}
        <span className="uppercase font-medium">
          {scheduleView ? 'Timeline' : 'Schedule'} View
        </span>
      </button>
    </div>
  );
}
