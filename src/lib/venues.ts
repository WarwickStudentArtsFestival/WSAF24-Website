import prisma from '@/lib/prisma';

export async function getVenues() {
  return prisma.schedule_venue.findMany({
    include: {
      _count: {
        select: {
          schedule_eventinstance: {
            where: {
              published: true,
              parent_id: null,
            },
          },
        },
      },
    },
  });
}

export function getVenueCount() {
  return prisma.schedule_venue.count();
}

export function getVenue(slug: string) {
  return prisma.schedule_venue.findFirst({ where: { slug } });
}
