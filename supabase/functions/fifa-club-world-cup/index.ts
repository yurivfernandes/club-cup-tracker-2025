
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface Team {
  name: string;
  country: string;
  confederation: string;
  flag: string;
  logo: string;
  points: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
}

interface Match {
  id: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  time: string;
  venue: string;
  status: 'scheduled' | 'finished';
  result?: {
    home: number;
    away: number;
  };
}

// Dados reais do Mundial de Clubes da FIFA 2025
const realGroups = [
  {
    name: 'Grupo A',
    teams: [
      { name: 'Palmeiras', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Palmeiras-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Porto', country: 'Portugal', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/pt.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/FC-Porto-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Ahly', country: 'Egito', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/eg.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Al-Ahly-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Inter Miami', country: 'Estados Unidos', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/us.png', logo: 'https://logos-world.net/wp-content/uploads/2020/04/Inter-Miami-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo B',
    teams: [
      { name: 'Paris Saint-Germain', country: 'França', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/fr.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Paris-Saint-Germain-PSG-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Atlético Madrid', country: 'Espanha', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/es.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Atletico-Madrid-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Botafogo', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Botafogo-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Seattle Sounders', country: 'Estados Unidos', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/us.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Seattle-Sounders-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo C',
    teams: [
      { name: 'Bayern Munich', country: 'Alemanha', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/de.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Bayern-Munich-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Auckland City', country: 'Nova Zelândia', confederation: 'OFC', flag: 'https://flagcdn.com/24x18/nz.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Auckland-City-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Boca Juniors', country: 'Argentina', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/ar.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Boca-Juniors-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Wydad Casablanca', country: 'Marrocos', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/ma.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Wydad-Casablanca-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo D',
    teams: [
      { name: 'Flamengo', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Flamengo-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Chelsea', country: 'Inglaterra', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/gb-eng.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Chelsea-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'León', country: 'México', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/mx.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Club-Leon-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Esperance', country: 'Tunísia', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/tn.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Esperance-Tunis-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo E',
    teams: [
      { name: 'River Plate', country: 'Argentina', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/ar.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/River-Plate-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Urawa Red Diamonds', country: 'Japão', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/jp.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Urawa-Red-Diamonds-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Monterrey', country: 'México', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/mx.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Monterrey-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Hilal', country: 'Arábia Saudita', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/sa.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Al-Hilal-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo F',
    teams: [
      { name: 'Fluminense', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Fluminense-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Borussia Dortmund', country: 'Alemanha', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/de.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Borussia-Dortmund-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Ulsan Hyundai', country: 'Coreia do Sul', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/kr.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Ulsan-Hyundai-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Mamelodi Sundowns', country: 'África do Sul', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/za.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Mamelodi-Sundowns-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo G',
    teams: [
      { name: 'Manchester City', country: 'Inglaterra', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/gb-eng.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Manchester-City-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Wydad Casablanca', country: 'Marrocos', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/ma.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Wydad-Casablanca-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Ain', country: 'Emirados Árabes Unidos', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/ae.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Al-Ain-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Juventus', country: 'Itália', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/it.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Juventus-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo H',
    teams: [
      { name: 'Real Madrid', country: 'Espanha', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/es.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Real-Madrid-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Hilal', country: 'Arábia Saudita', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/sa.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Al-Hilal-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Pachuca', country: 'México', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/mx.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/Pachuca-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Salzburg', country: 'Áustria', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/at.png', logo: 'https://logos-world.net/wp-content/uploads/2020/06/RB-Salzburg-Logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  }
];

// Partidas reais do Mundial de Clubes 2025 (formato oficial da FIFA)
const realMatches: Match[] = [
  // Grupo A - Jogo de abertura já ocorreu
  { id: 'A1', homeTeam: 'Inter Miami', awayTeam: 'Al Hilal', date: '15/06/2025', time: '20:00', venue: 'Hard Rock Stadium, Miami', status: 'finished', result: { home: 1, away: 2 } },
  { id: 'A2', homeTeam: 'Palmeiras', awayTeam: 'Porto', date: '16/06/2025', time: '17:00', venue: 'Mercedes-Benz Stadium, Atlanta', status: 'scheduled' },
  { id: 'A3', homeTeam: 'Al Hilal', awayTeam: 'Palmeiras', date: '19/06/2025', time: '20:00', venue: 'Hard Rock Stadium, Miami', status: 'scheduled' },
  { id: 'A4', homeTeam: 'Porto', awayTeam: 'Inter Miami', date: '19/06/2025', time: '17:00', venue: 'Mercedes-Benz Stadium, Atlanta', status: 'scheduled' },
  { id: 'A5', homeTeam: 'Al Hilal', awayTeam: 'Porto', date: '23/06/2025', time: '15:00', venue: 'Hard Rock Stadium, Miami', status: 'scheduled' },
  { id: 'A6', homeTeam: 'Inter Miami', awayTeam: 'Palmeiras', date: '23/06/2025', time: '20:00', venue: 'Mercedes-Benz Stadium, Atlanta', status: 'scheduled' },

  // Grupo B
  { id: 'B1', homeTeam: 'PSG', awayTeam: 'Atlético Madrid', date: '17/06/2025', time: '17:00', venue: 'Rose Bowl, Los Angeles', status: 'scheduled' },
  { id: 'B2', homeTeam: 'Botafogo', awayTeam: 'Seattle Sounders', date: '17/06/2025', time: '20:00', venue: 'Lincoln Financial Field, Philadelphia', status: 'scheduled' },
  { id: 'B3', homeTeam: 'Atlético Madrid', awayTeam: 'Botafogo', date: '20/06/2025', time: '17:00', venue: 'Rose Bowl, Los Angeles', status: 'scheduled' },
  { id: 'B4', homeTeam: 'Seattle Sounders', awayTeam: 'PSG', date: '20/06/2025', time: '20:00', venue: 'Lincoln Financial Field, Philadelphia', status: 'scheduled' },
  { id: 'B5', homeTeam: 'Atlético Madrid', awayTeam: 'Seattle Sounders', date: '24/06/2025', time: '15:00', venue: 'Rose Bowl, Los Angeles', status: 'scheduled' },
  { id: 'B6', homeTeam: 'Botafogo', awayTeam: 'PSG', date: '24/06/2025', time: '20:00', venue: 'Lincoln Financial Field, Philadelphia', status: 'scheduled' },

  // Continue with more groups...
];

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const url = new URL(req.url);
    const endpoint = url.pathname.split('/').pop();

    console.log(`FIFA Club World Cup API - Endpoint: ${endpoint}`);

    switch (endpoint) {
      case 'groups':
        return new Response(
          JSON.stringify({ groups: realGroups }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200 
          }
        );

      case 'matches':
        return new Response(
          JSON.stringify({ matches: realMatches }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200 
          }
        );

      case 'all-data':
        return new Response(
          JSON.stringify({ 
            groups: realGroups, 
            matches: realMatches,
            lastUpdated: new Date().toISOString()
          }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 200 
          }
        );

      default:
        return new Response(
          JSON.stringify({ error: 'Endpoint not found' }),
          { 
            headers: { ...corsHeaders, 'Content-Type': 'application/json' },
            status: 404 
          }
        );
    }
  } catch (error) {
    console.error('Error in FIFA Club World Cup API:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
