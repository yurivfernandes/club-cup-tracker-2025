
import React from 'react';
import { Trophy, Users, Globe, Star, Award, Target } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Criteria = () => {
  const criteriaData = [
    {
      confederation: 'UEFA',
      name: 'Europa',
      color: 'bg-blue-500',
      spots: 12,
      criteria: [
        'Campeões da Liga dos Campeões (4 últimas edições)',
        'Campeões da Liga Europa (4 últimas edições)', 
        'Melhores colocados no ranking UEFA (4 vagas adicionais)'
      ],
      icon: Globe
    },
    {
      confederation: 'CONMEBOL',
      name: 'América do Sul',
      color: 'bg-yellow-500',
      spots: 6,
      criteria: [
        'Campeões da Copa Libertadores (4 últimas edições)',
        'Melhores colocados no ranking CONMEBOL (2 vagas adicionais)'
      ],
      icon: Star
    },
    {
      confederation: 'AFC',
      name: 'Ásia',
      color: 'bg-red-500',
      spots: 4,
      criteria: [
        'Campeões da Liga dos Campeões da AFC (4 últimas edições)'
      ],
      icon: Target
    },
    {
      confederation: 'CAF',
      name: 'África',
      color: 'bg-green-500',
      spots: 4,
      criteria: [
        'Campeões da Liga dos Campeões da CAF (4 últimas edições)'
      ],
      icon: Award
    },
    {
      confederation: 'CONCACAF',
      name: 'América do Norte e Central',
      color: 'bg-purple-500',
      spots: 4,
      criteria: [
        'Campeões da Liga dos Campeões da CONCACAF (4 últimas edições)'
      ],
      icon: Users
    },
    {
      confederation: 'OFC',
      name: 'Oceania',
      color: 'bg-gray-500',
      spots: 1,
      criteria: [
        'Campeão da Liga dos Campeões da OFC (melhor colocado nos últimos 4 anos)'
      ],
      icon: Trophy
    },
    {
      confederation: 'HOST',
      name: 'País-sede',
      color: 'bg-indigo-500',
      spots: 1,
      criteria: [
        'Melhor clube dos Estados Unidos no ranking CONCACAF'
      ],
      icon: Star
    }
  ];

  const totalSpots = criteriaData.reduce((sum, conf) => sum + conf.spots, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-purple-700 rounded-full mb-4">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Critérios de Classificação</h1>
        <p className="text-gray-600">Como os 32 clubes se classificaram para o torneio</p>
      </div>

      {/* Overview Card */}
      <Card className="border-0 shadow-lg mb-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Visão Geral da Classificação</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">{totalSpots}</div>
                <div className="text-sm text-gray-600">Total de Clubes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">6</div>
                <div className="text-sm text-gray-600">Confederações</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4</div>
                <div className="text-sm text-gray-600">Anos de Critério</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">1</div>
                <div className="text-sm text-gray-600">País-sede</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Confederation Breakdown */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {criteriaData.map((conf) => {
          const IconComponent = conf.icon;
          return (
            <Card key={conf.confederation} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="pb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-12 h-12 ${conf.color} rounded-full flex items-center justify-center`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-lg text-gray-800">{conf.name}</CardTitle>
                    <div className="text-sm text-gray-600">{conf.confederation}</div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600">Vagas:</span>
                    <span className={`font-bold text-lg px-2 py-1 rounded text-white ${conf.color}`}>
                      {conf.spots}
                    </span>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Critérios:</h4>
                  <ul className="space-y-1">
                    {conf.criteria.map((criterion, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start">
                        <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
                        {criterion}
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Distribution Chart */}
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="text-xl text-gray-800 text-center">Distribuição de Vagas por Confederação</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {criteriaData.map((conf) => {
              const percentage = (conf.spots / totalSpots) * 100;
              return (
                <div key={conf.confederation} className="flex items-center space-x-4">
                  <div className="w-20 text-sm font-medium text-gray-700">{conf.confederation}</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6 relative">
                    <div 
                      className={`${conf.color} h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2`}
                      style={{ width: `${percentage}%` }}
                    >
                      <span className="text-white text-xs font-bold">{conf.spots}</span>
                    </div>
                  </div>
                  <div className="w-12 text-sm text-gray-600">{percentage.toFixed(1)}%</div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>

      {/* Additional Information */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Período de Qualificação</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-3">
            <p>
              <strong>2021-2024:</strong> Os critérios de classificação consideram os resultados das competições continentais dos últimos 4 anos (2021, 2022, 2023 e 2024).
            </p>
            <p>
              <strong>Rankings Utilizados:</strong> Além dos títulos continentais, foram utilizados os rankings oficiais de cada confederação para determinar as vagas adicionais.
            </p>
            <p>
              <strong>Fair Play:</strong> Clubes com histórico de fair play e boa conduta foram priorizados em caso de empate nos critérios técnicos.
            </p>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Novidades da Edição 2025</CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-3">
            <p>
              <strong>Expansão:</strong> Primeira edição com 32 clubes, ampliando significativamente a representatividade global.
            </p>
            <p>
              <strong>Novo Formato:</strong> Sistema de grupos similar à Copa do Mundo, com fase eliminatória completa.
            </p>
            <p>
              <strong>Sede Fixa:</strong> Primeira edição com todas as partidas em um único país (Estados Unidos).
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Criteria;
