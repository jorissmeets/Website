import Image from "next/image";

export function InnerHero() {
  return (
    <section className="inner-hero" aria-label="Carecogni">
      <div className="brand-lockup">
        <Image
          src="/assets/carecogni-mark-light.svg"
          width={269}
          height={138}
          priority
          alt="Carecogni"
        />
      </div>
    </section>
  );
}
