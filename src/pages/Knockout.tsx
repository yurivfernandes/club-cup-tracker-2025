import React, { useState } from 'react';
import { Trophy, Calendar, MapPin, Clock } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { utcToZonedTime, format } from 'date-fns-tz';

const BR_TZ = 'America/Sao_Paulo';

// Função utilitária para converter horário UTC para BRT (Brasília)
const formatBrtTime = (date: string, timeUTC: string) => {
  const currentYear = new Date().getFullYear();
  const dtStr = `${currentYear}-${date.slice(3,5)}-${date.slice(0,2)}T${timeUTC}Z`;
  try {
    const utcDate = new Date(dtStr);
    const brDate = utcToZonedTime(utcDate, BR_TZ);
    return format(brDate, 'HH:mm');
  } catch {
    return '';
  }
};

const Knockout = () => {
  const [simulatedResults, setSimulatedResults] = useState<{[key: string]: string}>({});

  const rounds = [
    {
      name: 'Oitavas de Final',
      date: '29 Jun - 2 Jul',
      matches: [
        { id: 'R16_1', team1: '1º Grupo A', team2: '2º Grupo B', date: '29/06', time: '21:00', timeUTC: '00:00:00', venue: 'MetLife Stadium' },
        { id: 'R16_2', team1: '1º Grupo B', team2: '2º Grupo A', date: '29/06', time: '18:00', timeUTC: '21:00:00', venue: 'Rose Bowl' },
        { id: 'R16_3', team1: '1º Grupo C', team2: '2º Grupo D', date: '30/06', venue: 'Soldier Field' },
        { id: 'R16_4', team1: '1º Grupo D', team2: '2º Grupo C', date: '30/06', venue: 'Arrowhead Stadium' },
        { id: 'R16_5', team1: '1º Grupo E', team2: '2º Grupo F', date: '01/07', venue: 'Lincoln Financial Field' },
        { id: 'R16_6', team1: '1º Grupo F', team2: '2º Grupo E', date: '01/07', venue: 'Lumen Field' },
        { id: 'R16_7', team1: '1º Grupo G', team2: '2º Grupo H', date: '02/07', venue: 'Hard Rock Stadium' },
        { id: 'R16_8', team1: '1º Grupo H', team2: '2º Grupo G', date: '02/07', venue: 'Mercedes-Benz Stadium' }
      ]
    },
    {
      name: 'Quartas de Final',
      date: '5 - 6 Jul',
      matches: [
        { id: 'QF_1', team1: 'Vencedor R16_1', team2: 'Vencedor R16_2', date: '05/07', venue: 'MetLife Stadium' },
        { id: 'QF_2', team1: 'Vencedor R16_3', team2: 'Vencedor R16_4', date: '05/07', venue: 'Rose Bowl' },
        { id: 'QF_3', team1: 'Vencedor R16_5', team2: 'Vencedor R16_6', date: '06/07', venue: 'Soldier Field' },
        { id: 'QF_4', team1: 'Vencedor R16_7', team2: 'Vencedor R16_8', date: '06/07', venue: 'Arrowhead Stadium' }
      ]
    },
    {
      name: 'Semifinais',
      date: '9 - 10 Jul',
      matches: [
        { id: 'SF_1', team1: 'Vencedor QF_1', team2: 'Vencedor QF_2', date: '09/07', venue: 'MetLife Stadium' },
        { id: 'SF_2', team1: 'Vencedor QF_3', team2: 'Vencedor QF_4', date: '10/07', venue: 'Rose Bowl' }
      ]
    },
    {
      name: 'Final',
      date: '13 Jul',
      matches: [
        { id: 'FINAL', team1: 'Vencedor SF_1', team2: 'Vencedor SF_2', date: '13/07', venue: 'MetLife Stadium' }
      ]
    }
  ];

  const updateResult = (matchId: string, winner: string) => {
    setSimulatedResults(prev => ({
      ...prev,
      [matchId]: winner
    }));
  };

  const getAdvancingTeam = (matchId: string, team1: string, team2: string) => {
    return simulatedResults[matchId] || `${team1} vs ${team2}`;
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-red-600 to-purple-700 rounded-full mb-4">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Fase Eliminatória</h1>
        <p className="text-gray-600">Chaveamento das oitavas de final até a grande final</p>
      </div>

      {/* Knockout Bracket */}
      <div className="space-y-12">
        {rounds.map((round, roundIndex) => (
          <Card key={round.name} className="border-0 shadow-lg">
            <CardHeader className="bg-gradient-to-r from-red-50 to-purple-50">
              <CardTitle className="text-2xl text-gray-800 text-center">{round.name}</CardTitle>
              <div className="flex items-center justify-center space-x-2 text-gray-600">
                <Calendar className="w-4 h-4" />
                <span>{round.date}</span>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className={`grid gap-6 ${
                round.matches.length === 8 ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' :
                round.matches.length === 4 ? 'grid-cols-1 md:grid-cols-2' :
                round.matches.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
                'grid-cols-1'
              }`}>
                {round.matches.map((match) => (
                  <div key={match.id} className="bg-white border-2 border-gray-200 rounded-lg p-4 hover:border-red-200 transition-colors">
                    {/* Match Info */}
                    <div className="flex items-center justify-between mb-3 text-sm text-gray-600">
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-3 h-3" />
                        <span>{match.date}</span>
                        <Clock className="w-3 h-3 ml-2 text-red-400" />
                        <span>{formatBrtTime(match.date, match.timeUTC)}h</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-3 h-3" />
                        <span className="text-xs">{match.venue}</span>
                      </div>
                    </div>

                    {/* Teams */}
                    <div className="space-y-3">
                      <div className={`p-3 rounded border-2 transition-colors cursor-pointer hover:bg-red-50 ${
                        simulatedResults[match.id] === match.team1 ? 'border-red-500 bg-red-50' : 'border-gray-200'
                      }`}
                      onClick={() => updateResult(match.id, match.team1)}
                      >
                        <div className="font-medium text-gray-800 text-sm">{match.team1}</div>
                      </div>
                      
                      <div className="text-center text-xs text-gray-400 font-medium">VS</div>
                      
                      <div className={`p-3 rounded border-2 transition-colors cursor-pointer hover:bg-red-50 ${
                        simulatedResults[match.id] === match.team2 ? 'border-red-500 bg-red-50' : 'border-gray-200'
                      }`}
                      onClick={() => updateResult(match.id, match.team2)}
                      >
                        <div className="font-medium text-gray-800 text-sm">{match.team2}</div>
                      </div>
                    </div>

                    {/* Winner Display */}
                    {simulatedResults[match.id] && (
                      <div className="mt-3 pt-3 border-t border-gray-200">
                        <div className="text-center">
                          <div className="text-xs text-gray-500 mb-1">Classificado</div>
                          <div className="font-bold text-red-600 text-sm">
                            {simulatedResults[match.id]}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Clear Selection */}
                    {simulatedResults[match.id] && (
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateResult(match.id, '')}
                        className="w-full mt-2 text-xs hover:bg-gray-50"
                      >
                        Limpar
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Championship Path */}
      {simulatedResults['FINAL'] && (
        <Card className="border-0 shadow-lg mt-8 bg-gradient-to-r from-yellow-50 to-orange-50">
          <CardContent className="p-8 text-center">
            <Trophy className="w-16 h-16 text-yellow-600 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-orange-800 mb-2">🏆 CAMPEÃO</h2>
            <div className="text-2xl font-bold text-orange-700">{simulatedResults['FINAL']}</div>
            <p className="text-orange-600 mt-2">Copa do Mundo de Clubes FIFA 2025</p>
          </CardContent>
        </Card>
      )}

      {/* Instructions */}
      <Card className="border-0 shadow-lg mt-8 bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-6">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">Como Simular</h3>
            <p className="text-gray-600 text-sm">
              Clique nos times para escolher quem avança para a próxima fase. 
              Os resultados das fases anteriores determinam automaticamente os confrontos seguintes.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Knockout;
