type PageHeroProps = {
  title: string;
  subtitle: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="bg-navy pb-16 pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-cormorant text-4xl font-light text-cream md:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl font-dm text-lg text-mist/70">{subtitle}</p>
      </div>
    </section>
  );
}
