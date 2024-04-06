import styles from './faq.module.css';

export default function Faq() {
  return (
    <section className="mb-32">
      <h2>FAQ</h2>

      <div className={`mx-8 my-2 leading-tight space-y-6 ${styles.faq}`}>
        <div>
          <h3>Why are you putting on this event?</h3>
          <p>Answer</p>
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
          <p>Answer</p>
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
            . We&apos;re looking at reviving this again.
          </p>
        </div>

        <div>
          <h3>Where will WSAF take place?</h3>
          <p>Answer</p>
        </div>

        <div>
          <h3>
            Is there any funding available for production costs, and how much
            will shows be?
          </h3>
          <p>Answer</p>
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
