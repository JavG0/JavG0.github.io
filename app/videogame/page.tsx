"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function VideogamePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const screenshots = [
    { src: "/placeholder.svg?height=300&width=500", alt: "Cyber Nexus Screenshot 1", title: "Ciudad Cyberpunk" },
    { src: "/placeholder.svg?height=300&width=500", alt: "Cyber Nexus Screenshot 2", title: "Combate Futurista" },
    { src: "/placeholder.svg?height=300&width=500", alt: "Cyber Nexus Screenshot 3", title: "Exploración Urbana" },
    { src: "/placeholder.svg?height=300&width=500", alt: "Cyber Nexus Screenshot 4", title: "Tecnología Avanzada" },
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
              <Link href="/videogame" className="nav-link text-red-500 font-semibold">
                Videojuego
              </Link>
              <Link href="/animation" className="nav-link hover:text-red-500 transition-colors">
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
                <Link href="/videogame" className="text-red-500 font-semibold">
                  Videojuego
                </Link>
                <Link href="/animation" className="hover:text-red-500 transition-colors">
                  Animación
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Project Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-black via-gray-900 to-black text-center">
        <div className="max-w-4xl mx-auto px-6">
          <div className="inline-block bg-gradient-to-r from-red-500 to-purple-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
            VIDEOJUEGO
          </div>
          <h1 className="mb-6">
            <span
              className="block text-6xl md:text-8xl font-black text-transparent stroke-red-500"
              style={{ WebkitTextStroke: "2px #ef4444" }}
            >
              CYBER
            </span>
            <span className="block text-6xl md:text-8xl font-black bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
              NEXUS
            </span>
          </h1>
          <p className="text-xl text-purple-400 mb-8">El Futuro de los Videojuegos de Acción</p>
          <div className="flex flex-wrap justify-center gap-6 text-gray-300">
            <span>Género: Acción/Aventura</span>
            <span>Plataforma: PC, PlayStation, Xbox</span>
            <span>Estado: En Desarrollo</span>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            TRAILER OFICIAL
          </h2>
          <div className="relative rounded-2xl overflow-hidden bg-gray-800">
            <video controls poster="/placeholder.svg?height=400&width=800" className="w-full h-auto">
              <source src="#" type="video/mp4" />
              Tu navegador no soporta el elemento de video.
            </video>
          </div>
        </div>
      </section>

      {/* Game Info */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-4xl font-bold text-red-500 mb-6">SUMÉRGETE EN EL FUTURO</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                Cyber Nexus te transporta a un mundo cyberpunk donde la tecnología y la humanidad colisionan en una
                experiencia de juego sin precedentes. Explora una metrópolis futurista llena de secretos, combate
                enemigos con habilidades mejoradas cibernéticamente y descubre la verdad detrás de la conspiración que
                amenaza con destruir la sociedad tal como la conocemos.
              </p>

              <div>
                <h3 className="text-xl text-purple-400 mb-4">CARACTERÍSTICAS PRINCIPALES</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">🎯</span>
                    Sistema de combate dinámico con más de 50 habilidades únicas
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">🌆</span>
                    Mundo abierto de 15 km² completamente explorable
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">🤖</span>
                    IA avanzada que se adapta a tu estilo de juego
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">🎨</span>
                    Gráficos fotorrealistas con ray tracing en tiempo real
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">🎵</span>
                    Banda sonora original compuesta por artistas reconocidos
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-500 mr-3">🏆</span>
                    Sistema de progresión con múltiples caminos de desarrollo
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-br from-red-500/10 to-purple-600/10 p-8 rounded-3xl border border-red-500/20">
              <div className="mb-8">
                <h4 className="text-xl text-red-500 mb-4">DESARROLLO</h4>
                <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                  <div
                    className="bg-gradient-to-r from-red-500 to-purple-600 h-3 rounded-full"
                    style={{ width: "75%" }}
                  ></div>
                </div>
                <span className="text-gray-300">75% Completado</span>
              </div>

              <div>
                <h4 className="text-xl text-purple-400 mb-4">ESPECIFICACIONES TÉCNICAS</h4>
                <div className="space-y-3">
                  {[
                    { label: "Motor:", value: "Unreal Engine 5" },
                    { label: "Resolución:", value: "Hasta 4K 60fps" },
                    { label: "Audio:", value: "Dolby Atmos" },
                    { label: "Multijugador:", value: "Hasta 32 jugadores" },
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

      {/* Screenshots Gallery */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            CAPTURAS DEL JUEGO
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {screenshots.map((screenshot, index) => (
              <div
                key={index}
                className="relative group cursor-pointer rounded-2xl overflow-hidden"
                onClick={() => setSelectedImage(screenshot.src)}
              >
                <Image
                  src={screenshot.src || "/placeholder.svg"}
                  alt={screenshot.alt}
                  width={500}
                  height={300}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-2">{screenshot.title}</h4>
                    <span className="text-gray-300">Ver en grande</span>
                  </div>
                </div>
              </div>
            ))}
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
              alt="Screenshot ampliado"
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
