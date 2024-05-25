import MaskImage from '@/assets/icons/mask.png';
import TrumpetImage from '@/assets/icons/trumpet.png';
import BalletShoesImage from '@/assets/icons/ballet_shoes.png';
import MicrophoneImage from '@/assets/icons/microphone.png';
import PaintbrushImage from '@/assets/icons/paintbrush.png';
import { schedule_event_with_relations } from '@/lib/events';
import { StaticImageData } from 'next/image';

export function getEventLogo(
  event: schedule_event_with_relations,
): StaticImageData {
  if (!event.schedule_category) return MaskImage;

  // https://github.com/WarwickStudentArtsFestival/WSAF-Management/blob/main/schedule/models.py#L101
  switch (event.schedule_category.icon) {
    case 'MASK':
      return MaskImage;
    case 'TRUMPET':
      return TrumpetImage;
    case 'BALLET_SHOES':
      return BalletShoesImage;
    case 'MICROPHONE':
      return MicrophoneImage;
    case 'PAINTBRUSH':
      return PaintbrushImage;
    default:
      return MaskImage;
  }
}
