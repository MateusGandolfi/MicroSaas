// Improtações de componentes
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { EnvelopeOpenIcon, PersonIcon, LockClosedIcon } from '@radix-ui/react-icons'
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
  CardFooter
} from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

// Importações de images
import cakeShopIcon from '../src/assets/cake-shop-icon.svg';
import iceCreamCharacter from '../src/assets/ice-cream-character-icon.svg';
import iceCreamSellerIcon from '../src/assets/ice-cream-seller-icon.svg';

// Importações React
import { useState, useEffect } from 'react';

export function LoginPage() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [cakeShopIcon, iceCreamSellerIcon, iceCreamCharacter];

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <main className='h-screen flex w-full'>
      {windowWidth >= 768 && (
        <div className='bg-primary-foreground w-full flex items-center justify-center h-full p-16'>
          <div className='w-full'>
            <div className='flex text-center rounded p-8'>
              <img src={images[currentImageIndex]} alt="Carousel item" />
            </div>
          </div>
        </div>
      )}
      <section className='flex items-center justify-center bg-background h-full max-w-3xl w-full bg-zinc-100'>
        <Card className='w-full p-2 max-w-lg'>
          <CardHeader>
            <CardTitle className='text-2xl font-bold tracking-tighter items-center'>
              Entre com sua conta
            </CardTitle>
            <CardDescription>
              Utilize seu usuário e senha ou e-mail pessoal para entrar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className='text-xs mb-2'>
              <Label>
                Não possui uma conta? <a href="#" className='text-sm text-purple-800'>Registre-se aqui</a>
              </Label>
            </div>
            <div>
              <Label htmlFor='user'>Usuário</Label>
              <div className='flex items-center border border-gray-300 rounded-md'>
                <span className='inline-flex items-center px-2 border-r border-gray-300 rounded-l-md'>
                  <PersonIcon />
                </span>
                <Input id='user' placeholder='Digite seu usuário' type='text' className='flex-1' />
              </div>
            </div>
            <div className='mt-4'>
              <Label htmlFor='password'>Senha</Label>
              <div className='flex items-center border border-gray-300 rounded-md'>
                <span className='inline-flex items-center px-2 border-r border-gray-300 rounded-l-md'>
                  <LockClosedIcon />
                </span>
                <Input id='password' placeholder='Digite sua senha' type='password' className='flex-1' />
              </div>
            </div>
            <div className='text-xs text-mute mt-2 text-left pl-1'>
              <Checkbox id="reminder-me" className='mr-2 size-4 align-text-top'/>
              <label htmlFor="reminder-me" className='text sm leading-none'>
                Lembrar Senha
              </label>
            </div>
            <Button className='mt-6 w-full'>Entrar</Button>
            <div className='flex items-center gap-4 mt-4'>
              <Separator></Separator>
              <span className='text-xs text-muted-foreground'>OU</span>
              <Separator></Separator>
            </div>
            <Button variant="outline" className='mt-4 w-full'> <EnvelopeOpenIcon className='mr-2 pt-1 size-5'></EnvelopeOpenIcon> Acessar utilizando E-mail</Button>
          </CardContent>
          <CardFooter className='text-muted-foreground text-center text-sm'>
            <p>Ao entrar em nossa plataforma você concorda com nossos Termos de Uso e Política de Privacidade.</p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}