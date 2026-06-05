import { useState } from 'react'
import { motion } from 'framer-motion'
import { site } from '../data/content'

const initialForm = { name: '', email: '', message: '' }
const initialErrors = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState(initialErrors)
  const [success, setSuccess] = useState(false)

  const validate = () => {
    const next = { ...initialErrors }
    if (!form.name.trim()) next.name = 'Ingresa tu nombre.'
    if (!form.email.trim()) next.email = 'Ingresa tu correo.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) next.email = 'Correo no válido.'
    if (!form.message.trim()) next.message = 'Escribe un mensaje.'
    setErrors(next)
    return !Object.values(next).some(Boolean)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setSuccess(true)
    setForm(initialForm)
    setErrors(initialErrors)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 md:py-16">
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Contacto
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-2xl">
          Puedes escribirme por aquí o usar los datos de contacto.
        </p>
      </motion.header>

      <div className="grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="space-y-6"
        >
          <h2 className="font-semibold text-gray-900 dark:text-white">Información de contacto</h2>
          <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            <li><strong className="text-gray-900 dark:text-white">Teléfono:</strong> {site.phone}</li>
            <li>
              <strong className="text-gray-900 dark:text-white">Correo:</strong>{' '}
              <a href={`mailto:${site.email}`} className="text-primary-600 dark:text-primary-400 hover:underline">
                {site.email}
              </a>
            </li>
            <li>
              <strong className="text-gray-900 dark:text-white">Dirección:</strong>
              <br />
              {site.address.map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-6"
        >
          <h2 className="font-semibold text-gray-900 dark:text-white mb-4">Enviar mensaje</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Tu nombre"
                className={`w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                }`}
              />
              {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="tu@correo.com"
                className={`w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                  errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                }`}
              />
              {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tu mensaje"
                className={`w-full px-4 py-2 rounded-lg border bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none ${
                  errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-700'
                }`}
              />
              {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message}</p>}
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
            >
              Enviar mensaje
            </button>
            {success && (
              <p className="text-sm text-green-600 dark:text-green-400" role="status">
                Gracias por tu mensaje. Te responderé pronto.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  )
}
