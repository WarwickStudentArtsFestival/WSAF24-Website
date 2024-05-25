import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
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
  slug: string,
): Promise<schedule_event_with_relations | null> {
  return prisma.schedule_event.findFirst({
    where: { slug },
    include: {
      schedule_organisation: true,
      schedule_category: true,
      schedule_event_categories: { include: { schedule_category: true } },
      schedule_eventinstance: { include: { schedule_venue: true } },
    },
  });
}

export async function getEvents(
  limit: number = -1,
): Promise<schedule_event_with_relations[]> {
  return prisma.schedule_event.findMany({
    take: limit === -1 ? undefined : limit,
    include: {
      schedule_organisation: true,
      schedule_category: true,
      schedule_event_categories: { include: { schedule_category: true } },
      schedule_eventinstance: { include: { schedule_venue: true } },
    },
  });
}

export type schedule_event_with_relations = Prisma.schedule_eventGetPayload<{
  include: {
    schedule_organisation: true;
    schedule_category: true;
    schedule_event_categories: { include: { schedule_category: true } };
    schedule_eventinstance: { include: { schedule_venue: true } };
  };
}>;

export function formatShowDateTime(date: Date) {
  return dayjs(date).format('ddd h:mma');
}

export function getEventColourClasses(
  event: schedule_event_with_relations,
): string {
  if (!event.schedule_category) return 'bg-secondary text-white';

  // https://github.com/WarwickStudentArtsFestival/WSAF-Management/blob/main/schedule/models.py#L108
  switch (event.schedule_category.colour_theme) {
    case 'YELLOW':
      return 'bg-accent text-black';
    case 'ORANGE':
      return 'bg-orange text-black';
    case 'PINK':
      return 'bg-tertiary text-black';
    case 'PURPLE':
      return 'bg-secondary text-white';
    default:
      return 'bg-secondary text-white';
  }
}
