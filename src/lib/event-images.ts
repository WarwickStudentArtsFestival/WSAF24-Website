import MaskImage from '@/assets/icons/mask.png';
import WorkshopImage from '@/assets/icons/workshop.png';
import DanceImage from '@/assets/icons/dance.png';
import MusicImage from '@/assets/icons/music.png';
import SpokenWordImage from '@/assets/icons/spoken-word.png';
import { schedule_event_with_relations } from '@/lib/events';
import { StaticImageData } from 'next/image';

export function getEventLogo(
  event: schedule_event_with_relations,
): StaticImageData {
  const category = event.schedule_event_categories[0];
  if (!category) return MaskImage;

  switch (category.category_id.toString()) {
    case '1':
      return WorkshopImage;
    case '2':
      return DanceImage;
    case '3':
      return MusicImage;
    case '4':
      return SpokenWordImage;
    default:
      return MaskImage;
  }
}
