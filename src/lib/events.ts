import prisma from '@/lib/prisma';
import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';
import { StaticImageData } from 'next/image';
import MaskImage from '@/assets/icons/mask.png';

export async function getEventInstances(
  venueId?: number,
): Promise<schedule_eventinstance_with_relations[]> {
  return prisma.schedule_eventinstance.findMany({
    orderBy: {
      start: 'asc',
    },
    where: {
      venue_id: venueId || undefined,
      parent_id: null,
      published: true,
      schedule_event: {
        published: true,
      },
    },
    include: {
      schedule_event: {
        include: {
          schedule_organisation: true,
          schedule_category: true,
          schedule_event_categories: { include: { schedule_category: true } },
        },
      },
      schedule_venue: true,
    },
  });
}

export async function getEvent(
  slug: string,
): Promise<schedule_event_with_relations_and_instances | null> {
  return prisma.schedule_event.findFirst({
    where: { slug, published: true },
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
): Promise<schedule_event_with_relations_and_instances[]> {
  return prisma.schedule_event.findMany({
    where: {
      published: true,
    },
    take: limit === -1 ? undefined : limit,
    include: {
      schedule_organisation: true,
      schedule_category: true,
      schedule_event_categories: { include: { schedule_category: true } },
      schedule_eventinstance: { include: { schedule_venue: true } },
    },
  });
}

export function getEventCount(): Promise<number> {
  return prisma.schedule_event.count({ where: { published: true } });
}

export type schedule_event_with_relations = Prisma.schedule_eventGetPayload<{
  include: {
    schedule_organisation: true;
    schedule_category: true;
    schedule_event_categories: { include: { schedule_category: true } };
  };
}>;

export type schedule_event_with_relations_and_instances =
  schedule_event_with_relations &
    Prisma.schedule_eventGetPayload<{
      include: {
        schedule_eventinstance: { include: { schedule_venue: true } };
      };
    }>;

export type schedule_eventinstance_with_relations =
  Prisma.schedule_eventinstanceGetPayload<{
    include: {
      schedule_event: {
        include: {
          schedule_organisation: true;
          schedule_category: true;
          schedule_event_categories: { include: { schedule_category: true } };
        };
      };
      schedule_venue: true;
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
      return 'bg-event-orange text-black';
    case 'PINK':
      return 'bg-event-pink text-white';
    case 'PURPLE':
      return 'bg-secondary text-white';
    default:
      return 'bg-secondary text-white';
  }
}

export function getEventLogo(
  event: schedule_event_with_relations,
): string | StaticImageData {
  if (event.logo) return `${process.env.WSAF_ASSETS_BASE_URL}/${event.logo}`;
  if (event.schedule_organisation?.logo)
    return `${process.env.WSAF_ASSETS_BASE_URL}/${event.schedule_organisation.logo}`;
  if (event.schedule_category?.image)
    return `${process.env.WSAF_ASSETS_BASE_URL}/${event.schedule_category.image}`;

  return MaskImage;
}
