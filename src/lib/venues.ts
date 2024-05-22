import prisma from '@/lib/prisma';

export function getVenues() {
  return prisma.schedule_venue.findMany();
}

export function getVenue(slug: string) {
  return prisma.schedule_venue.findFirst({ where: { slug } });
}
