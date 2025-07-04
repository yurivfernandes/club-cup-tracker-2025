
import React from 'react';
import { Trophy, Calendar, MapPin, Users } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useFifaData } from "../hooks/useFifaData";
import { Skeleton } from "@/components/ui/skeleton";

const Home = () => {
  const { data, isLoading, error } = useFifaData();

  if (isLoading) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 animate-pulse">
        <div className="text-center mb-12">
          <Skeleton className="w-20 h-20 rounded-full mx-auto mb-6" />
          <Skeleton className="h-10 w-3/4 mx-auto mb-4" />
          <Skeleton className="h-6 w-1/2 mx-auto" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Skeleton className="h-28 rounded-lg" />
          <Skeleton className="h-28 rounded-lg" />
          <Skeleton className="h-28 rounded-lg" />
          <Skeleton className="h-28 rounded-lg" />
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center flex flex-col items-center justify-center min-h-[60vh]">
        <Trophy className="w-16 h-16 text-red-200 mb-4" />
        <h2 className="text-2xl font-bold text-red-600">Ocorreu um erro ao buscar os jogos</h2>
        <p className="text-gray-600 mt-2 max-w-md">Não foi possível carregar os dados das partidas. Por favor, verifique sua conexão ou tente novamente mais tarde.</p>
        <p className="text-xs text-gray-400 mt-6 bg-gray-50 p-2 rounded border">{error.message}</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-600 to-purple-700 rounded-full mb-6">
          <Trophy className="w-10 h-10 text-white" />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
          Copa do Mundo de Clubes 2025
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          O maior torneio interclubes do mundo retorna com novo formato, reunindo os melhores clubes de todos os continentes nos Estados Unidos.
        </p>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Users className="w-8 h-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">32</div>
          <div className="text-gray-600">Clubes</div>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <MapPin className="w-8 h-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">12</div>
          <div className="text-gray-600">Cidades</div>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Calendar className="w-8 h-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">29</div>
          <div className="text-gray-600">Dias</div>
        </div>
        <div className="text-center p-6 bg-gray-50 rounded-lg">
          <Trophy className="w-8 h-8 text-red-600 mx-auto mb-2" />
          <div className="text-2xl font-bold text-gray-800">63</div>
          <div className="text-gray-600">Partidas</div>
        </div>
      </div>

      {/* History Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">História do Torneio</CardTitle>
            <CardDescription className="text-gray-600">
              A evolução do maior torneio interclubes do mundo
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p>
              A Copa do Mundo de Clubes da FIFA nasceu em 2000, substituindo a antiga Copa Intercontinental que era disputada entre os campeões da Europa e América do Sul desde 1960.
            </p>
            <p>
              O torneio evoluiu ao longo dos anos, passando de seis para sete participantes em 2005, e agora em 2025 se expande dramaticamente para 32 clubes, seguindo o modelo da Copa do Mundo de seleções.
            </p>
            <p>
              Esta nova edição marca uma era histórica, sendo a primeira a ser disputada nos Estados Unidos e com representação verdadeiramente global de todos os continentes.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-gray-800">Copa Intercontinental</CardTitle>
            <CardDescription className="text-gray-600">
              A predecessor que inspirou gerações
            </CardDescription>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <p>
              Criada em 1960, a Copa Intercontinental (também conhecida como Copa Toyota) foi o primeiro confronto oficial entre campeões de diferentes continentes.
            </p>
            <p>
              Durante 40 anos, reuniu os campeões da Liga dos Campeões da UEFA e da Copa Libertadores da CONMEBOL, criando clássicos inesquecíveis como Real Madrid vs Peñarol em 1960.
            </p>
            <p>
              Clubes lendários como Milan, Real Madrid, Boca Juniors e São Paulo construíram sua história mundial neste torneio, estabelecendo as bases para o que hoje conhecemos como Copa do Mundo de Clubes.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Tournament Info */}
      <Card className="border-0 shadow-lg bg-gradient-to-r from-red-50 to-purple-50">
        <CardHeader>
          <CardTitle className="text-2xl text-gray-800">Edição 2025 - Novo Formato</CardTitle>
          <CardDescription className="text-gray-600">
            15 de junho a 13 de julho de 2025 - Estados Unidos
          </CardDescription>
        </CardHeader>
        <CardContent className="text-gray-700 space-y-4">
          <p>
            Pela primeira vez na história, a Copa do Mundo de Clubes terá 32 participantes, distribuídos em 8 grupos de 4 times cada. O formato segue o modelo tradicional da Copa do Mundo de seleções.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fase de Grupos</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• 8 grupos com 4 times cada</li>
                <li>• Os 2 primeiros de cada grupo avançam</li>
                <li>• Total de 48 partidas na primeira fase</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">Fase Eliminatória</h4>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Oitavas de final: 16 times</li>
                <li>• Quartas de final: 8 times</li>
                <li>• Semifinais e final</li>
                <li>• Total de 15 partidas eliminatórias</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
