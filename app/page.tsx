"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"

const ParticleEffect = ({ isActive }: { isActive: boolean }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!isActive || !canvasRef.current) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      life: number
      maxLife: number
      color: string
    }> = []

    const colors = ["#ef4444", "#8b5cf6", "#ffffff"]

    const createParticle = () => {
      const side = Math.floor(Math.random() * 4)
      let x, y, vx, vy

      switch (side) {
        case 0: // top
          x = Math.random() * canvas.width
          y = -5
          vx = (Math.random() - 0.5) * 2
          vy = Math.random() * 2 + 1
          break
        case 1: // right
          x = canvas.width + 5
          y = Math.random() * canvas.height
          vx = -(Math.random() * 2 + 1)
          vy = (Math.random() - 0.5) * 2
          break
        case 2: // bottom
          x = Math.random() * canvas.width
          y = canvas.height + 5
          vx = (Math.random() - 0.5) * 2
          vy = -(Math.random() * 2 + 1)
          break
        default: // left
          x = -5
          y = Math.random() * canvas.height
          vx = Math.random() * 2 + 1
          vy = (Math.random() - 0.5) * 2
      }

      particles.push({
        x,
        y,
        vx,
        vy,
        life: 0,
        maxLife: 60 + Math.random() * 60,
        color: colors[Math.floor(Math.random() * colors.length)],
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Create new particles
      if (Math.random() < 0.3) {
        createParticle()
      }

      // Update and draw particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const particle = particles[i]
        particle.x += particle.vx
        particle.y += particle.vy
        particle.life++

        const alpha = 1 - particle.life / particle.maxLife
        ctx.globalAlpha = alpha * 0.6

        ctx.fillStyle = particle.color
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, 2, 0, Math.PI * 2)
        ctx.fill()

        if (particle.life >= particle.maxLife) {
          particles.splice(i, 1)
        }
      }

      if (isActive) {
        requestAnimationFrame(animate)
      }
    }

    animate()

    return () => {
      particles.length = 0
    }
  }, [isActive])

  if (!isActive) return null

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ width: "100%", height: "100%" }}
    />
  )
}

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar")
      if (navbar) {
        if (window.scrollY > 100) {
          navbar.classList.add("scrolled")
        } else {
          navbar.classList.remove("scrolled")
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="navbar fixed top-0 w-full z-50 bg-black/95 backdrop-blur-md transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="nav-logo">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                OUTLINE STUDIO
              </h2>
            </div>

            <div className="hidden md:flex space-x-8">
              <Link href="/" className="nav-link text-red-500 font-semibold">
                Inicio
              </Link>
              <Link href="/videogame" className="nav-link hover:text-red-500 transition-colors">
                Videojuego
              </Link>
              <Link href="/animation" className="nav-link hover:text-red-500 transition-colors">
                Animación
              </Link>
            </div>

            <button className="md:hidden flex flex-col space-y-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <span className="w-6 h-0.5 bg-white transition-all"></span>
              <span className="w-6 h-0.5 bg-white transition-all"></span>
              <span className="w-6 h-0.5 bg-white transition-all"></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-gray-800">
              <div className="flex flex-col space-y-4 pt-4">
                <Link href="/" className="text-red-500 font-semibold">
                  Inicio
                </Link>
                <Link href="/videogame" className="hover:text-red-500 transition-colors">
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

      {/* Hero Section */}
      <section className="hero min-h-screen flex items-center pt-20 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div className="hero-content">
            <h1 className="hero-title mb-6">
              <span
                className="block text-6xl md:text-8xl font-black text-transparent stroke-red-500"
                style={{ WebkitTextStroke: "2px #ef4444" }}
              >
                OUTLINE
              </span>
              <span className="block text-6xl md:text-8xl font-black bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
                STUDIO
              </span>
            </h1>
            <p className="text-xl text-purple-400 mb-4 font-light">
              Creamos experiencias audiovisuales extraordinarias
            </p>
            <p className="text-gray-300 mb-8 text-lg leading-relaxed max-w-lg">
              Somos una empresa especializada en la producción de contenido audiovisual innovador, desde videojuegos
              inmersivos hasta animaciones cautivadoras que trascienden los límites de la creatividad.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="bg-gradient-to-r from-red-500 to-purple-600 px-8 py-3 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Explorar Proyectos
              </a>
              <a
                href="#contact"
                className="border-2 border-purple-500 px-8 py-3 rounded-full font-semibold hover:bg-purple-500 transition-colors"
              >
                Contáctanos
              </a>
            </div>
          </div>

          <div className="hero-visual relative h-96">
            <div className="floating-elements relative w-full h-full">
              <div className="absolute w-24 h-24 bg-gradient-to-r from-red-500 to-purple-600 rounded-full top-1/4 left-1/4 animate-bounce"></div>
              <div className="absolute w-16 h-16 bg-purple-500 rounded-full top-3/5 right-1/3 animate-pulse"></div>
              <div className="absolute w-20 h-20 bg-red-500 rounded-full bottom-1/4 left-3/5 animate-spin"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            QUIÉNES SOMOS
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl text-red-500 mb-6">Innovación en Cada Pixel</h3>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                En Outline Studio, transformamos ideas en realidades visuales impactantes. Nuestro equipo de creativos y
                técnicos especializados trabaja con las últimas tecnologías para entregar proyectos que superan las
                expectativas.
              </p>
              <div className="grid grid-cols-3 gap-8 text-center">
                <div>
                  <span className="block text-4xl font-black text-purple-500">50+</span>
                  <span className="text-gray-400 text-sm">Proyectos Completados</span>
                </div>
                <div>
                  <span className="block text-4xl font-black text-purple-500">5</span>
                  <span className="text-gray-400 text-sm">Años de Experiencia</span>
                </div>
                <div>
                  <span className="block text-4xl font-black text-purple-500">100%</span>
                  <span className="text-gray-400 text-sm">Satisfacción del Cliente</span>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-red-500/10 to-purple-600/10 p-8 rounded-3xl border border-red-500/20">
              <h4 className="text-xl text-red-500 mb-4">Nuestra Misión</h4>
              <p className="text-gray-300">
                Crear contenido audiovisual que inspire, emocione y conecte con las audiencias a nivel global.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            NUESTROS PROYECTOS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Videogame Project */}
            <div
              className="project-card relative bg-gray-950 rounded-3xl overflow-hidden border border-gray-800 hover:transform hover:scale-105 transition-all duration-300 group"
              onMouseEnter={() => setHoveredProject("videogame")}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <ParticleEffect isActive={hoveredProject === "videogame"} />
              <div className="relative z-10">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Cyber Nexus"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent mb-2">
                        CYBER NEXUS
                      </h3>
                      <p className="text-gray-300 mb-4">Videojuego de Acción Futurista</p>
                      <Link
                        href="/videogame"
                        className="bg-gradient-to-r from-red-500 to-purple-600 px-6 py-2 rounded-full font-semibold"
                      >
                        Ver Proyecto
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl text-red-500 mb-2">Experiencia Gaming Inmersiva</h4>
                  <p className="text-gray-300">
                    Un mundo cyberpunk lleno de acción, aventura y tecnología de vanguardia.
                  </p>
                </div>
              </div>
            </div>

            {/* Animation Project */}
            <div
              className="project-card relative bg-gray-950 rounded-3xl overflow-hidden border border-gray-800 hover:transform hover:scale-105 transition-all duration-300 group"
              onMouseEnter={() => setHoveredProject("animation")}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <ParticleEffect isActive={hoveredProject === "animation"} />
              <div className="relative z-10">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Ethereal Dreams"
                    width={500}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-3xl font-bold bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent mb-2">
                        ETHEREAL DREAMS
                      </h3>
                      <p className="text-gray-300 mb-4">Serie Animada Original</p>
                      <Link
                        href="/animation"
                        className="bg-gradient-to-r from-red-500 to-purple-600 px-6 py-2 rounded-full font-semibold"
                      >
                        Ver Proyecto
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl text-red-500 mb-2">Animación de Clase Mundial</h4>
                  <p className="text-gray-300">
                    Una historia épica contada a través de animación 2D y 3D de alta calidad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-950">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            NUESTROS SERVICIOS
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: "🎮",
                title: "Desarrollo de Videojuegos",
                desc: "Creamos experiencias interactivas únicas con gameplay innovador y gráficos impresionantes.",
              },
              {
                icon: "🎬",
                title: "Producción Audiovisual",
                desc: "Desde conceptualización hasta post-producción, manejamos todos los aspectos de la creación audiovisual.",
              },
              {
                icon: "✨",
                title: "Animación 2D/3D",
                desc: "Damos vida a personajes e historias con técnicas de animación de última generación.",
              },
              {
                icon: "🎨",
                title: "Diseño Visual",
                desc: "Creamos identidades visuales impactantes que comunican la esencia de cada proyecto.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gradient-to-br from-red-500/5 to-purple-600/5 rounded-2xl border border-gray-800 hover:transform hover:scale-105 transition-all duration-300"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-lg text-purple-400 mb-3 font-semibold">{service.title}</h3>
                <p className="text-gray-300 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-950">
        <div className="max-w-2xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-red-500 to-purple-600 bg-clip-text text-transparent">
            CONTÁCTANOS
          </h2>
          <div className="bg-gradient-to-br from-red-500/10 to-purple-600/10 p-8 rounded-3xl border border-red-500/20">
            <p className="text-center text-gray-300 mb-8">
              ¿Tienes un proyecto en mente? Nos encantaría escuchar tus ideas y ayudarte a hacerlas realidad.
            </p>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none text-white"
                    placeholder="Tu nombre completo"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Teléfono (opcional)
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none text-white"
                    placeholder="Tu número de teléfono"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Correo Electrónico *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none text-white"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full px-4 py-3 bg-black/50 border border-gray-600 rounded-lg focus:border-red-500 focus:outline-none text-white resize-none"
                  placeholder="Cuéntanos sobre tu proyecto o consulta..."
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gradient-to-r from-red-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

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
