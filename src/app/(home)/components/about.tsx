import { FiArrowRight, FiInstagram } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
import PiazzaStage from '@/assets/images/stage.jpg';
import Dance from '@/assets/images/dance.jpg';
import Curiositea from '@/assets/images/curiositea.jpg';

export default function About() {
  return (
    <section className="-top-8 relative">
      <h2>What is WSAF?</h2>
      <div className="px-8 lg:text-lg max-w-5xl mx-auto">
        <p className="font-bold mb-2">
          Warwick Student Arts Festival (WSAF) is a 3 day showcase and
          celebration of all aspects of the arts at Warwick.
        </p>
        <p>
          Every day will feature a morning-to-evening programme of events
          including theatre, dance, music, film, literature, comedy and art held
          across the entirety of campus.
        </p>
        <a
          href="/schedule"
          className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mt-2"
        >
          <span className="text-xl lg:text-2xl uppercase font-bold">
            <FiArrowRight className="inline-block mb-1 mr-2" />
            What&apos;s On
          </span>
        </a>
        <p className="flex gap-2 justify-center mb-2">
          <a
            href="/instagram"
            target="_blank"
            className="flex items-center justify-center hover:scale-105"
          >
            <FiInstagram className="inline mr-0.5 mt-1" />
            @wsaf24
          </a>
          <span className="font-light">•</span>
          <a
            href="/discord"
            target="_blank"
            className="flex items-center justify-center hover:scale-105"
          >
            <FaDiscord className="inline mr-0.5 mt-0.5" />
            Discord
          </a>
        </p>
        <div className="flex gap-4 h-32 md:h-40 justify-center items-center mt-2">
          <Image
            src={PiazzaStage}
            alt="Piazza Stage"
            className="object-contain h-full w-auto max-w-1/3 hidden sm:block"
          />
          <Image
            src={Curiositea}
            alt="Curiositea"
            className="object-contain h-full w-auto max-w-1/3"
          />
          <Image
            src={Dance}
            alt="Dance"
            className="object-contain h-full w-auto max-w-1/3"
          />
        </div>
      </div>
    </section>
  );
}
