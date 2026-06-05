import { motion } from 'framer-motion'
import { about, site } from '../data/content'

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          {about.title}
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl">
          {about.subtitle}
        </p>
      </motion.header>

      <div className="grid md:grid-cols-3 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="md:col-span-2 space-y-4"
        >
          {about.paragraphs.map((paragraph, i) => (
            <p key={i} className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
          <div className="flex flex-wrap gap-4 mt-6">
            {site.cvUrls?.es && (
              <a
                href={site.cvUrls.es}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
              >
                Descargar CV (Español)
              </a>
            )}
            {site.cvUrls?.en && (
              <a
                href={site.cvUrls.en}
                download
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border-2 border-primary-200 dark:border-primary-800 text-primary-700 dark:text-primary-300 font-medium hover:border-primary-500 transition-colors"
              >
                Descargar CV (English)
              </a>
            )}
          </div>
        </motion.div>

        <motion.aside
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="rounded-xl bg-gray-900 dark:bg-gray-800 p-6 text-gray-100 h-fit"
        >
          <h2 className="font-semibold text-lg mb-4">Perfil profesional</h2>
          <ul className="space-y-2">
            {about.profileList.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                {item}
              </li>
            ))}
          </ul>
        </motion.aside>
      </div>
    </div>
  )
}
