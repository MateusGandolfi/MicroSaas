import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Carousel,
  CarouselItem,
  CarouselContent,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { EnvelopeOpenIcon, PersonIcon, LockClosedIcon } from '@radix-ui/react-icons'
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
  CardFooter
} from '@/components/ui/card'


import cakeShopIcon from '../src/assets/cake-shop-icon.svg';
import iceCreamCharacter from '../src/assets/ice-cream-character-icon.svg';
import iceCreamSellerIcon from '../src/assets/ice-cream-seller-icon.svg';

export function SignIn() {
  return (
    <main className='h-screen flex w-full'>
      <div className='bg-primary-foreground w-full flex items-center justify-center h-full p-16'>
        <Carousel className='w-full'>
          <CarouselContent>
            <CarouselItem>
              <div className='flex text-center aspect-square bg-background rounded p-8'>
                <img src={cakeShopIcon} alt="Icone de uma loja de bolos" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex text-center aspect-square bg-background rounded p-8'>
                <img src={iceCreamSellerIcon} alt="Icone de um vendedor de sorvete" />
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className='flex text-center aspect-square bg-background rounded p-8'>
                <img src={iceCreamCharacter} alt="Icone de uma pessoa olhando o sorvete" />
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      <section className='flex items-center justify-center bg-background h-full max-w-3xl w-full p-4 bg-zinc-100'>
        <Card className='w-full p-6 max-w-lg'>
          <CardHeader>
            <CardTitle className='text-2xl font-bold tracking-tighter items-center'>
              Entre com sua conta
            </CardTitle>
            <CardDescription>
              Utilize seu usuário e senha ou e-mail pessoal para entrar
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                <Input id='user' placeholder='Digite sua senha' type='password' className='flex-1' />
              </div>
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
  )
}