import { StaticImageData } from 'next/image';
import Image from 'next/image';

export type IdCardProps = {
  name: string;
  description?: string;
  role?: string;
  image?: StaticImageData;
};

export default function IdCard({
  name,
  description,
  role,
  image,
}: {
  name: string;
  description?: string;
  role?: string;
  image?: StaticImageData;
}) {
  return (
    <article className="rounded-xl m-2 overflow-hidden w-40 sm:w-48 flex flex-col bg-accent">
      <header className="bg-secondary h-6 sm:h-8 flex justify-center items-center">
        <div className="rounded-2xl w-12 h-2 sm:h-3 mt-1 bg-accent" />
      </header>
      <div className="flex-grow flex flex-col px-4 py-1 sm:py-2 text-black">
        {image && (
          <Image
            src={image}
            alt={`Image of ${name}`}
            className="mx-auto mb-2 w-24 sm:w-32 h-auto"
          />
        )}
        <h3 className="text-lg sm:text-xl font-bold leading-tight">{name}</h3>
        {description && (
          <span className="block text-xs sm:text-sm leading-tight">
            {description}
          </span>
        )}
      </div>
      {role && (
        <footer className="bg-secondary text-sm sm:text-lg uppercase font-bold pt-1 pb-1 sm:pb-2 px-2 mt-auto">
          {role}
        </footer>
      )}
    </article>
  );
}
