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
  organisation,
}: {
  name: string;
  description?: string;
  role?: string;
  image?: StaticImageData;
  organisation?: boolean;
}) {
  return (
    <article
      className={`rounded-xl m-2 overflow-hidden w-56 flex flex-col ${organisation ? 'bg-secondary' : 'bg-accent'}`}
    >
      <header className="bg-secondary h-10 flex justify-center items-center">
        <div
          className={`rounded-2xl w-12 h-3 mt-1 ${organisation ? 'bg-primary' : 'bg-accent'}`}
        />
      </header>
      <div
        className={`flex-grow flex flex-col px-4 py-2 ${organisation ? 'mb-2' : 'text-black'}`}
      >
        {image && (
          <Image
            src={image}
            alt={`Image of ${name}`}
            className={`mx-auto mb-2 ${organisation ? 'h-20 w-auto' : 'w-36 h-auto'}`}
          />
        )}
        <h3 className="mt-auto text-xl font-bold leading-tight">{name}</h3>
        {description && (
          <span className="block text-sm leading-tight">{description}</span>
        )}
      </div>
      {role && (
        <footer className="bg-secondary text-xl uppercase font-bold pt-1 pb-2 px-2 mt-auto">
          {role}
        </footer>
      )}
    </article>
  );
}
