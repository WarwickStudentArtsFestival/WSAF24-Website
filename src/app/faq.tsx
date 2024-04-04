export default function Faq() {
  return (
    <section className="mb-32">
      <h2>FAQ</h2>

      <div className="mx-8 leading-tight">
        <p className="mt-2 font-bold text-lg leading-tight mb-1">
          Where can I find more information?
        </p>
        <p>
          Please contact us by email at{' '}
          <a
            href="mailto:info@wsaf.org.uk"
            target="_blank"
            className="text-accent"
          >
            info@wsaf.org.uk
          </a>{' '}
          or on Instagram at{' '}
          <a
            href="https://www.instagram.com/wsaf24/"
            target="_blank"
            className="text-accent"
          >
            @wsaf24
          </a>
          .
        </p>
      </div>
    </section>
  );
}
