
import React, { useState } from 'react';
import { Trophy, Filter } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
// Removido: import { mockRanking } from '../data/mockData';

const Ranking = () => {
  // Por enquanto, mostramos uma mensagem informando que o ranking será exibido em breve.
  // O código a seguir pode ser substituído quando você decidir conectar a API real.

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-purple-700 rounded-full mb-4">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Ranking IFFHS de Clubes</h1>
        <p className="text-gray-600">Classificação oficial dos clubes participantes</p>
      </div>
      <Card className="border-0 shadow-lg mb-8">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Filter className="w-5 h-5" />
            <span>Filtros</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-gray-600 text-center py-10">
            Em breve, o ranking de clubes será exibido aqui com dados oficiais.
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Ranking;
