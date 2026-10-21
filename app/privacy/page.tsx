import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter } from "@/components/landing/site-footer";
import { SiteHeader } from "@/components/landing/site-header";

export const metadata: Metadata = {
  title: "Política de Privacidad | Teikio",
  description:
    "Conoce cómo Teikio recopila, utiliza, almacena y protege la información de los usuarios de nuestra plataforma de gestión para restaurantes.",
  alternates: {
    canonical: "/privacy",
  },
  openGraph: {
    type: "website",
    locale: "es_LA",
    url: "https://teikio.com/privacy",
    siteName: "Teikio",
    title: "Política de Privacidad | Teikio",
    description:
      "Conoce cómo Teikio recopila, utiliza, almacena y protege la información de los usuarios de nuestra plataforma de gestión para restaurantes.",
  },
};

export default function Privacidad() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="min-h-screen">
      <SiteHeader>
        <Link
          href="/"
          className="text-sm text-on-surface-variant hover:text-foreground"
        >
          Volver al inicio
        </Link>
      </SiteHeader>

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 pt-12 pb-20 sm:pt-16">
        <h1 className="text-3xl font-semibold sm:text-4xl">
          Política de Privacidad — Teikio
        </h1>
        <p className="mt-2 text-sm text-muted-text">
          Última actualización: {currentYear}
        </p>

        <div className="mt-10 space-y-10 font-normal text-on-surface-variant">
          <p className="text-lg leading-relaxed">
            Teikio es una plataforma de gestión para restaurantes desarrollada
            por Intenli. Esta Política de Privacidad explica cómo recopilamos,
            utilizamos, almacenamos y protegemos la información de los usuarios
            de Teikio.
          </p>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              1. Información que recopilamos
            </h2>
            <p className="mt-3">
              Dependiendo del uso de la aplicación, podemos recopilar:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Nombre y apellido.</li>
              <li>Dirección de correo electrónico.</li>
              <li>Número de teléfono, cuando sea necesario.</li>
              <li>Información de la cuenta y del restaurante.</li>
              <li>
                Información relacionada con pedidos, productos, mesas y ventas.
              </li>
              <li>Información necesaria para gestionar suscripciones y pagos.</li>
              <li>Información técnica del dispositivo y de la aplicación.</li>
              <li>Información relacionada con notificaciones push.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              2. Cómo utilizamos la información
            </h2>
            <p className="mt-3">Utilizamos esta información para:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Crear y administrar las cuentas de usuarios.</li>
              <li>Proporcionar las funcionalidades de Teikio.</li>
              <li>
                Gestionar restaurantes, pedidos, productos, mesas y ventas.
              </li>
              <li>Procesar y verificar suscripciones.</li>
              <li>
                Enviar notificaciones relacionadas con la operación del
                restaurante.
              </li>
              <li>Mantener la seguridad de la plataforma.</li>
              <li>Detectar y solucionar errores.</li>
              <li>Mejorar nuestros servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              3. Pagos y suscripciones
            </h2>
            <p className="mt-3">
              Las suscripciones de Teikio pueden adquirirse mediante Google Play.
            </p>
            <p className="mt-3">
              Los pagos son procesados por Google Play. Teikio no recibe ni
              almacena directamente los datos completos de las tarjetas
              utilizadas para realizar estos pagos.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              4. Notificaciones
            </h2>
            <p className="mt-3">
              Teikio puede utilizar notificaciones push para enviar información
              relacionada con pedidos, pagos, operaciones del restaurante y
              otros eventos relevantes.
            </p>
            <p className="mt-3">
              El usuario puede gestionar los permisos de notificaciones desde la
              configuración de su dispositivo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              5. Cómo compartimos la información
            </h2>
            <p className="mt-3">
              No vendemos información personal de nuestros usuarios.
            </p>
            <p className="mt-3">
              Podemos compartir información con proveedores de servicios que
              nos ayudan a operar Teikio, como servicios de infraestructura,
              almacenamiento, autenticación, notificaciones y procesamiento de
              pagos, únicamente cuando sea necesario para proporcionar nuestros
              servicios.
            </p>
            <p className="mt-3">
              También podemos divulgar información cuando sea requerido por la
              ley.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">6. Seguridad</h2>
            <p className="mt-3">
              Implementamos medidas técnicas y organizativas razonables para
              proteger la información contra acceso, modificación, divulgación
              o destrucción no autorizada.
            </p>
            <p className="mt-3">
              Sin embargo, ningún sistema electrónico puede garantizar una
              seguridad absoluta.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              7. Retención de datos
            </h2>
            <p className="mt-3">
              Conservamos la información mientras sea necesaria para proporcionar
              Teikio, cumplir obligaciones legales, resolver disputas y hacer
              cumplir nuestros acuerdos.
            </p>
            <p className="mt-3">
              Cuando la información ya no sea necesaria, podremos eliminarla o
              anonimizarla de acuerdo con nuestras políticas de retención.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              8. Eliminación de la cuenta
            </h2>
            <p className="mt-3">
              Los usuarios pueden solicitar la eliminación de su cuenta y de los
              datos personales asociados cuando corresponda.
            </p>
            <p className="mt-3">Las solicitudes pueden realizarse mediante:</p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>
                Email:{" "}
                <a
                  href="mailto:support@teikio.com"
                  className="text-primary underline underline-offset-4 hover:opacity-80"
                >
                  support@teikio.com
                </a>
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              9. Privacidad de menores
            </h2>
            <p className="mt-3">
              Teikio está destinado a usuarios que administran restaurantes y no
              está dirigido a niños.
            </p>
            <p className="mt-3">
              No recopilamos deliberadamente información personal de menores.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">
              10. Cambios a esta Política de Privacidad
            </h2>
            <p className="mt-3">
              Podemos actualizar esta Política de Privacidad periódicamente.
              Cuando realicemos cambios importantes, actualizaremos la fecha
              indicada al principio de esta página.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-foreground">11. Contacto</h2>
            <p className="mt-3">
              Si tienes preguntas sobre esta Política de Privacidad o sobre el
              tratamiento de tus datos, puedes contactarnos en:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Intenli</li>
              <li>
                Email:{" "}
                <a
                  href="mailto:support@teikio.com"
                  className="text-primary underline underline-offset-4 hover:opacity-80"
                >
                  support@teikio.com
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://teikio.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary underline underline-offset-4 hover:opacity-80"
                >
                  https://teikio.com
                </a>
              </li>
            </ul>
          </section>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
