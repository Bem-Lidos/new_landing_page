import React from 'react'
import { BookIcon, Sparkles, Star, Users } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import heroImage from '../../assets/5767803.png'

export function HeroSection() {
  return (
    <section className='relative overflow-hidden'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16'>
        <div className='grid lg:grid-cols-2 gap-12 items-start'>
          <div className='space-y-8'>
            <Badge className='bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 hover:bg-purple-200 dark:hover:bg-purple-900/50 border-0'>
              <Sparkles className='w-3 h-3 mr-1' />
              Novidade: Sistema de Recomendações IA
            </Badge>
            <h1 className='text-5xl lg:text-6xl text-purple-600 dark:text-purple-400'>
              Sua biblioteca pessoal na palma da mão
            </h1>
            <p className='text-xl dark:text-white' style={{ color: '#000000' }}>
              Organize seus livros, conecte-se com leitores
              apaixonados e descubra sua próxima grande
              leitura com o BemLidos.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='text-lg px-8 !bg-purple-600 dark:!bg-purple-500 !text-white hover:!bg-purple-700 dark:hover:!bg-purple-600'
                style={{
                  backgroundColor: '#7C3AED',
                  color: '#FFFFFF',
                }}
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
                <Users className='w-5 h-5 text-purple-600 dark:text-purple-400' />
                <div>
                  <p className='text-sm dark:text-white' style={{ color: '#000000' }}>
                    Usuários ativos
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <BookIcon className='w-5 h-5 text-purple-600 dark:text-purple-400' />
                <div>
                  <p className='text-sm dark:text-white' style={{ color: '#000000' }}>
                    Livros cadastrados
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <Star className='w-5 h-5 text-yellow-500' />
                <div>
                  <p className='text-sm dark:text-white' style={{ color: '#000000' }}>
                    Avaliação média
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='relative'>
            <div className='absolute inset-0 bg-purple-200 rounded-3xl blur-3xl opacity-20'></div>
            <div className='relative rounded-2xl overflow-hidden shadow-2xl border-8 border-white dark:border-gray-800'>
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
  )
}

