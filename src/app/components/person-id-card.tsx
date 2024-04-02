export default function PersonIdCard({
  name,
  description,
  role,
}: {
  name: string;
  description: string;
  role: string;
}) {
  return (
    <article className="rounded-xl bg-accent m-2 overflow-hidden w-56">
      <header className="bg-secondary h-10 flex justify-center items-center">
        <div className="bg-accent rounded-2xl w-12 h-3 mt-1" />
      </header>
      <main className="text-black px-4 py-2">
        <h3 className="text-xl font-bold">{name}</h3>
        <span className="text-sm">{description}</span>
      </main>
      <footer className="bg-secondary text-2xl uppercase font-bold py-1 px-2">
        <span>{role}</span>
      </footer>
    </article>
  );
}
