import { CtaButtons } from "./cta-buttons";

export function ClosingCta() {
  return (
    <section id="contacto" className="px-6 pb-16 sm:pb-22">
      <div className="mx-auto max-w-5xl rounded-md bg-surface px-6 py-12 text-center sm:px-8 sm:py-14">
        <h2 className="text-[26px] leading-tight font-semibold sm:text-[34px]">
          Empieza hoy
        </h2>
        <p className="mx-auto mt-3 max-w-[36em] font-normal text-on-surface-variant">
          Crea tu restaurante en la app o escríbenos y te ayudamos a
          configurarlo.
        </p>
        <CtaButtons
          demoLabel="Escríbenos por WhatsApp"
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
        />
      </div>
    </section>
  );
}
