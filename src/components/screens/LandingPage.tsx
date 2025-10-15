import { Heart, MessageCircle, Shield, Sparkles, Star, TrendingUp, Users } from 'lucide-react'
import { Button } from '../ui/button'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import heroImage from '../../assets/5767803.png'
import communityImage from '../../assets/123.png'
import headerLogo from '../../assets/PNG 2.png'
import footerLogo from '../../assets/PNG 14.png'
import bookIcon from '../../assets/PNG 7.png'
import React, { useState } from 'react'
import { toast } from 'sonner'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface Testimonial {
  name: string;
  role: string;
  comment: string;
  rating: number;
}

export default function LandingPage() {
  const [open, setOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    fullName: '',
  })

  // Função para gerar username do email
  const generateUsername = (email: string) => {
    const baseUsername = email.split('@')[0].replace(/\./g, '_')
    const randomNumbers = Math.floor(1000 + Math.random() * 9000) // Gera 4 dígitos aleatórios
    return `${baseUsername}_${randomNumbers}`
  }

  // Função para gerar senha aleatória
  const generatePassword = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    let password = ''
    for (let i = 0; i < 10; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length))
    }
    return password
  }

  // Função para dividir nome completo
  const splitFullName = (fullName: string) => {
    const parts = fullName.trim().split(' ')
    const firstName = parts[0] || ''
    const lastName = parts.slice(1).join(' ') || ''
    return { firstName, lastName }
  }

  // Função de submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    const { firstName, lastName } = splitFullName(formData.fullName)
    const username = generateUsername(formData.email)
    const password = generatePassword()

    const payload = {
      username,
      email: formData.email,
      firstName,
      lastName,
      password,
      enabled: true,
      emailVerified: false,
    }

    try {
      const response = await fetch('https://core-backend-znph.onrender.com/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      })

      if (!response.ok) throw new Error('Erro ao criar usuário')

      const data = await response.json()
      toast.success('Pré-cadastro realizado com sucesso!')
      setOpen(false)
      setFormData({ email: '', fullName: '' })
    } catch (error) {
      toast.error('Erro ao realizar pré-cadastro. Tente novamente.')
    } finally {
      setLoading(false)
    }
  }

  const features: Feature[] = [
    {
      icon: <img src={bookIcon} alt='Gestão de Livros' className='w-8 h-8 object-cover' />,
      title: 'Gestão de Livros',
      description:
        'Organize sua biblioteca pessoal com facilidade. Adicione, edite e gerencie todos os seus livros em um só lugar.',
    },
    {
      icon: <Star className='w-8 h-8 text-yellow-500' />,
      title: 'Avaliações e Reviews',
      description:
        'Avalie livros de 1 a 5 estrelas e compartilhe suas opiniões com a comunidade literária.',
    },
    {
      icon: <MessageCircle className='w-8 h-8 text-blue-600' />,
      title: 'Fórum de Discussões',
      description:
        'Participe de discussões sobre seus livros favoritos e conecte-se com outros leitores.',
    },
    {
      icon: <Heart className='w-8 h-8 text-red-500' />,
      title: 'Lista de Favoritos',
      description:
        'Salve seus livros preferidos e acesse-os rapidamente quando precisar.',
    },
    {
      icon: <Sparkles className='w-8 h-8 text-indigo-600' />,
      title: 'Recomendações Personalizadas',
      description:
        'Receba sugestões de leitura baseadas nas suas preferências e histórico.',
    },
    {
      icon: <Shield className='w-8 h-8 text-green-600' />,
      title: 'Autenticação Segura',
      description:
        'Sistema robusto de autenticação com diferentes níveis de permissão.',
    },
  ]

  const testimonials: Testimonial[] = [
    {
      name: 'Maria Silva',
      role: 'Leitora ávida',
      comment:
        'O BemLidos transformou completamente a forma como organizo minha biblioteca. Agora consigo acompanhar todos os livros que já li e descobrir novas leituras!',
      rating: 5,
    },
    {
      name: 'João Santos',
      role: 'Estudante de Literatura',
      comment:
        'A função de fórum é incrível! Finalmente encontrei uma comunidade onde posso discutir livros de forma profunda e conhecer pessoas com interesses similares.',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      role: 'Blogueira literária',
      comment:
        'As recomendações personalizadas são precisas e me ajudaram a descobrir autores que se tornaram meus favoritos. Aplicativo essencial para qualquer amante de livros!',
      rating: 5,
    },
  ]


  return (
    <div className='min-h-screen bg-gradient-to-br from-purple-50 via-white to-orange-50'>
      {/* Header/Navigation */}
      <header className='sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            <div className='flex items-center gap-2'>
              <div
                className='w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center'>
                <img src={headerLogo} alt='BemLidos' className='w-10 h-10 object-cover' />
              </div>
              <span className='text-2xl bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent'>
                BemLidos
              </span>
            </div>
            <nav className='hidden md:flex items-center gap-8'>
              <a
                href='#features'
                className='text-gray-600 hover:text-purple-600 transition-colors'
              >
                Funcionalidades
              </a>
              {/* <a
                href='#testimonials'
                className='text-gray-600 hover:text-purple-600 transition-colors'
              >
                Depoimentos
              </a>*/}
              <a
                href='#download'
                className='text-gray-600 hover:text-purple-600 transition-colors'
              >
                Download
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className='relative overflow-hidden'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='space-y-8'>
              <Badge className='bg-purple-100 text-purple-700 hover:bg-purple-200 border-0'>
                <Sparkles className='w-3 h-3 mr-1' />
                Novidade: Sistema de Recomendações IA
              </Badge>
              <h1
                className='text-5xl lg:text-6xl bg-gradient-to-r from-purple-600 via-orange-600 to-purple-600 bg-clip-text text-transparent'>
                Sua biblioteca pessoal na palma da mão
              </h1>
              <p className='text-xl text-gray-600'>
                Organize seus livros, conecte-se com leitores
                apaixonados e descubra sua próxima grande
                leitura com o BemLidos.
              </p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <Button
                  size='lg'
                  variant='outline'
                  className='text-lg px-8 border-2 border-purple-200 hover:bg-purple-50'
                  onClick={() =>
                    document
                      .getElementById('features')
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }
                >
                  Saiba Mais
                </Button>
              </div>
              <div className='flex items-center gap-8 pt-4'>
                <div className='flex items-center gap-2'>
                  <Users className='w-5 h-5 text-purple-600' />
                  <div>
                    <p className='text-sm text-gray-500'>
                      Usuários ativos
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <img src={bookIcon} alt='Livros cadastrados' className='w-5 h-5 object-cover' />
                  <div>
                    <p className='text-sm text-gray-500'>
                      Livros cadastrados
                    </p>
                  </div>
                </div>
                <div className='flex items-center gap-2'>
                  <Star className='w-5 h-5 text-yellow-500' />
                  <div>
                    <p className='text-sm text-gray-500'>
                      Avaliação média
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className='relative'>
              <div
                className='absolute inset-0 bg-gradient-to-r from-purple-400 to-orange-400 rounded-3xl blur-3xl opacity-20'></div>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white'>
                <ImageWithFallback
                  src={heroImage}
                  alt='BemLidos App Preview'
                  className='w-full h-auto'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id='features' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 mb-4'>
              Funcionalidades
            </Badge>
            <h2
              className='text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-4'>
              Tudo que você precisa em um só lugar
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Descubra todas as ferramentas que vão revolucionar
              sua experiência de leitura
            </p>
          </div>

          <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {features.map((feature, index) => (
              <Card
                key={index}
                className='p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-purple-200 group'
              >
                <div
                  className='w-14 h-14 rounded-xl bg-gradient-to-br from-purple-50 to-orange-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                  {feature.icon}
                </div>
                <h3 className='text-xl mb-2'>
                  {feature.title}
                </h3>
                <p className='text-gray-600'>
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className='py-20 bg-gradient-to-br from-purple-50 to-orange-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid lg:grid-cols-2 gap-12 items-center'>
            <div className='relative order-2 lg:order-1'>
              <div
                className='absolute inset-0 bg-gradient-to-r from-orange-400 to-purple-400 rounded-3xl blur-3xl opacity-20'></div>
              <div className='relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white'>
                <ImageWithFallback
                  src={communityImage}
                  alt='Community'
                  className='w-full h-auto'
                />
              </div>
            </div>
            <div className='space-y-6 order-1 lg:order-2'>
              <Badge className='bg-orange-100 text-orange-700 hover:bg-orange-200 border-0'>
                Comunidade
              </Badge>
              <h2
                className='text-4xl lg:text-5xl bg-gradient-to-r from-orange-600 to-purple-600 bg-clip-text text-transparent'>
                Conecte-se com leitores apaixonados
              </h2>
              <p className='text-xl text-gray-600'>
                Participe de discussões enriquecedoras,
                compartilhe suas opiniões e descubra novas
                perspectivas sobre seus livros favoritos.
              </p>
              <div className='space-y-4'>
                <div className='flex items-start gap-4'>
                  <div
                    className='w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-purple-600 flex items-center justify-center flex-shrink-0'>
                    <MessageCircle className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <h3 className='text-lg mb-1'>
                      Discussões Profundas
                    </h3>
                    <p className='text-gray-600'>
                      Crie e participe de tópicos sobre qualquer
                      livro ou tema literário.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div
                    className='w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-orange-600 flex items-center justify-center flex-shrink-0'>
                    <Users className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <h3 className='text-lg mb-1'>
                      Comunidade Ativa
                    </h3>
                    <p className='text-gray-600'>
                      Faça parte de uma comunidade engajada de
                      amantes da leitura.
                    </p>
                  </div>
                </div>
                <div className='flex items-start gap-4'>
                  <div
                    className='w-10 h-10 rounded-lg bg-gradient-to-br from-orange-600 to-purple-600 flex items-center justify-center flex-shrink-0'>
                    <TrendingUp className='w-5 h-5 text-white' />
                  </div>
                  <div>
                    <h3 className='text-lg mb-1'>
                      Descubra Tendências
                    </h3>
                    <p className='text-gray-600'>
                      Fique por dentro dos livros mais
                      comentados e tendências literárias.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {/*
      <section id='testimonials' className='py-20 bg-white'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='text-center mb-16'>
            <Badge className='bg-purple-100 text-purple-700 hover:bg-purple-200 border-0 mb-4'>
              Depoimentos
            </Badge>
            <h2
              className='text-4xl lg:text-5xl bg-gradient-to-r from-purple-600 to-orange-600 bg-clip-text text-transparent mb-4'>
              O que nossos usuários dizem
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
              Milhares de leitores já transformaram sua
              experiência de leitura com o BemLidos
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-8'>
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className='p-6 hover:shadow-xl transition-shadow border-2 border-gray-100'
              >
                <div className='flex gap-1 mb-4'>
                  {[...Array(testimonial.rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className='w-5 h-5 fill-yellow-400 text-yellow-400'
                      />
                    ),
                  )}
                </div>
                <p className='text-gray-600 mb-6'>
                  {testimonial.comment}
                </p>
                <div className='flex items-center gap-3'>
                  <div
                    className='w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-orange-400 flex items-center justify-center text-white'>
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className='text-gray-600'>
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
*/}

      {/* Download/CTA Section */}
      <section
        id='download'
        className='py-20 bg-gradient-to-br from-purple-600 via-orange-600 to-purple-600 text-white relative overflow-hidden'
      >
        <div
          className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjEiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-50"></div>
        <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
          <div
            className='w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-8'>
            <img src={bookIcon} alt='BemLidos' className='w-10 h-10 object-cover' />
          </div>
          <h2 className='text-4xl lg:text-5xl mb-6'>
            Pronto para transformar sua experiência de leitura?
          </h2>
          <p className='text-xl mb-8 text-purple-100'>
            Junte-se a milhares de leitores apaixonados e comece
            a organizar sua biblioteca hoje mesmo.
          </p>
          <div className='flex flex-col sm:flex-row gap-4 justify-center'>
            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button size='lg' variant='outline'
                        className='bg-white text-purple-600 hover:bg-purple-50 border-0 text-lg px-8'>
                  Fazer Pré-Cadastro
                </Button>
              </DialogTrigger>
               <DialogContent className='w-[90vw] max-w-sm mx-auto'>
                 <DialogHeader className='pb-2'>
                   <DialogTitle className='text-lg'>Pré-Cadastro BemLidos</DialogTitle>
                   <DialogDescription className='text-sm'>
                     Faça seu pré-cadastro e seja um dos primeiros a usar o BemLidos!
                   </DialogDescription>
                 </DialogHeader>
                 <form onSubmit={handleSubmit} className='space-y-3 py-2'>
                   <div className='space-y-1'>
                     <Label htmlFor='email' className='text-sm font-medium'>Email</Label>
                     <Input
                       id='email'
                       type='email'
                       placeholder='seu.email@example.com'
                       value={formData.email}
                       onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                       required
                       className='h-9'
                     />
                   </div>
                   <div className='space-y-1'>
                     <Label htmlFor='fullName' className='text-sm font-medium'>Nome Completo</Label>
                     <Input
                       id='fullName'
                       type='text'
                       placeholder='João da Silva'
                       value={formData.fullName}
                       onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                       required
                       className='h-9'
                     />
                   </div>
                   <Button type='submit' className='w-full h-9 text-sm' disabled={loading}>
                     {loading ? 'Cadastrando...' : 'Cadastrar'}
                   </Button>
                </form>
              </DialogContent>
            </Dialog>
          </div>
          <p className='mt-8 text-purple-100'>
            Disponível em breve para iOS e Android
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className='bg-gray-900 text-gray-400 py-12'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
          <div className='grid md:grid-cols-4 gap-8'>
            <div className='md:col-span-1'>
              <div className='flex items-center gap-2 mb-4'>
                <div
                  className='w-10 h-10 rounded-xl overflow-hidden flex items-center justify-center'>
                  <img src={footerLogo} alt='BemLidos' className='w-10 h-10 object-cover' />
                </div>
                <span className='text-xl text-white'>
                  BemLidos
                </span>
              </div>
              <p className='text-sm'>
                Sua biblioteca pessoal na palma da mão.
                Conecte-se, organize e descubra.
              </p>
            </div>
            <div>
              <h3 className='text-white mb-4'>Produto</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a
                    href='#features'
                    className='hover:text-white transition-colors'
                  >
                    Funcionalidades
                  </a>
                </li>
                {/* <li>
                  <a
                    href='#'
                    className='hover:text-white transition-colors'
                  >
                    Preços
                  </a>
                </li>*/}
                <li>
                  <a
                    href='#download'
                    className='hover:text-white transition-colors'
                  >
                    Download
                  </a>
                </li>
                {/*<li>
                  <a
                    href='#'
                    className='hover:text-white transition-colors'
                  >
                    Atualizações
                  </a>
                </li>*/}
              </ul>
            </div>
            <div>
              <h3 className='text-white mb-4'>Empresa</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a
                    href='#'
                    className='hover:text-white transition-colors'
                  >
                    Sobre
                  </a>
                </li>
                {/*<li>
                  <a
                    href='#'
                    className='hover:text-white transition-colors'
                  >
                    Blog
                  </a>
                </li>*/}
                {/*<li>
                  <a
                    href='#'
                    className='hover:text-white transition-colors'
                  >
                    Carreiras
                  </a>
                </li>*/}
                <li>
                  <a
                    href='#'
                    className='hover:text-white transition-colors'
                  >
                    Contato
                  </a>
                </li>
              </ul>
            </div>
            {/*<div>
              <h3 className='text-white mb-4'>Legal</h3>
              <ul className='space-y-2 text-sm'>
                <li>
                  <a
                    href='#'
                    className='hover:text-white transition-colors'
                  >
                    Privacidade
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white transition-colors'
                  >
                    Termos
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white transition-colors'
                  >
                    Cookies
                  </a>
                </li>
                <li>
                  <a
                    href='#'
                    className='hover:text-white transition-colors'
                  >
                    Licenças
                  </a>
                </li>
              </ul>
            </div>*/}
          </div>
          <div
            className='border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4'>
            <p className='text-sm'>
              © 2025 BemLidos. Todos os direitos reservados.
            </p>
            <div className='flex gap-6'>
              {/*<a
                href='#'
                className='hover:text-white transition-colors'
              >
                <span className='sr-only'>Twitter</span>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                </svg>
              </a>*/}
              <a
                href='https://github.com/Bem-Lidos'
                className='hover:text-white transition-colors'
              >
                <span className='sr-only'>GitHub</span>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
              <a
                href='https://www.instagram.com/bem.lidos/'
                className='hover:text-white transition-colors'
              >
                <span className='sr-only'>Instagram</span>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 24 24'
                  aria-hidden='true'
                >
                  <path
                    fillRule='evenodd'
                    d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                    clipRule='evenodd'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}