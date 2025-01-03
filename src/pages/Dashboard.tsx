import { Routes, useNavigate } from 'react-router-dom';
import { Button } from '@/src/components/ui/button'; // Ajuste o caminho dos seus componentes
import { Separator } from '@/src/components/ui/separator';

export default function DashboardPage() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Aqui você pode remover o token de autenticação ou limpar o estado
    localStorage.removeItem('authToken'); // Ajuste conforme sua lógica de autenticação
    navigate('/');
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Barra lateral */}
      <aside className="w-64 bg-white shadow-md h-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-purple-800">Meu Dashboard</h1>
          <Separator className="my-4" />
          <nav>
            <ul className="space-y-2">
              <li>
                <Button
                  className="w-full justify-start text-left"
                  onClick={() => navigate('/dashboard/overview')}
                >
                  Visão Geral
                </Button>
              </li>
              <li>
                <Button
                  className="w-full justify-start text-left"
                  onClick={() => navigate('/dashboard/reports')}
                >
                  Relatórios
                </Button>
              </li>
              <li>
                <Button
                  className="w-full justify-start text-left"
                  onClick={() => navigate('/dashboard/settings')}
                >
                  Configurações
                </Button>
              </li>
            </ul>
          </nav>
          <Separator className="my-4" />
          <Button
            variant="outline"
            className="w-full justify-start text-left"
            onClick={handleLogout}
          >
            Sair
          </Button>
        </div>
      </aside>

      {/* Área principal */}
      <main className="flex-1 p-6">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold text-gray-800">Bem-vindo ao Dashboard</h1>
          <Button onClick={handleLogout}>Sair</Button>
        </header>
        <section>
          <p className="text-gray-600">
            Aqui você pode acessar informações importantes, visualizar relatórios e gerenciar suas configurações.
          </p>
        </section>
      </main>
    </div>
  );
}
