
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Calendar, MapPin } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { mockGroups, mockMatches } from '../data/mockData';

const Groups = () => {
  const [currentGroup, setCurrentGroup] = useState(0);
  const [simulatedResults, setSimulatedResults] = useState<{[key: string]: {home: number, away: number}}>({});

  const groups = mockGroups;
  const groupLabels = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];

  const nextGroup = () => {
    setCurrentGroup((prev) => (prev + 1) % groups.length);
  };

  const prevGroup = () => {
    setCurrentGroup((prev) => (prev - 1 + groups.length) % groups.length);
  };

  const updateResult = (matchId: string, homeScore: number, awayScore: number) => {
    setSimulatedResults(prev => ({
      ...prev,
      [matchId]: { home: homeScore, away: awayScore }
    }));
  };

  const getGroupMatches = (groupIndex: number) => {
    return mockMatches.filter(match => 
      groups[groupIndex].teams.some(team => team.name === match.homeTeam || team.name === match.awayTeam)
    );
  };

  const calculateStandings = (groupIndex: number) => {
    const groupTeams = [...groups[groupIndex].teams];
    const groupMatches = getGroupMatches(groupIndex);
    
    // Reset points
    groupTeams.forEach(team => {
      team.points = 0;
      team.played = 0;
      team.won = 0;
      team.drawn = 0;
      team.lost = 0;
      team.goalsFor = 0;
      team.goalsAgainst = 0;
    });

    // Calculate from matches
    groupMatches.forEach(match => {
      const result = simulatedResults[match.id] || match.result;
      if (result) {
        const homeTeam = groupTeams.find(t => t.name === match.homeTeam);
        const awayTeam = groupTeams.find(t => t.name === match.awayTeam);
        
        if (homeTeam && awayTeam) {
          homeTeam.played++;
          awayTeam.played++;
          homeTeam.goalsFor += result.home;
          homeTeam.goalsAgainst += result.away;
          awayTeam.goalsFor += result.away;
          awayTeam.goalsAgainst += result.home;

          if (result.home > result.away) {
            homeTeam.won++;
            homeTeam.points += 3;
            awayTeam.lost++;
          } else if (result.home < result.away) {
            awayTeam.won++;
            awayTeam.points += 3;
            homeTeam.lost++;
          } else {
            homeTeam.drawn++;
            awayTeam.drawn++;
            homeTeam.points += 1;
            awayTeam.points += 1;
          }
        }
      }
    });

    // Sort by points, then goal difference, then goals for
    return groupTeams.sort((a, b) => {
      if (b.points !== a.points) return b.points - a.points;
      const gdDiff = (b.goalsFor - b.goalsAgainst) - (a.goalsFor - a.goalsAgainst);
      if (gdDiff !== 0) return gdDiff;
      return b.goalsFor - a.goalsFor;
    });
  };

  const currentGroupData = groups[currentGroup];
  const standings = calculateStandings(currentGroup);
  const matches = getGroupMatches(currentGroup);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header with Navigation */}
      <div className="flex items-center justify-between mb-8">
        <Button
          variant="outline"
          size="icon"
          onClick={prevGroup}
          className="hover:bg-red-50 hover:border-red-200"
        >
          <ChevronLeft className="w-4 h-4" />
        </Button>
        
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Grupo {groupLabels[currentGroup]}</h1>
          <p className="text-gray-600">Clique nos placares para simular resultados futuros</p>
        </div>
        
        <Button
          variant="outline"
          size="icon"
          onClick={nextGroup}
          className="hover:bg-red-50 hover:border-red-200"
        >
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Standings */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Classificação</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {standings.map((team, index) => (
                <div
                  key={team.name}
                  className={`flex items-center p-3 rounded-lg transition-colors ${
                    index < 2 
                      ? 'bg-green-50 border border-green-200' 
                      : 'bg-gray-50'
                  }`}
                >
                  <div className="w-8 h-8 flex items-center justify-center text-sm font-bold text-gray-600 mr-3">
                    {index + 1}
                  </div>
                  <img 
                    src={team.flag} 
                    alt={team.name}
                    className="w-8 h-6 object-cover rounded mr-3"
                  />
                  <div className="flex-1">
                    <div className="font-semibold text-gray-800">{team.name}</div>
                    <div className="text-xs text-gray-500">{team.confederation}</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-sm text-center text-gray-600 mr-4">
                    <div>{team.points}pts</div>
                    <div>{team.played}j</div>
                    <div>{team.goalsFor}:{team.goalsAgainst}</div>
                    <div>{team.goalsFor - team.goalsAgainst > 0 ? '+' : ''}{team.goalsFor - team.goalsAgainst}</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Matches */}
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl text-gray-800">Partidas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {matches.map((match) => {
                const result = simulatedResults[match.id] || match.result;
                const isFinished = match.status === 'finished';
                
                return (
                  <div key={match.id} className="p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>{match.date}</span>
                        <span>{match.time}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{match.venue}</span>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3 flex-1">
                        <img 
                          src={`https://flagcdn.com/24x18/${match.homeTeam.toLowerCase().replace(/\s+/g, '-')}.png`}
                          alt={match.homeTeam}
                          className="w-6 h-4 object-cover rounded"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/24x18/cccccc/666666?text=?';
                          }}
                        />
                        <span className="font-medium text-gray-800">{match.homeTeam}</span>
                      </div>
                      
                      <div className="flex items-center space-x-2 mx-4">
                        {result ? (
                          isFinished ? (
                            <div className="bg-white px-3 py-1 rounded border text-center min-w-[60px]">
                              <span className="font-bold text-gray-800">
                                {result.home} - {result.away}
                              </span>
                            </div>
                          ) : (
                            <div className="flex space-x-1">
                              <input
                                type="number"
                                min="0"
                                max="9"
                                value={result.home}
                                onChange={(e) => updateResult(match.id, parseInt(e.target.value) || 0, result.away)}
                                className="w-12 h-8 text-center border rounded text-sm"
                              />
                              <span className="flex items-center px-1">-</span>
                              <input
                                type="number"
                                min="0"
                                max="9"
                                value={result.away}
                                onChange={(e) => updateResult(match.id, result.home, parseInt(e.target.value) || 0)}
                                className="w-12 h-8 text-center border rounded text-sm"
                              />
                            </div>
                          )
                        ) : (
                          <div className="flex space-x-1">
                            <input
                              type="number"
                              min="0"
                              max="9"
                              placeholder="0"
                              onChange={(e) => updateResult(match.id, parseInt(e.target.value) || 0, 0)}
                              className="w-12 h-8 text-center border rounded text-sm"
                            />
                            <span className="flex items-center px-1">-</span>
                            <input
                              type="number"
                              min="0"
                              max="9"
                              placeholder="0"
                              onChange={(e) => updateResult(match.id, 0, parseInt(e.target.value) || 0)}
                              className="w-12 h-8 text-center border rounded text-sm"
                            />
                          </div>
                        )}
                      </div>
                      
                      <div className="flex items-center space-x-3 flex-1 justify-end">
                        <span className="font-medium text-gray-800">{match.awayTeam}</span>
                        <img 
                          src={`https://flagcdn.com/24x18/${match.awayTeam.toLowerCase().replace(/\s+/g, '-')}.png`}
                          alt={match.awayTeam}
                          className="w-6 h-4 object-cover rounded"
                          onError={(e) => {
                            e.currentTarget.src = 'https://via.placeholder.com/24x18/cccccc/666666?text=?';
                          }}
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Groups;
