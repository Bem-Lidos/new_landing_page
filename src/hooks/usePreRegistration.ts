import { useState } from 'react'
import { toast } from 'sonner'
import { generateUsername, generatePassword, splitFullName } from '../utils/formUtils'

interface FormData {
  email: string
  fullName: string
}

export function usePreRegistration() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    email: '',
    fullName: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const password = generatePassword()

    const payload = {
      email: formData.email,
      name: formData.fullName,
      password,
    }

    try {
      const response = await fetch('https://bemlidos.squareweb.app/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Erro ao criar usuário')

      await response.json()
      toast.success('Pré-cadastro realizado com sucesso!')
      setOpen(false)
      setFormData({ email: '', fullName: '' })
    } catch (error) {
      toast.error('Erro ao realizar pré-cadastro. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  return {
    open,
    setOpen,
    loading,
    formData,
    setFormData,
    handleSubmit,
  }
}

