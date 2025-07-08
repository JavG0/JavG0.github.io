const coords = {x: 0, y: 0};
const circles = document.querySelectorAll(".circle")

const colors = [
  "#b70c00",
  "#be0016", 
  "#c30027", 
  "#c60037", 
  "#c70048",
  "#c4005b", 
  "#bf006e", 
  "#b60082", 
  "#a80096", 
  "#9600a9", 
  "#7d00bc", 
  "#8b00ff"]

circles.forEach(function (circle, index) {
  circle.x=0;
  circle.y=0;
  circle.style.backgroundColor = colors[index % colors.length]
})

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX
  coords.y = e.clientY
})

function animatecircles() {
  let x = coords.x
  let y = coords.y

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";
    
    circle.style.scale = (circles.length - index) / circles.length;
    circle.style.opacity = 1;
    //circle.style.opacity = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextcircle = circles[index + 1] || circles[0]
    x += (nextcircle.x - x) * 0.4;
    y += (nextcircle.y - y) * 0.4;
  });
  requestAnimationFrame(animatecircles)
}

animatecircles();

// Navegación móvil
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger")
  const navMenu = document.querySelector(".nav-menu")

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active")
      navMenu.classList.toggle("active")
    })

    // Cerrar menú al hacer click en un enlace
    document.querySelectorAll(".nav-link").forEach((n) =>
      n.addEventListener("click", () => {
        hamburger.classList.remove("active")
        navMenu.classList.remove("active")
      }),
    )
  }

  // Scroll suave para enlaces internos
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault()
      const target = document.querySelector(this.getAttribute("href"))
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
    })
  })

  // Animaciones al hacer scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observar elementos para animaciones
  document.querySelectorAll(".project-card, .service-item, .character-card, .timeline-item").forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
    observer.observe(el)
  })

  // Efecto parallax para elementos flotantes
  window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset
    const parallaxElements = document.querySelectorAll(".element")

    parallaxElements.forEach((element, index) => {
      const speed = 0.5 + index * 0.1
      const yPos = -(scrolled * speed)
      element.style.transform = `translateY(${yPos}px) rotate(${scrolled * 0.1}deg)`
    })
  })

  // Contador animado para estadísticas
  function animateCounters() {
    const counters = document.querySelectorAll(".stat-number")

    counters.forEach((counter) => {
      const target = Number.parseInt(counter.textContent.replace(/\D/g, ""))
      const increment = target / 100
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          counter.textContent = counter.textContent.replace(/\d+/, target)
          clearInterval(timer)
        } else {
          counter.textContent = counter.textContent.replace(/\d+/, Math.floor(current))
        }
      }, 20)
    })
  }

  // Activar contadores cuando sean visibles
  const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateCounters()
        statsObserver.unobserve(entry.target)
      }
    })
  })

  const statsSection = document.querySelector(".stats")
  if (statsSection) {
    statsObserver.observe(statsSection)
  }
})

// Funciones para el reproductor de video
function playVideo() {
  const video = document.querySelector(".project-video")
  const overlay = document.querySelector(".video-overlay")

  if (video && overlay) {
    video.play()
    overlay.style.display = "none"

    video.addEventListener("pause", () => {
      overlay.style.display = "flex"
    })

    video.addEventListener("ended", () => {
      overlay.style.display = "flex"
    })
  }
}

// Funciones para la galería de imágenes
function openModal(element) {
  const modal = document.getElementById("imageModal")
  const modalImg = document.getElementById("modalImage")
  const img = element.querySelector("img")

  if (modal && modalImg && img) {
    modal.style.display = "block"
    modalImg.src = img.src
    modalImg.alt = img.alt

    // Prevenir scroll del body cuando el modal está abierto
    document.body.style.overflow = "hidden"
  }
}

function closeModal() {
  const modal = document.getElementById("imageModal")
  if (modal) {
    modal.style.display = "none"
    document.body.style.overflow = "auto"
  }
}

// Cerrar modal al hacer click fuera de la imagen
window.addEventListener("click", (event) => {
  const modal = document.getElementById("imageModal")
  if (event.target === modal) {
    closeModal()
  }
})

// Cerrar modal con la tecla Escape
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeModal()
  }
})

// Funciones para las pestañas de la galería
function showGallery(galleryType) {
  // Ocultar todas las galerías
  document.querySelectorAll(".gallery-content").forEach((gallery) => {
    gallery.classList.remove("active")
  })

  // Remover clase active de todos los botones
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.classList.remove("active")
  })

  // Mostrar la galería seleccionada
  const selectedGallery = document.getElementById(galleryType)
  if (selectedGallery) {
    selectedGallery.classList.add("active")
  }

  // Activar el botón correspondiente
  event.target.classList.add("active")
}

// Efectos de hover para las tarjetas de proyecto
document.addEventListener("DOMContentLoaded", () => {
  const projectCards = document.querySelectorAll(".project-card")

  projectCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
})

// Animación de escritura para títulos
function typeWriter(element, text, speed = 100, delay = 1000) {
  let i = 0
  const originalText = element.innerHTML
  
  // Agregar estilos de transición
  element.style.transition = 'all 0.5s ease'
  element.style.minHeight = element.offsetHeight + 'px'
  element.style.minWidth = element.offsetWidth + 'px'
  element.innerHTML = ""

  setTimeout(() => {
    element.classList.add('visible')
    function type() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i)
        i++
        setTimeout(type, speed)
      }
    }
    type()
  }, delay)
}

// Aplicar efecto de escritura a títulos principales cuando sean visibles
const titleObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const originalText = entry.target.textContent
      typeWriter(entry.target, originalText, 50, 300) // Agregado delay de 1000ms (1 segundo)
      titleObserver.unobserve(entry.target)
    }
  })
})

// Observar títulos principales
document.addEventListener("DOMContentLoaded", () => {
  const mainTitles = document.querySelectorAll(".title-studio, .project-title")
  mainTitles.forEach((title) => {
    titleObserver.observe(title)
  })
})

// Función para cambiar el color de la barra de navegación al hacer scroll
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar")
  if (window.scrollY > 100) {
    navbar.style.background = "rgba(10, 10, 10, 0)"
  } else {
    navbar.style.background = "rgba(10, 10, 10, 0)"
  }
})

// Animación de progreso para barras de progreso
function animateProgressBars() {
  const progressBars = document.querySelectorAll(".progress-fill")

  progressBars.forEach((bar) => {
    const width = bar.style.width
    bar.style.width = "0%"

    setTimeout(() => {
      bar.style.width = width
    }, 
    bar.style.transition = "1s ease",
    1000)
  })
}

// Activar animación de barras de progreso cuando sean visibles
const progressObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animateProgressBars()
      progressObserver.unobserve(entry.target)
    }
  })
})

document.addEventListener("DOMContentLoaded", () => {
  const progressSection = document.querySelector(".game-stats, .animation-stats")
  if (progressSection) {
    progressObserver.observe(progressSection)
  }
})

// Función para manejar formularios (si se agregan en el futuro)
function handleFormSubmission(formId) {
  const form = document.getElementById(formId)
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault()

      // Aquí se puede agregar lógica para enviar datos
      const formData = new FormData(form)

      // Mostrar mensaje de confirmación
      showNotification("¡Gracias por tu interés! Te contactaremos pronto.", "success")
    })
  }
}

// Sistema de notificaciones
function showNotification(message, type = "info") {
  const notification = document.createElement("div")
  notification.className = `notification notification-${type}`
  notification.textContent = message

  notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === "success" ? "var(--primary-purple)" : "var(--primary-red)"};
        color: white;
        padding: 1rem 2rem;
        border-radius: 10px;
        z-index: 3000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
    `

  document.body.appendChild(notification)

  // Mostrar notificación
  setTimeout(() => {
    notification.style.transform = "translateX(0)"
  }, 100)

  // Ocultar notificación después de 3 segundos
  setTimeout(() => {
    notification.style.transform = "translateX(100%)"
    setTimeout(() => {
      document.body.removeChild(notification)
    }, 300)
  }, 3000)
}

// Lazy loading para imágenes
document.addEventListener("DOMContentLoaded", () => {
  const images = document.querySelectorAll('img[src*="placeholder"]')

  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target
        img.style.opacity = "0"
        img.style.transition = "opacity 0.3s ease"

        setTimeout(() => {
          img.style.opacity = "1"
        }, 100)

        imageObserver.unobserve(img)
      }
    })
  })

  images.forEach((img) => {
    imageObserver.observe(img)
  })
})

/* input animation */
const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    } 
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc); 
})