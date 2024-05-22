import prisma from '@/lib/prisma';

export function getVenues() {
  return prisma.schedule_venue.findMany();
}

export function getVenue(venueId: number) {
  return prisma.schedule_venue.findFirst({ where: { id: venueId } });
}
