import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects } from '../data/content'
import TechIcon from '../components/TechIcon'

/* ─── Lightbox (visor pantalla completa) ─────────────────────────────────── */
function Lightbox({ images, name, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  const prev = useCallback(() =>
    setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)), [images.length])

  const next = useCallback(() =>
    setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)), [images.length])

  // Navegación con teclado
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowLeft')  prev()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'Escape')     onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [prev, next, onClose])

  // Bloquea scroll del body mientras el lightbox está abierto
  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  return (
    <AnimatePresence>
      <motion.div
        key="lightbox-backdrop"
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        {/* Contenedor imagen — detiene propagación del click */}
        <motion.div
          className="relative flex flex-col items-center w-full h-full p-4 md:p-10"
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.92, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 300, damping: 28 }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Barra superior */}
          <div className="w-full flex items-center justify-between mb-3 flex-shrink-0">
            <span className="text-white font-semibold text-sm md:text-base truncate max-w-[70%]">
              {name}
            </span>
            <div className="flex items-center gap-4">
              <span className="text-white/60 text-sm">{current + 1} / {images.length}</span>
              <button
                onClick={onClose}
                className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
                aria-label="Cerrar visor"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>

          {/* Imagen principal */}
          <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden">
            <motion.img
              key={current}
              src={images[current]}
              alt={`${name} - imagen ${current + 1}`}
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.2 }}
              draggable={false}
            />

            {/* Flecha izquierda */}
            {images.length > 1 && (
              <>
                <button
                  onClick={prev}
                  className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Imagen anterior"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                {/* Flecha derecha */}
                <button
                  onClick={next}
                  className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors backdrop-blur-sm"
                  aria-label="Siguiente imagen"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </>
            )}
          </div>

          {/* Miniaturas (thumbnails) */}
          {images.length > 1 && (
            <div className="flex gap-2 mt-4 flex-shrink-0 overflow-x-auto max-w-full pb-1">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`flex-shrink-0 w-14 h-14 md:w-16 md:h-16 rounded-lg overflow-hidden border-2 transition-all ${
                    i === current
                      ? 'border-white scale-105'
                      : 'border-white/20 opacity-50 hover:opacity-80'
                  }`}
                  aria-label={`Ver imagen ${i + 1}`}
                >
                  <img src={src} alt="" className="w-full h-full object-cover" draggable={false} />
                </button>
              ))}
            </div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

/* ─── Carrusel en tarjeta ─────────────────────────────────────────────────── */
function ProjectCarousel({ images, name, onOpenLightbox }) {
  const [current, setCurrent] = useState(0)

  if (!images || images.length === 0) {
    return (
      <div className="aspect-video bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
        <span className="text-4xl text-gray-400 dark:text-gray-500">{name.charAt(0)}</span>
      </div>
    )
  }

  const prev = (e) => { e.stopPropagation(); setCurrent((c) => (c === 0 ? images.length - 1 : c - 1)) }
  const next = (e) => { e.stopPropagation(); setCurrent((c) => (c === images.length - 1 ? 0 : c + 1)) }

  return (
    <div className="relative aspect-video bg-gray-100 dark:bg-gray-800 overflow-hidden group">
      {/* Imagen — clic abre el lightbox */}
      <motion.img
        key={current}
        src={images[current]}
        alt={`${name} - imagen ${current + 1}`}
        className="w-full h-full object-cover cursor-zoom-in"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.25 }}
        onClick={() => onOpenLightbox(current)}
      />

      {/* Overlay con ícono de lupa al hacer hover */}
      <div
        className="absolute inset-0 flex items-center justify-center bg-black/0 group-hover:bg-black/20 transition-colors cursor-zoom-in pointer-events-none"
      >
        <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          <svg className="w-5 h-5 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M17 11A6 6 0 1 1 5 11a6 6 0 0 1 12 0zM11 8v6M8 11h6" />
          </svg>
        </div>
      </div>

      {images.length > 1 && (
        <>
          {/* Flechas */}
          <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/75 z-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity hover:bg-black/75 z-10">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Contador */}
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-10">
            {current + 1} / {images.length}
          </div>

          {/* Puntos */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setCurrent(i) }}
                className={`h-1.5 rounded-full transition-all ${i === current ? 'bg-white w-3' : 'bg-white/50 w-1.5'}`}
                aria-label={`Imagen ${i + 1}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

/* ─── Página Proyectos ────────────────────────────────────────────────────── */
export default function Projects() {
  const [lightbox, setLightbox] = useState(null) // { images, name, index }

  const openLightbox = (images, name, index) => setLightbox({ images, name, index })
  const closeLightbox = () => setLightbox(null)

  return (
    <>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
            Proyectos
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl">
            Proyectos recientes. Haz clic en las imágenes para verlas en pantalla completa.
          </p>
        </motion.header>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 overflow-hidden hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
            >
              <ProjectCarousel
                images={project.images}
                name={project.name}
                onOpenLightbox={(index) => openLightbox(project.images, project.name, index)}
              />

              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {project.name}
                </h2>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 flex items-center gap-1.5"
                    >
                      <TechIcon name={tech} className="w-3.5 h-3.5" />
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                      GitHub
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      className="text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline">
                      Ver en vivo
                    </a>
                  )}
                  {!project.github && !project.live && (
                    <span className="text-sm text-gray-500 dark:text-gray-500">Proyecto privado</span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Lightbox fuera del contenedor para cubrir toda la pantalla */}
      {lightbox && (
        <Lightbox
          images={lightbox.images}
          name={lightbox.name}
          startIndex={lightbox.index}
          onClose={closeLightbox}
        />
      )}
    </>
  )
}
