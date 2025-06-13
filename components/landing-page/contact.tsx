'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react'

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Data dikirim:', formData)
  }

  return (
    <section id="contact" className="py-20 px-6 bg-white dark:bg-neutral-950">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Informasi Kontak */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-3xl font-bold">Hubungi Saya</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Saya senang mendengar kabar dari Anda. Silakan hubungi saya melalui info di bawah ini, atau isi formulir.
          </p>

          <div className="space-y-4 text-gray-700 dark:text-gray-300">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5" />
              <span>boyfachruri@gmail.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5" />
              <span>+62 821-1370-4346</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5" />
              <span>Jakarta Pusat, DKI Jakarta, Indonesia</span>
            </div>
            <div className="flex items-center gap-3">
              <Github className="w-5 h-5" />
              <a
                href="https://github.com/boyfachruri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                github.com/boyfachruri
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Linkedin className="w-5 h-5" />
              <a
                href="https://linkedin.com/in/boyfachruri"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                linkedin.com/in/boyfachruri
              </a>
            </div>
          </div>
        </motion.div>

        {/* Formulir */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <Input
            type="text"
            name="name"
            placeholder="Nama lengkap"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Alamat email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Textarea
            name="message"
            placeholder="Pesan Anda..."
            rows={5}
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" className="w-full">
            Kirim Pesan ✉️
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
