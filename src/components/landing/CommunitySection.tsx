import React from 'react'
import { MessageCircle, TrendingUp, Users } from 'lucide-react'
import { Badge } from '../ui/badge'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import communityImage from '../../assets/123.png'

export function CommunitySection() {
  return (
    <section className='py-20 bg-gray-50 dark:bg-gray-800'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          <div className='relative order-2 lg:order-1'>
            <div className='absolute inset-0 bg-orange-200 rounded-3xl blur-3xl opacity-20'></div>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800'>
              <ImageWithFallback
                src={communityImage}
                alt='Community'
                className='w-full h-auto'
              />
            </div>
          </div>
          <div className='space-y-6 order-1 lg:order-2'>
            <Badge className='bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 hover:bg-orange-200 dark:hover:bg-orange-900/50 border-0'>
              Comunidade
            </Badge>
            <h2 className='text-4xl lg:text-5xl text-purple-600 dark:text-purple-400'>
              Conecte-se com leitores apaixonados
            </h2>
            <p className='text-xl dark:text-white' style={{ color: '#000000' }}>
              Participe de discussões enriquecedoras,
              compartilhe suas opiniões e descubra novas
              perspectivas sobre seus livros favoritos.
            </p>
            <div className='space-y-4'>
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0'>
                  <MessageCircle className='w-5 h-5 text-black' />
                </div>
                <div>
                  <h3 className='text-lg mb-1 dark:text-white' style={{ color: '#000000' }}>
                    Discussões Profundas
                  </h3>
                  <p className='dark:text-white' style={{ color: '#000000' }}>
                    Crie e participe de tópicos sobre qualquer
                    livro ou tema literário.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0'>
                  <Users className='w-5 h-5 text-black' />
                </div>
                <div>
                  <h3 className='text-lg mb-1 dark:text-white' style={{ color: '#000000' }}>
                    Comunidade Ativa
                  </h3>
                  <p className='dark:text-white' style={{ color: '#000000' }}>
                    Faça parte de uma comunidade engajada de
                    amantes da leitura.
                  </p>
                </div>
              </div>
              <div className='flex items-start gap-4'>
                <div className='w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center flex-shrink-0'>
                  <TrendingUp className='w-5 h-5 text-black' />
                </div>
                <div>
                  <h3 className='text-lg mb-1 dark:text-white' style={{ color: '#000000' }}>
                    Descubra Tendências
                  </h3>
                  <p className='dark:text-white' style={{ color: '#000000' }}>
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
  )
}

