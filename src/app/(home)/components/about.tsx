import { FiArrowRight, FiInstagram } from 'react-icons/fi';
import { FaDiscord } from 'react-icons/fa';
import Image from 'next/image';
import PiazzaStage from '@/assets/images/stage.jpg';
import Dance from '@/assets/images/dance.jpg';
import Curiositea from '@/assets/images/curiositea.jpg';
import Art from '@/assets/images/art.jpg';
import Curiositea2 from '@/assets/images/curiositea-2.jpg';
import FabTerrace from '@/assets/images/fab-terrace.jpg';
import FabTerrace2 from '@/assets/images/fab-terrace-2.jpg';
import Theatre from '@/assets/images/theatre.jpg';
import TshirtMaking from '@/assets/images/tshirt-making.jpg';
import WsafClosingSpeech from '@/assets/images/wsaf-closing-speech.jpg';

export default function About() {
  return (
    <section className="-top-8 relative">
      <h2>What was WSAF 2024?</h2>
      <div className="px-8 lg:text-lg max-w-5xl mx-auto">
        <p className="mb-2">
          &ldquo;Last June, we brought the{' '}
          <strong>Warwick Student Arts Festival</strong> back to campus and saw{' '}
          <strong>2500+</strong> people celebrate the arts across{' '}
          <strong>3 days</strong> and a variety of art forms. Each of our spaces
          saw talented performers, some of whom had never performed publicly
          before, dazzle our audiences. With over <strong>30 volunteers</strong>{' '}
          and <strong>80 performers</strong> the event was a great comeback. We
          collaborated with other societies such as WSC, RAW and The Boar to
          widen our audience and become a space where any artist has a space to
          express themselves.
        </p>

        <p className="mb-1">
          Thank you to everyone for making WSAF24 a success. See you next
          year!&rdquo;
        </p>

        <p className="text-sm italic mb-2">
          - Maximus, on behalf of the{' '}
          <a href="/team" className="text-accent">
            WSAF Team
          </a>
        </p>

        <a
          href="https://wsaf.org.uk"
          className="inline-block bg-secondary px-4 py-1 rounded-sm drop-shadow-sm hover:scale-105 mt-2"
          target="_blank"
        >
          <span className="text-xl lg:text-2xl uppercase font-bold">
            <FiArrowRight className="inline-block mb-1 mr-2" />
            WSAF 2025
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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 mt-2 w-max mx-auto">
          <Image
            src={PiazzaStage}
            alt="Aerial photo of dance at the WSAF piazza stage"
            className="object-contain h-32 md:h-40 w-auto max-w-1/3"
          />
          <Image
            src={Curiositea}
            alt="The WSAF-mobile at Curiositea"
            className="object-contain h-32 md:h-40 w-auto max-w-1/3"
          />
          <Image
            src={Dance}
            alt="Dance at the WSAF piazza stage"
            className="object-contain h-32 md:h-40 w-auto max-w-1/3"
          />
          <Image
            src={TshirtMaking}
            alt="T-shirt making workship in the FAB"
            className="object-contain h-32 md:h-40 w-auto max-w-1/3"
          />
          <Image
            src={FabTerrace}
            alt="Aerial photo of WSAF at the FAB terrace"
            className="object-contain h-32 md:h-40 w-auto max-w-1/3"
          />
          <Image
            src={Art}
            alt="The WSAF art gallery"
            className="object-contain h-32 md:h-40 w-auto max-w-1/3 hidden sm:block"
          />
          <Image
            src={FabTerrace2}
            alt="The indoor WSAF FAB terrace"
            className="object-contain h-32 md:h-40 w-auto max-w-1/3"
          />
          <Image
            src={Theatre}
            alt="Theatre at WSAF"
            className="object-contain h-32 md:h-40 w-auto max-w-1/3"
          />
          <Image
            src={Curiositea2}
            alt="WSAF comedy night at Curiositea"
            className="object-contain h-32 md:h-40 w-auto max-w-1/3"
          />
          <Image
            src={WsafClosingSpeech}
            alt="WSAF closing speech"
            className="object-contain h-32 md:h-40 w-auto max-w-1/3 hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
}
