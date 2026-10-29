"use client";

import Navbar from "@/components/Navbar";
import DirectInformation from "@/components/DirectInformation";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Contacto() {
  return (
    <main className="min-h-screen bg-slate-50 pt-44 font-sans text-slate-800 md:pt-32">
      <Navbar />

      {/* Hero */}
      <section className="relative isolate min-h-52 overflow-hidden bg-slate-950 text-white">
        <div
          className="absolute inset-x-0 -top-44 bottom-0 -z-20 bg-cover bg-center md:-top-32"
          style={{
            backgroundImage: "url('/images/contacto-hero.jpeg')",
          }}
        />

        <div className="absolute inset-0 -z-10 bg-slate-950/55" />

        <div className="mx-auto flex min-h-52 max-w-7xl flex-col justify-center px-6 py-8 md:px-10 lg:px-12">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">
            Contacto
          </h1>

          <div className="mt-4 h-1 w-16 rounded-full bg-blue-500" />
        </div>

        <div className="h-1 w-full bg-gradient-to-r from-blue-700 via-blue-400 to-transparent" />
      </section>

      {/* Información y formulario */}
      <section
        id="contacto"
        className="bg-slate-50 py-10 sm:py-14 lg:py-16"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-12 lg:gap-8">
            {/* Información directa */}
            <div className="lg:col-span-5">
              <DirectInformation />
            </div>

            {/* Formulario de contacto */}
            <div className="min-w-0 lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}