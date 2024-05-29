'use client';
import { Chart, ReactGoogleChartEvent } from 'react-google-charts';
import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';

export type TimelineData = (
  | string
  | { type: string; id: string; role?: string }
  | Date
)[][];

export type TimelineOptions = {
  timeline: {
    groupByRowLabel?: boolean;
    rowLabelStyle: { fontName: string; fontSize: number; color: string };
    barLabelStyle: { fontName: string; fontSize: number };
  };
  colors: string[];
  backgroundColor: string;
  alternatingRowStyle: boolean;
  avoidOverlappingGridLines: boolean;
};

export default function ScheduleDayTimelineClient({
  data,
  urls,
  options,
  id,
  height,
}: {
  data: TimelineData;
  urls: string[];
  options: TimelineOptions;
  id: string;
  height: number;
}) {
  const router = useRouter();
  const chartEvents: ReactGoogleChartEvent[] = [
    {
      eventName: 'ready',
      callback: () => {
        const textElements = document
          .getElementById(id)
          ?.getElementsByTagName('text');
        if (textElements) {
          Array.prototype.forEach.call(textElements, (textElement) => {
            if (textElement.getAttribute('font-family') === 'Arial') {
              textElement.setAttribute('fill', '#ffffff');
              textElement.setAttribute('font-family', 'var(--font-lexend)');
            }
          });
        }

        const pathElements = document
          .getElementById(id)
          ?.getElementsByTagName('path');
        if (pathElements) {
          Array.prototype.forEach.call(pathElements, (pathElement) => {
            if (pathElement.getAttribute('stroke') === '#07727e') {
              pathElement.setAttribute('stroke', '#FFBD0020');
            } else if (pathElement.getAttribute('stroke') === '#b7b7b7') {
              pathElement.setAttribute('stroke', '#FFBD0060');
            }
          });
        }

        const rectElements = document
          .getElementById(id)
          ?.getElementsByTagName('rect');
        if (rectElements) {
          Array.prototype.forEach.call(rectElements, (rectElement) => {
            if (rectElement.getAttribute('stroke') === '#9a9a9a') {
              rectElement.setAttribute('stroke', '#FFBD0060');
            }
          });
        }
      },
    },
    {
      eventName: 'select',
      callback: ({ chartWrapper }) => {
        const chart = chartWrapper.getChart();
        const selection = chart.getSelection()[0];
        if (selection && selection.row) {
          if (urls && urls[selection.row]) router.push(urls[selection.row]);
        }
      },
    },
  ];

  return (
    <div id={id} className="min-w-[110rem]">
      <Chart
        chartType="Timeline"
        data={data}
        width="100%"
        height={height}
        options={options}
        chartEvents={chartEvents}
      />
    </div>
  );
}
