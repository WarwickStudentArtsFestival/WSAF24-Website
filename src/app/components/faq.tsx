import styles from './faq.module.css';

export default function Faq() {
  return (
    <section className="mb-32">
      <h2>FAQ</h2>

      <div
        className={`max-w-7xl mx-auto px-8 my-2 leading-tight space-y-6 ${styles.faq}`}
      >
        <div>
          <h3>Why are you putting on this event?</h3>
          <p>
            Warwick University has a wealth of highly motivated student bands,
            theatre societies and other performing groups which we want to
            present to whole Warwick community in the summer term. This is
            inspired by the old &apos;Warwick Student Arts Festival&apos;, which
            to our knowledge last took place in 2015.
          </p>
        </div>

        <div>
          <h3>
            {' '}
            How is WSAF different to other events such as{' '}
            <a
              href="https://www.warwicksu.com/campaigns-communities/campaigns/active/socsfest/"
              target="_blank"
            >
              SocFest
            </a>
            ,{' '}
            <a
              href="https://drive.google.com/file/d/1uNcPJ72mN3d80Z9YvosB4V_yyIPJo-sb/view"
              target="_blank"
            >
              MTW StageFest
            </a>{' '}
            and{' '}
            <a
              href="https://www.instagram.com/freshbloodfestival2024/"
              target="_blank"
            >
              Freshblood Festival
            </a>
            ?
          </h3>
          <p>
            WSAF&apos;s aim is to widen performance opportunities and to give
            people the chance to watch something that they might not have seen
            otherwise. We&apos;re providing a wider range of arts than
            society-specific events such as StageFest and Freshblood, and are
            more performance and arts-related than SocFest. You&apos;re more
            than welcome to submit and exhibit the same performance at both WSAF
            and another event.
          </p>
        </div>

        <div>
          <h3>Where will everything take place?</h3>
          <p>
            WSAF will take place all over the Warwick University campus. Our
            preliminary list includes a stage on the Piazza, Curiositea and the
            FAB Studios in addition to the performance spaces in Avon and
            Milburn House - however this is subject to change.
          </p>
        </div>

        <div>
          <h3>
            Is there any funding available for production costs, and how much
            will tickets be?
          </h3>
          <p>
            We will have more information on budget and pricing at a later date,
            however please{' '}
            <a href="mailto:info@wsaf.org.uk" target="_blank">
              get in touch
            </a>{' '}
            as this will likely be discussed individually. In order to ensure
            that everyone can access this event, if we do sell tickets in
            certain venues this will likely be minimal (&lt;£5). Tech (sound,
            lights and video) will be provided by WSAF in combination with Tech
            Crew and does not need to be individually budgeted for.
          </p>
        </div>

        <div>
          <h3>How long can my performance be?</h3>
          <p>
            We&apos;re hoping for most shows to be shorter than 60 minutes, to
            allow people to see as much as possible over the weekend. However,
            if your show is longer than this,{' '}
            <a href="mailto:info@wsaf.org.uk" target="_blank">
              get in touch
            </a>{' '}
            and we can work something out.
          </p>
        </div>

        <div>
          <h3>
            I&apos;d like to help out but don&apos;t want or have anything to
            perform. Is this possible?
          </h3>
          <p>
            Of course! We&apos;ll likely need a lot of help in advance with
            organisation and marketing, and on the day with operations and
            logistics. Please reach out to us at{' '}
            <a href="mailto:info@wsaf.org.uk" target="_blank">
              info@wsaf.org.uk
            </a>
            .
          </p>
        </div>

        <div>
          <h3>
            {' '}
            I&apos;ve found references to an older Warwick Student Arts Festival
            or Warwick Fringe Before. Is this related?
          </h3>
          <p>
            Yes! To the best of our knowledge, the Warwick Student Arts Festival
            used to be a yearly event, however this last ran in{' '}
            <a
              href="https://web.archive.org/web/20160126222504/http://www.wsaf.co.uk/schedule"
              target="_blank"
            >
              2015
            </a>
            . We&apos;re looking at reviving this again in 2024, with a
            completely new team.
          </p>
        </div>

        <div>
          <h3>Where can I find more information?</h3>
          <p>
            Please contact us by email at{' '}
            <a href="mailto:info@wsaf.org.uk" target="_blank">
              info@wsaf.org.uk
            </a>{' '}
            or on Instagram at{' '}
            <a href="https://www.instagram.com/wsaf24/" target="_blank">
              @wsaf24
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
