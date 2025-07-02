"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function AnimationPage() {
  const [activeTab, setActiveTab] = useState("environments")
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const characters = [
    {
      name: "LUNA",
      role: "Protagonista",
      description:
        "Una joven artista con la habilidad única de dar vida a sus creaciones. Su viaje la llevará a descubrir el verdadero poder de la imaginación.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "MORPHEUS",
      role: "Guardián de Sueños",
      description:
        "Un ser ancestral que protege el equilibrio entre el mundo de los sueños y la realidad. Se convierte en mentor de Luna.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      name: "VOID",
      role: "Fuerza Antagonista",
      description: "Una entidad que se alimenta de pesadillas y busca sumergir ambos mundos en una oscuridad eterna.",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  const artGallery = {
    environments: [
      { src: "/placeholder.svg?height=300&width=500", title: "Ciudad de Cristal", desc: "Metrópolis onírica flotante" },
      {
        src: "/placeholder.svg?height=300&width=500",
        title: "Bosque de Memorias",
        desc: "Donde los recuerdos toman forma",
      },
      {
        src: "/placeholder.svg?height=300&width=500",
        title: "Océano Estelar",
        desc: "Mares que reflejan constelaciones",
      },
      {
        src: "/placeholder.svg?height=300&width=500",
        title: "Templo del Tiempo",
        desc: "Santuario donde pasado y futuro convergen",
      },
    ],
    characters: [
      {
        src: "/placeholder.svg?height=300&width=500",
        title: "Luna - Diseño Final",
        desc: "Concept art de la protagonista",
      },
      {
        src: "/placeholder.svg?height=300&width=500",
        title: "Morpheus - Formas",
        desc: "Diferentes manifestaciones del guardián",
      },
    ],
    creatures: [
      {
        src: "/placeholder.svg?height=300&width=500",
        title: "Dragones de Papel",
        desc: "Criaturas nacidas de origami viviente",
      },
      {
        src: "/placeholder.svg?height=300&width=500",
        title: "Sombras Danzantes",
        desc: "Entidades que habitan entre dimensiones",
      },
    ],
  }

  const timeline = [
    {
      phase: "Pre-producción",
      desc: "Desarrollo de concepto, storyboard y diseño de personajes",
      date: "Enero - Marzo 2023",
      completed: true,
    },
    {
      phase: "Producción Principal",
      desc: "Animación de episodios 1-8, grabación de voces",
      date: "Abril - Octubre 2023",
      completed: true,
    },
    {
      phase: "Post-producción",
      desc: "Edición final, efectos especiales y masterización de audio",
      date: "Noviembre 2023 - Febrero 2024",
      current: true,
    },
    { phase: "Estreno", desc: "Lanzamiento oficial en plataformas de streaming", date: "Marzo 2024", completed: false },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="navbar fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="nav-logo">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                OUTLINE STUDIO
              </h2>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link href="/" className="nav-link hover:text-red-500 transition-colors">
                Inicio
              </Link>
              <Link href="/videogame" className="nav-link hover:text-red-500 transition-colors">
                Videojuego
              </Link>
              <Link href="/animation" className="nav-link text-red-500 font-semibold">
                Animación
              </Link>
            </div>

            <button className="md:hidden flex flex-col space-y-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
              <span className="w-6 h-0.5 bg-white"></span>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Inicio
                </Link>
                <Link href="/videogame" className="hover:text-red-500 transition-colors">
                  Videojuego
                </Link>
                <Link href="/animation" className="text-red-500 font-semibold">
                  Animación
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Project Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-purple-900/20 to-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block bg-gradient-to-r from-red-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            SERIE ANIMADA
          </div>
          <h1 className="mb-6">
            <span
              className="block text-6xl md:text-8xl font-black text-transparent stroke-red-500"
              style={{ WebkitTextStroke: "2px #ef4444" }}
            >
              ETHEREAL
            </span>
            <span className="block text-6xl md:text-8xl font-black bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              DREAMS
            </span>
          </h1>
          <p className="text-xl text-purple-400 mb-8">Una Odisea Visual Extraordinaria</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <span>Género: Fantasía/Aventura</span>
            <span>Formato: Serie de 12 episodios</span>
            <span>Estado: Post-producción</span>
          </div>
        </div>
      </section>

      {/* Animation Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-red-500 mb-6">UNA HISTORIA QUE TRASCIENDE REALIDADES</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Ethereal Dreams es una serie animada que combina técnicas tradicionales de animación 2D con elementos 3D
                de vanguardia para crear un mundo visualmente impresionante. La historia sigue a Luna, una joven artista
                que descubre que sus sueños pueden manifestarse en la realidad, desencadenando una aventura épica a
                través de dimensiones oníricas llenas de criaturas místicas y paisajes surrealistas.
              </p>

              <div>
                <h3 className="text-xl text-purple-400 mb-6">ELEMENTOS DE LA HISTORIA</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {[
                    {
                      icon: "🌙",
                      title: "Protagonista",
                      desc: "Luna, una artista de 17 años con el poder de materializar sus sueños",
                    },
                    {
                      icon: "🌟",
                      title: "Mundo",
                      desc: "Dimensiones oníricas interconectadas con leyes físicas únicas",
                    },
                    {
                      icon: "⚔️",
                      title: "Conflicto",
                      desc: "Una fuerza oscura amenaza con consumir tanto sueños como realidad",
                    },
                    {
                      icon: "✨",
                      title: "Magia",
                      desc: "Sistema de poderes basado en emociones y creatividad artística",
                    },
                  ].map((element, index) => (
                    <div
                      key={index}
                      className="bg-gradient-to-br from-red-500/5 to-purple-600/5 p-4 rounded-xl border border-gray-800"
                    >
                      <h4 className="text-red-500 mb-2 flex items-center">
                        <span className="mr-2">{element.icon}</span>
                        {element.title}
                      </h4>
                      <p className="text-gray-300 text-sm">{element.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-purple-600/10 p-8 rounded-3xl border border-red-500/20">
              <div className="mb-8">
                <h4 className="text-xl text-red-500 mb-4">PRODUCCIÓN</h4>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-red-500 to-purple-600 h-3 rounded-full"
                    style={{ width: "90%" }}
                  ></div>
                </div>
                <span className="text-gray-300">90% Completado</span>
              </div>

              <div>
                <h4 className="text-xl text-purple-400 mb-4">ESPECIFICACIONES DE PRODUCCIÓN</h4>
                <div className="space-y-3">
                  {[
                    { label: "Duración:", value: "24 min por episodio" },
                    { label: "Resolución:", value: "4K Ultra HD" },
                    { label: "Frames:", value: "24 fps tradicional" },
                    { label: "Audio:", value: "5.1 Surround" },
                  ].map((spec, index) => (
                    <div key={index} className="flex justify-between py-2 border-b border-gray-700 last:border-b-0">
                      <span className="text-gray-400">{spec.label}</span>
                      <span className="text-white">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Characters */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            PERSONAJES PRINCIPALES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {characters.map((character, index) => (
              <div
                key={index}
                className="bg-black rounded-3xl overflow-hidden border border-gray-800 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="h-80 overflow-hidden">
                  <Image
                    src={character.image || "/placeholder.svg"}
                    alt={character.name}
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-red-500 mb-2">{character.name}</h3>
                  <p className="text-purple-400 font-semibold mb-3">{character.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed">{character.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Art Gallery */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            ARTE CONCEPTUAL
          </h2>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { key: "environments", label: "Ambientes" },
              { key: "characters", label: "Personajes" },
              { key: "creatures", label: "Criaturas" },
            ].map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-6 py-3 rounded-full border-2 transition-all ${
                  activeTab === tab.key
                    ? "bg-purple-500 border-purple-500 text-white"
                    : "border-purple-500 text-white hover:bg-purple-500"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Content */}
          <div className="grid md:grid-cols-2 gap-6">
            {artGallery[activeTab as keyof typeof artGallery].map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-2xl overflow-hidden"
                onClick={() => setSelectedImage(item.src)}
              >
                <Image
                  src={item.src || "/placeholder.svg"}
                  alt={item.title}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center p-4">
                    <h4 className="text-xl font-bold text-red-500 mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            CRONOLOGÍA DE PRODUCCIÓN
          </h2>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-red-500 to-purple-600"></div>
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "flex-row-reverse" : ""}`}
              >
                <div
                  className={`w-5 h-5 rounded-full absolute left-1/2 transform -translate-x-1/2 z-10 ${
                    item.completed
                      ? "bg-purple-500"
                      : item.current
                        ? "bg-gradient-to-r from-red-500 to-purple-600 animate-pulse"
                        : "bg-gray-600"
                  }`}
                ></div>
                <div className={`w-5/12 ${index % 2 === 0 ? "text-right pr-8" : "pl-8"}`}>
                  <div className="bg-gradient-to-br from-red-500/10 to-purple-600/10 p-6 rounded-2xl border border-red-500/20">
                    <h3 className="text-xl font-bold text-red-500 mb-2">{item.phase}</h3>
                    <p className="text-gray-300 mb-3">{item.desc}</p>
                    <span className="text-purple-400 font-semibold text-sm">{item.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Watch Section */}
      <section className="py-20">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-gradient-to-br from-black to-gray-900 p-12 rounded-3xl border border-red-500/20 text-center">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent mb-4">
              PRÓXIMAMENTE
            </h2>
            <p className="text-gray-300 mb-8">
              Ethereal Dreams estará disponible en las principales plataformas de streaming
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {["Netflix", "Amazon Prime", "Disney+", "Crunchyroll"].map((platform) => (
                <div
                  key={platform}
                  className="bg-gradient-to-br from-red-500/10 to-purple-600/10 px-4 py-2 rounded-full border border-red-500/20"
                >
                  {platform}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
              <button className="bg-gradient-to-r from-red-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform">
                Notificarme del Estreno
              </button>
              <button className="border-2 border-purple-500 px-8 py-4 rounded-full font-semibold hover:bg-purple-500 transition-colors">
                Ver Trailer
              </button>
            </div>
            <p className="text-gray-400">
              Fecha de estreno: <strong className="text-white">Marzo 2024</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Modal for image gallery */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute -top-12 right-0 text-white text-4xl hover:text-red-500"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Arte conceptual ampliado"
              width={800}
              height={600}
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold text-red-500 mb-4">OUTLINE STUDIO</h3>
              <p className="text-gray-400">Creando el futuro del entretenimiento audiovisual.</p>
            </div>
            <div>
              <h4 className="text-lg text-purple-400 mb-4">Contacto</h4>
              <p className="text-gray-400 mb-2">info@outlinestudio.com</p>
              <p className="text-gray-400">+1 (555) 123-4567</p>
            </div>
            <div>
              <h4 className="text-lg text-purple-400 mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  Twitter
                </a>
                <a href="#" className="text-gray-400 hover:text-red-500 transition-colors">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="text-center pt-8 border-t border-gray-800">
            <p className="text-gray-500">&copy; 2024 Outline Studio. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
