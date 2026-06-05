import { motion } from 'framer-motion'
import { skills } from '../data/content'
import TechIcon from '../components/TechIcon'

export default function Skills() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Tecnologías
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl">
          Lenguajes, herramientas y tecnologías con las que trabajo.
        </p>
      </motion.header>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((group, groupIndex) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: groupIndex * 0.08 }}
            className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 p-6 hover:border-primary-200 dark:hover:border-primary-800 transition-colors"
          >
            <h2 className="font-semibold text-gray-900 dark:text-white mb-4">
              {group.category}
            </h2>
            <ul className="space-y-3">
              {group.items.map(({ name, description }) => (
                <li key={name} className="flex items-start gap-3">
                  <div className="mt-0.5 text-primary-600 dark:text-primary-400 flex-shrink-0">
                    <TechIcon name={name} className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-medium text-gray-800 dark:text-gray-200">{name}</span>
                    {description && (
                      <span className="text-sm text-gray-500 dark:text-gray-400">{description}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
