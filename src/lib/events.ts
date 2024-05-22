import prisma from '@/lib/prisma';
import { Prisma, schedule_category, schedule_event } from '@prisma/client';

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

export async function getEvents(): Promise<schedule_event_with_relations[]> {
  return prisma.schedule_event.findMany({
    include: {
      schedule_organisation: true,
      schedule_event_categories: { include: { schedule_category: true } },
    },
  });
}

export type schedule_event_with_relations = Prisma.schedule_eventGetPayload<{
  include: {
    schedule_organisation: true;
    schedule_event_categories: { include: { schedule_category: true } };
  };
}>;
