
import React, { useState } from 'react';
import { Trophy, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockRanking } from '../data/mockData';

const Ranking = () => {
  const [selectedConfederation, setSelectedConfederation] = useState<string>('all');
  
  const confederations = [
    { value: 'all', label: 'Todas as Confederações' },
    { value: 'UEFA', label: 'UEFA (Europa)' },
    { value: 'CONMEBOL', label: 'CONMEBOL (América do Sul)' },
    { value: 'AFC', label: 'AFC (Ásia)' },
    { value: 'CAF', label: 'CAF (África)' },
    { value: 'CONCACAF', label: 'CONCACAF (América do Norte)' },
    { value: 'OFC', label: 'OFC (Oceania)' }
  ];

  const filteredRanking = selectedConfederation === 'all' 
    ? mockRanking 
    : mockRanking.filter(team => team.confederation === selectedConfederation);

  const getConfederationColor = (confederation: string) => {
    const colors = {
      'UEFA': 'bg-blue-100 text-blue-800',
      'CONMEBOL': 'bg-yellow-100 text-yellow-800',
      'AFC': 'bg-red-100 text-red-800',
      'CAF': 'bg-green-100 text-green-800',
      'CONCACAF': 'bg-purple-100 text-purple-800',
      'OFC': 'bg-gray-100 text-gray-800'
    };
    return colors[confederation as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-purple-700 rounded-full mb-4">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Ranking IFFHS de Clubes</h1>
        <p className="text-gray-600">Classificação oficial dos clubes participantes</p>
      </div>

      {/* Filters */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filtros</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {confederations.map((conf) => (
              <Button
                key={conf.value}
                variant={selectedConfederation === conf.value ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedConfederation(conf.value)}
                className={selectedConfederation === conf.value 
                  ? "bg-red-600 hover:bg-red-700 text-white" 
                  : "hover:bg-red-50 hover:border-red-200"
                }
              >
                {conf.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Ranking Table */}
      <Card className="border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800">
            {selectedConfederation === 'all' 
              ? `Ranking Geral (${filteredRanking.length} clubes)`
              : `${confederations.find(c => c.value === selectedConfederation)?.label} (${filteredRanking.length} clubes)`
            }
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {filteredRanking.map((team, index) => (
              <div
                key={team.name}
                className={`flex items-center p-4 rounded-lg transition-all duration-200 hover:shadow-md ${
                  index < 3 
                    ? 'bg-gradient-to-r from-yellow-50 to-orange-50 border border-yellow-200' 
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {/* Position */}
                <div className="w-12 h-12 flex items-center justify-center mr-4">
                  {index < 3 ? (
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-white ${
                      index === 0 ? 'bg-yellow-500' : 
                      index === 1 ? 'bg-gray-400' : 'bg-amber-600'
                    }`}>
                      {team.ranking}
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-gray-600 bg-white border-2 border-gray-200">
                      {team.ranking}
                    </div>
                  )}
                </div>

                {/* Flag */}
                <img 
                  src={team.flag} 
                  alt={team.country}
                  className="w-8 h-6 object-cover rounded mr-4"
                />

                {/* Team Info */}
                <div className="flex-1">
                  <div className="font-bold text-gray-800 text-lg">{team.name}</div>
                  <div className="text-sm text-gray-600">{team.country}</div>
                </div>

                {/* Confederation Badge */}
                <div className={`px-3 py-1 rounded-full text-xs font-medium mr-4 ${getConfederationColor(team.confederation)}`}>
                  {team.confederation}
                </div>

                {/* IFFHS Points */}
                <div className="text-right">
                  <div className="text-xl font-bold text-gray-800">{team.iffhsPoints}</div>
                  <div className="text-xs text-gray-500">pontos</div>
                </div>
              </div>
            ))}
          </div>

          {filteredRanking.length === 0 && (
            <div className="text-center py-8 text-gray-500">
              Nenhum clube encontrado para esta confederação.
            </div>
          )}
        </CardContent>
      </Card>

      {/* Info Card */}
      <Card className="border-0 shadow-lg mt-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Sobre o Ranking IFFHS</h3>
            <p className="text-gray-600 text-sm">
              O ranking da International Federation of Football History & Statistics (IFFHS) é calculado com base nos resultados dos clubes 
              em competições nacionais e internacionais dos últimos 4 anos, considerando a força dos campeonatos e adversários enfrentados.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ranking;
