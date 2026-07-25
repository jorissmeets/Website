import Image from "next/image";

export function InnerHero({ title }: { title?: string }) {
  return (
    <section className={`inner-hero${title ? " inner-hero-titled" : ""}`} aria-label="Carecogni">
      <div className="brand-lockup">
        <Image
          src="/assets/carecogni-mark-light.svg"
          width={269}
          height={138}
          priority
          alt="Carecogni"
        />
      </div>
      {title ? <h1>{title}</h1> : null}
    </section>
  );
}
