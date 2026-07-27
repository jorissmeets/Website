import Image from "next/image";

export function InnerHero({ title }: { title?: string }) {
  return (
    <>
      <section className="inner-hero" aria-label="Carecogni">
        <div className="brand-lockup">
          <Image
            src="/assets/carecogni-logo-dark.svg"
            width={499}
            height={109}
            priority
            alt="Carecogni"
          />
        </div>
      </section>
      {title ? (
        <section className="inner-page-title">
          <div className="container">
            <h1>{title}</h1>
          </div>
        </section>
      ) : null}
    </>
  );
}
