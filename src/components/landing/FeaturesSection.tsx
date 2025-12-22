import React from 'react'
import { BookIcon, Heart, MessageCircle, Shield, Sparkles, Star } from 'lucide-react'
import { Card } from '../ui/card'
import { Badge } from '../ui/badge'

interface Feature {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <BookIcon className='w-8 h-8 text-purple-600 dark:text-purple-400' />,
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

export function FeaturesSection() {
  return (
    <section id='features' className='py-20 bg-white dark:bg-gray-900'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='text-center mb-16'>
          <Badge className='bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 border-0 mb-4'>
            Funcionalidades
          </Badge>
          <h2 className='text-4xl lg:text-5xl text-purple-600 dark:text-purple-400 mb-4'>
            Tudo que você precisa em um só lugar
          </h2>
          <p className='text-xl dark:text-white max-w-2xl mx-auto' style={{ color: '#000000' }}>
            Descubra todas as ferramentas que vão revolucionar
            sua experiência de leitura
          </p>
        </div>

        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <Card
              key={index}
              className='p-6 hover:shadow-xl transition-all duration-300 border-2 border-gray-100 dark:border-gray-700 hover:border-purple-200 dark:hover:border-purple-600 group bg-white dark:bg-gray-800'
            >
              <div className='w-14 h-14 rounded-xl bg-purple-50 dark:bg-purple-900/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform'>
                {feature.icon}
              </div>
              <h3 className='text-xl mb-2 dark:text-white' style={{ color: '#000000' }}>
                {feature.title}
              </h3>
              <p className='dark:text-white' style={{ color: '#000000' }}>
                {feature.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

