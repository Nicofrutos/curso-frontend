"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Building2, Mail, MapPin, PhoneIcon as Whatsapp, HardHat, Wrench, Instagram } from "lucide-react" // Cambiado PhoneIcon as Whatsapp a solo Whatsapp
import { Button } from "@/components/ui/button"
import { PresupuestoModal } from "@/components/presupuesto-modal"
import { TJFAnimatedWords } from "@/components/tjf-animated-words"

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)

  return (
    <div className="flex min-h-screen flex-col">
      {/* Modal de Presupuesto */}
      <PresupuestoModal isOpen={isModalOpen} onClose={closeModal} />

      {/* Header */}
      <header className="sticky top-0 z-40 border-b bg-background">
        <div className="container flex h-16 items-center py-4 relative">
          {/* Logo a la izquierda */}
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center drop-shadow-lg" style={{ width: 40, height: 40 }}>
              <Image
                src="/logo-tjf-new.png"
                alt="TJF CONSTRUCCIONES Logo"
                width={40}
                height={40}
                className="object-contain drop-shadow-md opacity-70"
              />
            </div>
            <span className="text-xl font-bold tracking-tight">TJF CONSTRUCCIONES</span>
          </div>

          {/* Navegación centrada */}
          <nav className="hidden md:flex items-center gap-6 absolute left-1/2 transform -translate-x-1/2">
            <Link href="#inicio" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Inicio
            </Link>
            <Link href="#servicios" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Servicios
            </Link>
            <Link href="#proyectos" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Proyectos
            </Link>
            <Link href="#nosotros" className="text-sm font-medium hover:text-yellow-500 transition-colors">
              Nosotros
            </Link>
          </nav>

          {/* Botón de contacto arriba a la derecha */}
          <div className="flex items-center gap-2 ml-auto">
            <Link href="#contacto">
              <Button className="hidden md:flex bg-yellow-500 hover:bg-yellow-600 text-black">Contacto</Button>
            </Link>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle Menu</span>
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1920&auto=format&fit=crop"
              alt="Diseño Arquitectónico"
              fill
              className="object-cover brightness-50"
              priority
            />
          </div>
          <div className="container relative z-10 flex flex-col items-center justify-center space-y-4 py-24 text-center md:py-32 lg:py-40">
            <div className="space-y-4">
              <div className="flex items-center justify-center mb-6">
                <div className="flex items-center justify-center drop-shadow-2xl" style={{ width: 180, height: 180 }}>
                  <Image
                    src="/logo-tjf-new.png"
                    alt="TJF CONSTRUCCIONES Logo"
                    width={180}
                    height={180}
                    className="object-contain drop-shadow-2xl filter opacity-65"
                    style={{
                      filter: "drop-shadow(0 25px 25px rgba(0, 0, 0, 0.5)) drop-shadow(0 10px 10px rgba(0, 0, 0, 0.3))",
                    }}
                  />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-white">
                TJF <span className="text-yellow-500">CONSTRUCCIONES</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-lg text-white md:text-xl">
                Técnica, Jerarquía y Fundamento, nuestra forma de CONSTRUIR
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Link href="#servicios">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Nuestros Servicios</Button>
              </Link>
              <Link href="#contacto">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-black">Contactar</Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Servicios */}
        <section id="servicios" className="bg-black py-16 md:py-24">
          <div className="container space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-500">
                Nuestros Servicios
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Soluciones Completas en Construcción
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-gray-400">
                Ofrecemos servicios profesionales para todas sus necesidades constructivas
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-yellow-500/20 bg-black/50 p-6 text-center">
                <div className="rounded-full bg-yellow-500/20 p-4">
                  <Building2 className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Proyectos Integrales de Arquitectura</h3>
                <p className="text-muted-foreground text-gray-400">
                  Diseñamos y ejecutamos proyectos arquitectónicos completos, desde la concepción hasta la entrega
                  final.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-yellow-500/20 bg-black/50 p-6 text-center">
                <div className="rounded-full bg-yellow-500/20 p-4">
                  <HardHat className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Obras en General</h3>
                <p className="text-muted-foreground text-gray-400">
                  Construcción de edificios, viviendas, locales comerciales y todo tipo de obras civiles con los más
                  altos estándares.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border border-yellow-500/20 bg-black/50 p-6 text-center">
                <div className="rounded-full bg-yellow-500/20 p-4">
                  <Wrench className="h-8 w-8 text-yellow-500" />
                </div>
                <h3 className="text-xl font-bold text-white">Mantenimientos</h3>
                <p className="text-muted-foreground text-gray-400">
                  Servicios de mantenimiento preventivo y correctivo para edificios, instalaciones y estructuras.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Proyectos */}
        <section id="proyectos" className="py-16 md:py-24">
          <div className="container space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-white px-3 py-1 text-sm text-black">Nuestros Proyectos</div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trabajos Destacados</h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground">
                Conoce algunos de nuestros proyectos más recientes
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  id: 1,
                  title: "Cabinas Estadio Mario Alberto Kempes",
                  location: "Córdoba Capital",
                  image: "/proyecto-1.jpg",
                },
                {
                  id: 2,
                  title: "Construcción de Galería",
                  location: "Zona Residencial",
                  image: "/proyecto-2.jpg",
                },
                {
                  id: 3,
                  title: "Diseño y Remodelación de Interiores",
                  location: "Nueva Córdoba",
                  image: "/proyecto-3.jpg",
                },
                {
                  id: 4,
                  title: "Construcción de Vivienda",
                  location: "Barrio Cerro Chico",
                  image: "/proyecto-4.jpg",
                },
                {
                  id: 5,
                  title: "Remodelación de Vivienda",
                  location: "Zona Norte",
                  image: "/proyecto-5.jpg",
                },
                {
                  id: 6,
                  title: "Construcción de Galpón y Obra Seca",
                  location: "Parque Industrial",
                  image: "/proyecto-6.jpg",
                },
              ].map((project) => (
                <div key={project.id} className="group relative overflow-hidden rounded-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="aspect-video object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-gray-200">{project.location}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Nosotros */}
        <section id="nosotros" className="bg-black py-16 md:py-24">
          <div className="container">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-500">
                  Sobre Nosotros
                </div>
                <div className="flex items-center gap-4 py-4">
                  <div className="flex items-center justify-center drop-shadow-lg" style={{ width: 80, height: 80 }}>
                    <Image
                      src="/logo-tjf-new.png"
                      alt="TJF CONSTRUCCIONES Logo"
                      width={80}
                      height={80}
                      className="object-contain drop-shadow-lg opacity-70"
                    />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                    TJF CONSTRUCCIONES
                  </h2>
                </div>
                <p className="text-muted-foreground text-gray-400">
                  Somos una empresa constructora con amplia experiencia en el sector, dedicada a ofrecer soluciones
                  integrales en construcción y arquitectura.
                </p>
                <ul className="grid gap-4">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-yellow-500/20 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-yellow-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Profesionales altamente calificados</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-yellow-500/20 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-yellow-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Materiales de primera calidad</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-yellow-500/20 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-yellow-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Cumplimiento de plazos</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-yellow-500/20 p-1">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-4 w-4 text-yellow-500"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Atención personalizada</span>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-square md:aspect-auto">
                <Image
                  src="/equipo-tjf.jpg"
                  alt="Equipo TJF CONSTRUCCIONES trabajando en obra"
                  fill
                  className="rounded-lg object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Estadísticas */}
        <section className="py-16 md:py-24">
          <div className="container">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-4xl font-bold text-yellow-500">+100</div>
                <div className="text-sm font-medium">Proyectos Completados</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-4xl font-bold text-yellow-500">10</div>
                <div className="text-sm font-medium">Años de Experiencia</div>
              </div>
              <div className="flex flex-col items-center justify-center space-y-2 text-center">
                <div className="text-4xl font-bold text-yellow-500">+200</div>
                <div className="text-sm font-medium">Clientes Satisfechos</div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="bg-black py-16 md:py-24">
          <div className="container space-y-12">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-block rounded-lg bg-yellow-500/20 px-3 py-1 text-sm text-yellow-500">
                Testimonios
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Lo que dicen nuestros clientes
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground text-gray-400">
                La satisfacción de nuestros clientes es nuestro mayor logro
              </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Testimonio 1 */}
              <div className="relative rounded-lg border border-yellow-500/20 bg-black/50 p-6">
                <div className="absolute -top-5 left-6">
                  <div className="flex h-10 items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <p className="text-gray-300 italic">
                    "TJF CONSTRUCCIONES transformó nuestra idea en una casa espectacular. Su atención al detalle y
                    profesionalismo superaron todas nuestras expectativas. El proyecto se entregó a tiempo y dentro del
                    presupuesto acordado."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <span className="text-yellow-500 font-bold text-lg">MR</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Martín Rodríguez</h4>
                      <p className="text-sm text-gray-400">Casa Residencial - Nueva Córdoba</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonio 2 */}
              <div className="relative rounded-lg border border-yellow-500/20 bg-black/50 p-6">
                <div className="absolute -top-5 left-6">
                  <div className="flex h-10 items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <p className="text-gray-300 italic">
                    "Contratamos a TJF CONSTRUCCIONES para la construcción de nuestras oficinas corporativas y quedamos
                    completamente satisfechos. Su equipo fue muy profesional y resolvió cada desafío con soluciones
                    creativas y eficientes."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <span className="text-yellow-500 font-bold text-lg">CL</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Carolina López</h4>
                      <p className="text-sm text-gray-400">Oficinas Empresariales - Centro</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonio 3 */}
              <div className="relative rounded-lg border border-yellow-500/20 bg-black/50 p-6">
                <div className="absolute -top-5 left-6">
                  <div className="flex h-10 items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5 text-yellow-500"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                      </svg>
                    ))}
                  </div>
                </div>
                <div className="mt-6 space-y-4">
                  <p className="text-gray-300 italic">
                    "Hemos trabajado con TJF CONSTRUCCIONES en varios proyectos de remodelación y siempre han demostrado
                    un alto nivel de compromiso y calidad. Su servicio de mantenimiento posterior es excelente y muy
                    confiable."
                  </p>
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-yellow-500/20 flex items-center justify-center">
                      <span className="text-yellow-500 font-bold text-lg">JG</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Juan González</h4>
                      <p className="text-sm text-gray-400">Complejo Comercial - Zona Norte</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contacto */}
        <section id="contacto" className="relative bg-white py-16 md:py-24">
          <div className="absolute inset-0 z-0 flex items-center justify-center">
            <Image
              src="/logo-tjf-new.png"
              alt="TJF CONSTRUCCIONES Logo Translucido"
              width={500} // Ajusta el tamaño según sea necesario
              height={500} // Ajusta el tamaño según sea necesario
              className="object-contain opacity-10" // Ajusta la opacidad para que sea traslúcido
            />
          </div>
          <div className="container relative z-10">
            <div className="grid gap-12 md:grid-cols-2 md:gap-16">
              <div className="flex flex-col justify-center space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-black">
                  ¿Listo para comenzar tu proyecto?
                </h2>
                <p className="text-muted-foreground text-gray-600">
                  Contáctanos para una consulta gratuita y presupuesto sin compromiso
                </p>
                <div className="grid gap-4">
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-200 p-2">
                      <MapPin className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <div className="font-medium text-black">Ubicación</div>
                      <div className="text-sm text-gray-600">Córdoba Capital, Argentina</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="rounded-full bg-gray-200 p-2">
                      <Mail className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <div className="font-medium text-black">Email</div>
                      <div className="text-sm text-gray-600">obras@grupotjf.com</div>
                    </div>
                  </div>
                  <Link
                    href="https://wa.me/543512172437"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div className="rounded-full bg-gray-200 p-2">
                      <Whatsapp className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <div className="font-medium text-black">Teléfono</div>
                      <div className="text-sm text-gray-600">+54 3512172437</div>
                    </div>
                  </Link>
                  <Link
                    href="https://instagram.com/tjf_construcciones"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                  >
                    <div className="rounded-full bg-gray-200 p-2">
                      <Instagram className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <div className="font-medium text-black">Instagram</div>
                      <div className="text-sm text-gray-600">@tjf_construcciones</div>
                    </div>
                  </Link>
                </div>
              </div>
              {/* Reemplazamos el código anterior con el nuevo componente animado */}
              <TJFAnimatedWords />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-black py-6 md:py-8">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center drop-shadow-md" style={{ width: 32, height: 32 }}>
              <Image
                src="/logo-tjf-new.png"
                alt="TJF CONSTRUCCIONES Logo"
                width={32}
                height={32}
                className="object-contain drop-shadow-sm opacity-65"
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">TJF CONSTRUCCIONES</span>
          </div>
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {new Date().getFullYear()} TJF CONSTRUCCIONES. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-400 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="https://instagram.com/tjf_construcciones"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-500"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link href="#" className="text-gray-400 hover:text-yellow-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
              </svg>
              <span className="sr-only">Twitter</span>
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
