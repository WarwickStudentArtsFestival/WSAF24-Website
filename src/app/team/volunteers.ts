import { IdCardProps } from '@/app/components/id-card';
import DallonPhoto from '@/assets/people/dallon.jpg';
import EchoPhoto from '@/assets/people/echo.jpg';
import KishanPhoto from '@/assets/people/kishan.jpg';

const volunteers: IdCardProps[] = [
  {
    name: 'Dallon',
    role: 'Crew',
    description: '2nd Year Spanish, Italian and Linguistics',
    image: DallonPhoto,
  },
  {
    name: 'Echo',
    role: 'Crew',
    description: '1st Year Cyber Security',
    image: EchoPhoto,
  },
  {
    name: 'Kishan',
    role: 'Crew',
    description: '2nd Year Discrete Maths',
    image: KishanPhoto,
  },
];

export default volunteers;
