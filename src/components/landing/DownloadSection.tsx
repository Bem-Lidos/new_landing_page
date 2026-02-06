import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/dialog'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { usePreRegistration } from '../../hooks/usePreRegistration'
import bemlidosIcon from '../../assets/PNG 14.png'

export function DownloadSection() {
  const { open, setOpen, loading, formData, setFormData, handleSubmit } = usePreRegistration()

  return (
    <section
      id='download'
      className='py-20 bg-orange-50 dark:bg-gray-900 text-gray-900 dark:text-white relative overflow-hidden'
    >
      <div className='max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10'>
        <div className='w-20 h-20 rounded-2xl bg-purple-50 dark:bg-purple-900/30 flex items-center justify-center mx-auto mb-8'>
          <img src={bemlidosIcon} className='object-cover' alt='BemLidos' />
        </div>
        <h2 className='text-4xl lg:text-5xl mb-6 text-purple-600 dark:text-purple-300 text-shadow-purple-400 dark:text-shadow-purple-500  text-shadow-[0_0_20px]'>
          Pronto para transformar sua experiência de leitura?
        </h2>
        <p className='text-xl mb-8 dark:text-white text-black'>
          Junte-se a milhares de leitores apaixonados e comece
          a organizar sua biblioteca hoje mesmo.
        </p>
        <div className='flex flex-col sm:flex-row gap-4 justify-center'>
          <Dialog open={open} onOpenChange={setOpen} >
            <DialogTrigger asChild>
              <Button
                size='lg'
                className='text-lg cursor-pointer px-8 bg-purple-600! dark:bg-purple-500! text-white hover:bg-purple-700! dark:hover:bg-purple-600!'
                style={{
                  backgroundColor: '#7C3AED',
                  color: '#FFFFFF',
                }}
              >
                Fazer Pré-Cadastro
              </Button>
            </DialogTrigger>
            <DialogContent className='w-[95vw] max-w-2xl sm:max-w-3xl md:max-w-4xl mx-auto p-6 sm:p-8 md:p-10 bg-white dark:bg-gray-900 text-black dark:text-white'>
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
        <p className='mt-8 dark:text-white text-black'>
          Disponível em breve para iOS e Android
        </p>
      </div>
    </section>
  )
}
