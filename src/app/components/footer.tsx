import Image from 'next/image';
import warwickTechCrewLogo from '@/assets/organisations/warwick-tech-crew.png';
import warwickSuLogo from '@/assets/organisations/warwick-su.svg';
import warwickPresentsLogo from '@/assets/organisations/warwick-presents.png';

export default function Footer() {
  return (
    <footer className="bg-secondary mt-auto px-4 pt-6 pb-8 text-sm">
      <div className="m-2">
        <h3 className="font-bold">Delivery Partners</h3>
        <p className="font-light">
          WSAF would not be possible without the generous support of our
          delivery partners:
        </p>
        <div className="flex justify-center items-center gap-4 mt-1">
          <a href="https://www.warwicktechcrew.co.uk/" target="_blank">
            <Image
              src={warwickTechCrewLogo}
              alt="Warwick Tech Crew logo"
              className="h-12 sm:h-16 w-auto"
            />
          </a>
          <a
            href="https://warwick.ac.uk/students/warwickpresents/"
            target="_blank"
          >
            <Image
              src={warwickPresentsLogo}
              alt="Warwick Presents logo"
              className="h-8 sm:h-10 w-auto"
            />
          </a>
          <a href="https://www.warwicksu.com/" target="_blank">
            <Image
              src={warwickSuLogo}
              alt="Warwick SU logo"
              className="h-9 sm:h-14 w-auto"
            />
          </a>
        </div>
      </div>
      <p className="font-light mt-8">
        Copyright © Warwick Student Arts Festival 2024
      </p>

      <p className="font-bold mt-0.5">
        <a href="mailto:info@wsaf.org.uk" target="_blank">
          info@wsaf.org.uk
        </a>
        <span className="font-light"> • </span>
        <a href="https://www.instagram.com/wsaf24/" target="_blank">
          @wsaf24
        </a>
      </p>
    </footer>
  );
}
