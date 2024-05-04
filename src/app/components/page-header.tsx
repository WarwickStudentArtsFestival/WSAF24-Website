import Hero from '@/app/components/hero';

export default function PageHeader({ title }: { title: string }) {
  return (
    <>
      <Hero collapsed />
      <h1 className="heading -top-8 relative !-mb-4">{title}</h1>
    </>
  );
}
