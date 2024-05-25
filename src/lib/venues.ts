import prisma from '@/lib/prisma';

export function getVenues() {
  return prisma.schedule_venue.findMany();
}

export function getVenueCount() {
  return prisma.schedule_venue.count();
}

export function getVenue(slug: string) {
  return prisma.schedule_venue.findFirst({ where: { slug } });
}
