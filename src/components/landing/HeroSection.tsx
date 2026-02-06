import { BookIcon, Sparkles, Star, Users } from 'lucide-react'
import { Button } from '../ui/button'
import { Badge } from '../ui/badge'
import { ImageWithFallback } from '../figma/ImageWithFallback'
import heroImage from '../../assets/5767803.png'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { usePreRegistration } from '../../hooks/usePreRegistration'

export function HeroSection() {
  const { open, setOpen, loading, formData, setFormData, handleSubmit } = usePreRegistration()

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
            <p className='text-xl dark:text-white text-black text-justify'>
              Organize seus livros, conecte-se com leitores
              apaixonados e descubra sua próxima grande
              leitura com o BemLidos.
            </p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <Button
                size='lg'
                className='text-lg cursor-pointer px-8 bg-purple-600! dark:bg-purple-500! text-white hover:bg-purple-700! dark:hover:bg-purple-600!'
                onClick={() =>
                  document
                    .getElementById('features')
                    ?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Saiba Mais
              </Button>
              <Dialog open={open} onOpenChange={setOpen} >
                <DialogTrigger asChild>
                  <Button
                    size='lg'
                    className='text-lg cursor-pointer px-8 bg-purple-600! dark:bg-purple-500! text-white hover:bg-purple-700! dark:hover:bg-purple-600!'
                  >
                    Fazer Pré-Cadastro
                  </Button>
                </DialogTrigger>
                <DialogContent className='w-[95vw] max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto max-[400px]:p-[80px_20px] sm:p-8 md:p-10 bg-white dark:bg-gray-900 text-black dark:text-white'>
                  <DialogHeader className='pb-4'>
                    <DialogTitle className='text-xl text-black dark:text-white sm:text-2xl'>Pré-Cadastro BemLidos</DialogTitle>
                    <DialogDescription className='text-sm text-black  dark:text-white sm:text-base'>
                      Faça seu pré-cadastro e seja um dos primeiros a usar o BemLidos!
                    </DialogDescription>
                  </DialogHeader>
                  <form onSubmit={handleSubmit} className='space-y-4 py-2'>
                    <div className='space-y-2'>
                      <Label htmlFor='fullName' className='text-sm text-black dark:text-white sm:text-base font-medium'>
                        Nome Completo
                      </Label>
                      <Input
                        id='fullName'
                        type='text'
                        placeholder='João da Silva'
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        required
                        className='h-11 sm:h-12 text-base text-black dark:text-white'
                      />
                    </div>

                    <div className='space-y-2'>
                      <Label htmlFor='email' className='text-sm text-black dark:text-white sm:text-base font-medium'>
                        Email
                      </Label>
                      <Input
                        id='email'
                        type='email'
                        placeholder='seu.email@example.com'
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className='h-11 sm:h-12 text-base text-black dark:text-white'
                      />
                    </div>
                    <Button type='submit' className='w-full h-11 sm:h-12 text-base font-medium bg-purple-600! text-white hover:bg-purple-500! cursor-pointer' disabled={loading}>
                      {loading ? 'Cadastrando...' : 'Cadastrar'}
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
            <div className='flex items-center md:gap-8 sm:gap-1 pt-4'>
              <div className='flex items-center gap-2'>
                <Users className='w-5 h-5 text-purple-600 dark:text-purple-400' />
                <div>
                  <p className='text-sm dark:text-white text-black'>
                    Usuários ativos
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <BookIcon className='w-5 h-5 text-purple-600 dark:text-purple-400' />
                <div>
                  <p className='text-sm dark:text-white text-black'>
                    Livros cadastrados
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-2'>
                <Star className='w-5 h-5 text-yellow-500' />
                <div>
                  <p className='text-sm dark:text-white text-black'>
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
