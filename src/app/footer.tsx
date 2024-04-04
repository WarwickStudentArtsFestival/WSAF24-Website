import Image from 'next/image';
import warwickTechCrewLogo from '@/assets/organisations/warwick-tech-crew.png';

export default function Footer() {
  return (
    <footer className="bg-secondary mt-auto px-4 pt-6 pb-8 text-sm">
      <div className="m-2">
        <h3 className="font-bold">Delivery Partners</h3>
        <p className="font-light">
          WSAF would not be possible without the generous support of our
          delivery partners:
        </p>
        <div className="flex justify-center gap-4 mt-1">
          <Image
            src={warwickTechCrewLogo}
            alt="Warwick Tech Crew logo"
            className="h-16 w-auto"
          />
        </div>
      </div>
      <p className="font-light mt-8">
        Copyright © Warwick Student Arts Festival 2024
      </p>
    </footer>
  );
}
