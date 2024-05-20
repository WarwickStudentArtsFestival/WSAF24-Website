import PageHeader from '@/app/components/page-header';
import FestivalsTable from '@/app/history/festivals-table';
import Wsaf2004Poster from '@/assets/history/wasf-2004-poster.jpg';
import Image from 'next/image';

export default function History() {
  return (
    <main>
      <PageHeader title="The History of WSAF" />
      <section className="max-w-6xl mx-auto px-4">
        <p className="mb-2">
          Warwick Student Arts Festival is not a completely novel idea - it made
          its{' '}
          <a
            href="https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/"
            className="text-accent"
            target="_blank"
            rel="noopener noreferrer"
          >
            first debut on 20-24 June 2004
          </a>
          , with over 50 events. Since then, it ran for 11 further years before
          it stopped, with more and more success each time.{' '}
          <strong>
            Our aim is to bring this event back to campus, reclaiming the title
            as &quot;Europe&apos;s largest annual student arts festival&quot;.
          </strong>
        </p>
        <p>
          This page is based from the research of WSAF organisers Adam
          Skrzymowski and Josh Heng, which is based off what we can find online.
          Whilst we have made this as accurate as possible, there is likely to
          be things we&apos;ve missed or got wrong - if you know more about the
          lore of WSAF or know anything that could be interesting, please
          contact us at{' '}
          <a
            href="mailto:info@wsaf.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            info@wsaf.org.uk
          </a>
          !
        </p>
      </section>

      <section className="mb-6">
        <FestivalsTable />
      </section>

      <section className="max-w-6xl mx-auto px-4 mb-16">
        <h2>The Beginning</h2>
        <div className="flex gap-4 mb-2">
          <div className="w-96 flex-grow text-right">
            <p className="mb-2">
              The{' '}
              <a
                href="https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/"
                className="text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                first ever Warwick Student Arts Festival
              </a>{' '}
              took place from Sunday 20th June to Thursday 24th June 2004, being
              described as a
              <em>
                &quot;spectacular celebration of the creative talent at the
                University, encapsulating virtually every artistic genre
                imaginable.&quot;
              </em>{' '}
              This festival had over 50 events which ranged from a &apos;Paint
              Explosion&apos; and &apos;Prom in the Park&apos; to an
              &apos;Indian Raga Evening&apos; and &apos;Stomp Style
              Percussion&apos; - and from the website that was made and the
              subsequent yearly festivals, it seemed like this was a huge
              success.
            </p>
            <p>
              The next year,{' '}
              <a
                href="https://web.archive.org/web/20210918050951/https://blogs.warwick.ac.uk/wsaf/?num=10&start=10"
                className="text-accent"
                target="_blank"
                rel="noopener noreferrer"
              >
                WSAF &apos;05
              </a>
              , featured a <strong>piazza stage</strong> and started with an
              hour and a half of{' '}
              <em>&quot;The Greatest Show on Campus&quot;</em>, a combination of
              magic, juggling and music. This festival also included WSAF
              postcards and a printed programme and had &apos;hundreds&apos; of
              volunteers.
            </p>
          </div>
          <a
            href="https://web.archive.org/web/20050506042341/http://www.wsaf.org.uk:80/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src={Wsaf2004Poster}
              alt="Poster from WSAF 2004"
              className="w-36 object-contain"
            />
          </a>
        </div>

        <div className="flex gap-4 text-left mb-2">
          <iframe
            width="241"
            height="180"
            src="https://www.youtube.com/embed/zdXN7Y-Flxo?si=hP0IUv_ZMrEANFXy"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <div className="w-96 flex-grow">
            <p className="mb-2">
              Perhaps one of the most notable relics of WSAF &apos;05 was the{' '}
              <a
                href="https://www.youtube.com/watch?v=zdXN7Y-Flxo"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                WSAF Amarillo Music Video
              </a>
              , which premiered to over 3,000 people at Top Banana (the Student
              Union nightclub event predating Pop!). This was reportedly Warwick
              TV&apos;s most popular video in 2008, and won the &quot;Highly
              Commended Music to Video&quot; award at the 2006 National Student
              Television Association Awards.
            </p>
            <p>
              We can&apos;t anything about WSAF &apos;06 and can only find very
              little about{' '}
              <a
                href="https://web.archive.org/web/20070630063134/http://www.wsaf.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent"
              >
                WSAF &apos;07
              </a>
              . However, we do know that WSAF &apos;07 featured over 77 events
              and took place over 5 days so can only assume that WSAF grew and
              grew each year. We also know that while some events in WSAF
              &apos;04 were paid, by WSAF &apos;07 the full festival was free.
            </p>
          </div>
        </div>

        <h2 className="mt-4">The Middle</h2>

        <div>
          <p className="mb-2">
            <a
              href="https://web.archive.org/web/20081007200600/http://www.wsaf.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent"
            >
              WSAF &apos;08
            </a>{' '}
            celebrated the 5th anniversary of the festival, and at this point
            was recognised as{' '}
            <strong>the world&apos;s biggest student-led arts festival</strong>.
            The 5th year saw a Guinness record attempt to make the longest conga
            line in the world, a Chinese carnival parade and a ghost tour around
            campus. By this point, annual WSAF traditions included an opening
            concert by Revelation Rock Gospel Choir and late-night outdoor film
            screenings by Warwick Student Cinema.
          </p>
        </div>

        <p>
          In 2009, Warwick Student Arts Festival was temporarily renamed to{' '}
          <a
            href="http://web.archive.org/web/20090524043909/http://wsaf.org.uk/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            SPLAT-Fest
          </a>
          , standing for{' '}
          <strong>
            Student Performance, Literature, Art & Theatre Festival
          </strong>
          . This year was the first year that featured literature, with events
          such as a &apos;Writers Panel Discussion&apos;, &apos;Speed Book
          Club&apos; and &apos;Poetry Slam&apos; - in the first{' '}
          <a
            href="https://warwick.ac.uk/newsandevents/pressreleases/award-winning_author_to/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent"
          >
            WSAF-related press release from Warwick University
          </a>
          , it was announced that award-winning author AL Kennedy would headline
          at the festival.
        </p>

        <h2 className="mt-4">The End?</h2>
      </section>
    </main>
  );
}
