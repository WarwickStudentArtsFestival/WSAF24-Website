import { archivePromise } from '@/lib/archive';
import * as venues from '@/lib/venues';

export async function getVenues() {
  return archivePromise('venues-getVenues', venues.getVenues);
}

export function getVenueCount() {
  return archivePromise('venues-getVenueCount', venues.getVenueCount);
}

export function getVenue(slug: string) {
  return archivePromise('venues-getVenue', venues.getVenue, slug);
}
