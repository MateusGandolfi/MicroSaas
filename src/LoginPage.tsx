import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { EnvelopeOpenIcon, PersonIcon, LockClosedIcon } from '@radix-ui/react-icons';
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
  CardFooter
} from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';

export function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulação básica de autenticação
    if (username && password) {
      // Aqui você pode adicionar sua lógica real de autenticação
      const fakeToken = 'fake-auth-token';
      localStorage.setItem('authToken', fakeToken);
      navigate('/dashboard');
    } else {
      setError('Por favor, preencha todos os campos');
    }
  };

  return (
    <main className='h-screen flex w-full'>
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
            <form onSubmit={handleLogin}>
              {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
              
              <div>
                <Label htmlFor='user'>Usuário</Label>
                <div className='flex items-center border border-gray-300 rounded-md'>
                  <span className='inline-flex items-center px-2 border-r border-gray-300 rounded-l-md'>
                    <PersonIcon />
                  </span>
                  <Input 
                    id='user' 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Digite seu usuário' 
                    type='text' 
                    className='flex-1' 
                  />
                </div>
              </div>

              <div className='mt-4'>
                <Label htmlFor='password'>Senha</Label>
                <div className='flex items-center border border-gray-300 rounded-md'>
                  <span className='inline-flex items-center px-2 border-r border-gray-300 rounded-l-md'>
                    <LockClosedIcon />
                  </span>
                  <Input 
                    id='password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Digite sua senha' 
                    type='password' 
                    className='flex-1' 
                  />
                </div>
              </div>

              <div className='text-xs text-mute mt-2 text-left pl-1'>
                <Checkbox id="reminder-me" className='mr-2 size-4 align-text-top'/>
                <label htmlFor="reminder-me" className='text sm leading-none'>
                  Lembrar Senha
                </label>
              </div>

              <Button type="submit" className='mt-6 w-full'>Entrar</Button>
            </form>

            <div className='flex items-center gap-4 mt-4'>
              <Separator />
              <span className='text-xs text-muted-foreground'>OU</span>
              <Separator />
            </div>

            <Button variant="outline" className='mt-4 w-full'>
              <EnvelopeOpenIcon className='mr-2 pt-1 size-5' />
              Acessar utilizando E-mail
            </Button>
          </CardContent>
          <CardFooter className='text-muted-foreground text-center text-sm'>
            <p>Ao entrar em nossa plataforma você concorda com nossos Termos de Uso e Política de Privacidade.</p>
          </CardFooter>
        </Card>
      </section>
    </main>
  );
}