// Função para gerar username do email
export const generateUsername = (email: string) => {
  const baseUsername = email.split('@')[0].replace(/\./g, '_')
  const randomNumbers = Math.floor(1000 + Math.random() * 9000) // Gera 4 dígitos aleatórios
  return `${baseUsername}_${randomNumbers}`
}

// Função para gerar senha aleatória
export const generatePassword = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let password = ''
  for (let i = 0; i < 10; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  return password
}

// Função para dividir nome completo
export const splitFullName = (fullName: string) => {
  const parts = fullName.trim().split(' ')
  const firstName = parts[0] || ''
  const lastName = parts.slice(1).join(' ') || ''
  return { firstName, lastName }
}

