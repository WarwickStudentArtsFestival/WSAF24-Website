import prisma from '@/lib/prisma';
import { Prisma, schedule_category, schedule_event } from '@prisma/client';
import dayjs from 'dayjs';

export async function getEventInstances() {
  return prisma.schedule_eventinstance.findMany({
    orderBy: {
      start: 'asc',
    },
    include: {
      schedule_event: {
        include: {
          schedule_organisation: true,
        },
      },
    },
  });
}

export async function getEvent(
  id: number,
): Promise<schedule_event_with_relations | null> {
  return prisma.schedule_event.findFirst({
    where: { id },
    include: {
      schedule_organisation: true,
      schedule_event_categories: { include: { schedule_category: true } },
      schedule_eventinstance: { include: { schedule_venue: true } },
    },
  });
}

export async function getEvents(): Promise<schedule_event_with_relations[]> {
  return prisma.schedule_event.findMany({
    include: {
      schedule_organisation: true,
      schedule_event_categories: { include: { schedule_category: true } },
      schedule_eventinstance: { include: { schedule_venue: true } },
    },
  });
}

export type schedule_event_with_relations = Prisma.schedule_eventGetPayload<{
  include: {
    schedule_organisation: true;
    schedule_event_categories: { include: { schedule_category: true } };
    schedule_eventinstance: { include: { schedule_venue: true } };
  };
}>;

export function formatShowDateTime(date: Date) {
  return dayjs(date).format('ddd h:mma');
}
