import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { hero, site } from '../data/content'

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function Home() {
  return (
    <>
      <section className="min-h-[calc(100vh-4rem)] flex items-center py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <motion.p
                variants={item}
                className="text-primary-600 dark:text-primary-400 font-medium uppercase tracking-wider text-sm mb-2"
              >
                {hero.greeting}
              </motion.p>
              <motion.h1
                variants={item}
                className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-2"
              >
                {hero.name}
              </motion.h1>
              <motion.h2
                variants={item}
                className="text-xl text-gray-600 dark:text-gray-400 mb-6"
              >
                {hero.title}
              </motion.h2>
              <motion.p
                variants={item}
                className="text-gray-600 dark:text-gray-300 max-w-xl mb-8 leading-relaxed"
              >
                {hero.description}
              </motion.p>
              <motion.div variants={item} className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
                >
                  {hero.ctaProjects}
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-medium hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                >
                  {hero.ctaContact}
                </Link>
                {site.cvUrls?.es && (
                  <a
                    href={site.cvUrls.es}
                    download
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary-100 dark:border-primary-900/30 text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    CV (Español)
                  </a>
                )}
                {site.cvUrls?.en && (
                  <a
                    href={site.cvUrls.en}
                    download
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-primary-100 dark:border-primary-900/30 text-primary-600 dark:text-primary-400 font-medium hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors"
                  >
                    CV (English)
                  </a>
                )}
              </motion.div>
            </div>
            <motion.div
              variants={item}
              className="flex flex-col items-center justify-center"
            >
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-2xl overflow-hidden shadow-xl ring-2 ring-gray-200 dark:ring-gray-700">
                <img
                  src={hero.profileImage}
                  alt={`Fotografía de ${hero.name}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center max-w-xs">
                Ingeniero de Sistemas orientado al desarrollo de soluciones web eficientes y profesionales.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900/50 border-y border-gray-200 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8"
          >
            {[
              {
                title: 'Desarrollo Web',
                text: 'Experiencia en el diseño e implementación de sistemas web enfocados en la mejora de procesos administrativos.',
              },
              {
                title: 'Gestión de Datos',
                text: 'Migración y organización de grandes volúmenes de información hacia bases de datos relacionales estructuradas.',
              },
              {
                title: 'Compromiso Profesional',
                text: 'Enfoque en el aprendizaje continuo y la entrega de soluciones tecnológicas confiables y escalables.',
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-200 dark:border-gray-700 hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
              >
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{card.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">{card.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  )
}
