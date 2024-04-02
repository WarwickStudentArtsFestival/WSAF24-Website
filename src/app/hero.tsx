import Image from 'next/image';
import HeroImage from '@/assets/hero.jpg';
import Logo from '@/assets/logo.png';

export default function Hero() {
  return (
    <div className="relative">
      <Image
        src={HeroImage}
        alt="Aerial shot of the Warwick University piazza"
        placeholder="blur"
        className="absolute h-full object-cover"
      />
      <div className="relative flex flex-wrap sm:flex-nowrap justify-center items-center p-6 sm:p-12 md:p-24">
        <Image
          src={Logo}
          alt="WSAF 2024 logo"
          placeholder="blur"
          className="my-6 mr-8 h-32 lg:h-36 w-auto object-contain drop-shadow-sm"
        />
        <div className="text-right my-6">
          <h1 className="text-left bg-primary font-bold py-2 px-4">
            <span className="block text-4xl sm:text-5xl lg:text-6xl">
              WSAF 2024
            </span>
            <span className="block text-sm xs:text-xl lg:text-3xl">
              Warwick Student Arts Festival
            </span>
          </h1>
          <span className="bg-primary text-accent font-bold text-xs 2xs:text-md lg:text-lg py-2 px-4">
            <time dateTime="2024-03-08T10:00:00.000">Saturday 8th</time> -{' '}
            <time dateTime="2024-03-10T22:00:00.000">Mon 10th March</time>
          </span>
        </div>
      </div>
    </div>
  );
}
