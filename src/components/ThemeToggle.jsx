import { motion } from 'framer-motion'

/**
 * Switch modo oscuro / claro con animación suave
 */
export default function ThemeToggle({ isDark, onToggle }) {
  return (
    <motion.button
      type="button"
      onClick={onToggle}
      className="relative h-9 w-16 rounded-full bg-gray-200 dark:bg-gray-700 p-1 focus:outline-none focus:ring-2 focus:ring-primary-500"
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      whileTap={{ scale: 0.98 }}
    >
      <motion.span
        className="absolute top-1 left-1 h-7 w-7 rounded-full bg-white dark:bg-gray-900 shadow-md flex items-center justify-center"
        animate={{ x: isDark ? 32 : 0 }}
        transition={{ type: 'spring', stiffness: 400, damping: 25 }}
      >
        {isDark ? (
          <span className="text-amber-400 text-sm">🌙</span>
        ) : (
          <span className="text-amber-500 text-sm">☀️</span>
        )}
      </motion.span>
    </motion.button>
  )
}
