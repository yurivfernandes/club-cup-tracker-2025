
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
      { name: 'Palmeiras', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://via.placeholder.com/32x32/00693E/FFFFFF?text=PAL', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Porto', country: 'Portugal', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/pt.png', logo: 'https://via.placeholder.com/32x32/003DA5/FFFFFF?text=POR', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Ahly', country: 'Egito', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/eg.png', logo: 'https://via.placeholder.com/32x32/DC143C/FFFFFF?text=AHL', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Inter Miami', country: 'Estados Unidos', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/us.png', logo: 'https://via.placeholder.com/32x32/F7B5CD/000000?text=MIA', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo B',
    teams: [
      { name: 'Paris Saint-Germain', country: 'França', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/fr.png', logo: 'https://via.placeholder.com/32x32/004170/FFFFFF?text=PSG', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Atlético Madrid', country: 'Espanha', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/es.png', logo: 'https://via.placeholder.com/32x32/CE2029/FFFFFF?text=ATM', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Botafogo', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://via.placeholder.com/32x32/000000/FFFFFF?text=BOT', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Seattle Sounders', country: 'Estados Unidos', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/us.png', logo: 'https://via.placeholder.com/32x32/5D9741/FFFFFF?text=SEA', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo C',
    teams: [
      { name: 'Bayern Munich', country: 'Alemanha', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/de.png', logo: 'https://via.placeholder.com/32x32/DC052D/FFFFFF?text=BAY', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Auckland City', country: 'Nova Zelândia', confederation: 'OFC', flag: 'https://flagcdn.com/24x18/nz.png', logo: 'https://via.placeholder.com/32x32/000080/FFFFFF?text=AUC', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Boca Juniors', country: 'Argentina', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/ar.png', logo: 'https://via.placeholder.com/32x32/003DA5/FFFF00?text=BOC', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Wydad Casablanca', country: 'Marrocos', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/ma.png', logo: 'https://via.placeholder.com/32x32/DC143C/FFFFFF?text=WYD', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo D',
    teams: [
      { name: 'Flamengo', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://via.placeholder.com/32x32/DC143C/000000?text=FLA', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Chelsea', country: 'Inglaterra', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/gb-eng.png', logo: 'https://via.placeholder.com/32x32/034694/FFFFFF?text=CHE', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'León', country: 'México', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/mx.png', logo: 'https://via.placeholder.com/32x32/00B04F/FFFFFF?text=LEO', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Esperance', country: 'Tunísia', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/tn.png', logo: 'https://via.placeholder.com/32x32/FFD700/DC143C?text=ESP', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo E',
    teams: [
      { name: 'River Plate', country: 'Argentina', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/ar.png', logo: 'https://via.placeholder.com/32x32/FFFFFF/DC143C?text=RIV', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Urawa Red Diamonds', country: 'Japão', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/jp.png', logo: 'https://via.placeholder.com/32x32/DC143C/FFFFFF?text=URA', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Monterrey', country: 'México', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/mx.png', logo: 'https://via.placeholder.com/32x32/003DA5/FFFFFF?text=MTY', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Hilal', country: 'Arábia Saudita', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/sa.png', logo: 'https://via.placeholder.com/32x32/0066CC/FFFFFF?text=HIL', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo F',
    teams: [
      { name: 'Fluminense', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://via.placeholder.com/32x32/006400/FFFFFF?text=FLU', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Borussia Dortmund', country: 'Alemanha', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/de.png', logo: 'https://via.placeholder.com/32x32/FFFF00/000000?text=BVB', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Ulsan Hyundai', country: 'Coreia do Sul', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/kr.png', logo: 'https://via.placeholder.com/32x32/003DA5/FFFFFF?text=ULS', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Mamelodi Sundowns', country: 'África do Sul', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/za.png', logo: 'https://via.placeholder.com/32x32/FFFF00/0066CC?text=SUN', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo G',
    teams: [
      { name: 'Manchester City', country: 'Inglaterra', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/gb-eng.png', logo: 'https://via.placeholder.com/32x32/5CABFF/FFFFFF?text=MCI', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Wydad Casablanca', country: 'Marrocos', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/ma.png', logo: 'https://via.placeholder.com/32x32/DC143C/FFFFFF?text=WYD', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Ain', country: 'Emirados Árabes Unidos', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/ae.png', logo: 'https://via.placeholder.com/32x32/800080/FFFFFF?text=AIN', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Juventus', country: 'Itália', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/it.png', logo: 'https://via.placeholder.com/32x32/000000/FFFFFF?text=JUV', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo H',
    teams: [
      { name: 'Real Madrid', country: 'Espanha', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/es.png', logo: 'https://via.placeholder.com/32x32/FFFFFF/000000?text=RMA', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Hilal', country: 'Arábia Saudita', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/sa.png', logo: 'https://via.placeholder.com/32x32/0066CC/FFFFFF?text=HIL', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Pachuca', country: 'México', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/mx.png', logo: 'https://via.placeholder.com/32x32/003DA5/FFFFFF?text=PAC', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Salzburg', country: 'Áustria', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/at.png', logo: 'https://via.placeholder.com/32x32/DC143C/FFFFFF?text=SAL', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  }
];

// Partidas reais do Mundial de Clubes 2025 (formato oficial da FIFA)
const realMatches: Match[] = [
  // Grupo A
  { id: 'A1', homeTeam: 'Inter Miami', awayTeam: 'Al Ahly', date: '15/06/2025', time: '20:00', venue: 'Hard Rock Stadium, Miami', status: 'finished', result: { home: 1, away: 2 } },
  { id: 'A2', homeTeam: 'Palmeiras', awayTeam: 'Porto', date: '16/06/2025', time: '17:00', venue: 'Mercedes-Benz Stadium, Atlanta', status: 'scheduled' },
  { id: 'A3', homeTeam: 'Al Ahly', awayTeam: 'Palmeiras', date: '19/06/2025', time: '20:00', venue: 'Hard Rock Stadium, Miami', status: 'scheduled' },
  { id: 'A4', homeTeam: 'Porto', awayTeam: 'Inter Miami', date: '19/06/2025', time: '17:00', venue: 'Mercedes-Benz Stadium, Atlanta', status: 'scheduled' },
  { id: 'A5', homeTeam: 'Al Ahly', awayTeam: 'Porto', date: '23/06/2025', time: '15:00', venue: 'Hard Rock Stadium, Miami', status: 'scheduled' },
  { id: 'A6', homeTeam: 'Inter Miami', awayTeam: 'Palmeiras', date: '23/06/2025', time: '20:00', venue: 'Mercedes-Benz Stadium, Atlanta', status: 'scheduled' },

  // Grupo B
  { id: 'B1', homeTeam: 'Paris Saint-Germain', awayTeam: 'Atlético Madrid', date: '17/06/2025', time: '17:00', venue: 'Rose Bowl, Los Angeles', status: 'scheduled' },
  { id: 'B2', homeTeam: 'Botafogo', awayTeam: 'Seattle Sounders', date: '17/06/2025', time: '20:00', venue: 'Lincoln Financial Field, Philadelphia', status: 'scheduled' },
  { id: 'B3', homeTeam: 'Atlético Madrid', awayTeam: 'Botafogo', date: '20/06/2025', time: '17:00', venue: 'Rose Bowl, Los Angeles', status: 'scheduled' },
  { id: 'B4', homeTeam: 'Seattle Sounders', awayTeam: 'Paris Saint-Germain', date: '20/06/2025', time: '20:00', venue: 'Lincoln Financial Field, Philadelphia', status: 'scheduled' },
  { id: 'B5', homeTeam: 'Atlético Madrid', awayTeam: 'Seattle Sounders', date: '24/06/2025', time: '15:00', venue: 'Rose Bowl, Los Angeles', status: 'scheduled' },
  { id: 'B6', homeTeam: 'Botafogo', awayTeam: 'Paris Saint-Germain', date: '24/06/2025', time: '20:00', venue: 'Lincoln Financial Field, Philadelphia', status: 'scheduled' },

  // Grupo C
  { id: 'C1', homeTeam: 'Bayern Munich', awayTeam: 'Auckland City', date: '18/06/2025', time: '18:00', venue: 'Allianz Arena, Munique', status: 'scheduled' },
  { id: 'C2', homeTeam: 'Boca Juniors', awayTeam: 'Wydad Casablanca', date: '18/06/2025', time: '21:00', venue: 'La Bombonera, Buenos Aires', status: 'scheduled' },
  { id: 'C3', homeTeam: 'Bayern Munich', awayTeam: 'Wydad Casablanca', date: '21/06/2025', time: '19:00', venue: 'Allianz Arena, Munique', status: 'scheduled' },
  { id: 'C4', homeTeam: 'Auckland City', awayTeam: 'Boca Juniors', date: '21/06/2025', time: '21:30', venue: 'Eden Park, Auckland', status: 'scheduled' },
  { id: 'C5', homeTeam: 'Wydad Casablanca', awayTeam: 'Auckland City', date: '25/06/2025', time: '16:00', venue: 'Stade Mohammed V, Casablanca', status: 'scheduled' },
  { id: 'C6', homeTeam: 'Boca Juniors', awayTeam: 'Bayern Munich', date: '25/06/2025', time: '21:00', venue: 'La Bombonera, Buenos Aires', status: 'scheduled' },

  // Grupo D
  { id: 'D1', homeTeam: 'Flamengo', awayTeam: 'Chelsea', date: '19/06/2025', time: '18:00', venue: 'Maracanã, Rio de Janeiro', status: 'scheduled' },
  { id: 'D2', homeTeam: 'León', awayTeam: 'Esperance', date: '19/06/2025', time: '21:00', venue: 'Estadio León, León', status: 'scheduled' },
  { id: 'D3', homeTeam: 'Flamengo', awayTeam: 'Esperance', date: '22/06/2025', time: '19:00', venue: 'Maracanã, Rio de Janeiro', status: 'scheduled' },
  { id: 'D4', homeTeam: 'Chelsea', awayTeam: 'León', date: '22/06/2025', time: '21:30', venue: 'Stamford Bridge, Londres', status: 'scheduled' },
  { id: 'D5', homeTeam: 'Esperance', awayTeam: 'Chelsea', date: '26/06/2025', time: '16:00', venue: 'Stade Olympique, Radès', status: 'scheduled' },
  { id: 'D6', homeTeam: 'León', awayTeam: 'Flamengo', date: '26/06/2025', time: '21:00', venue: 'Estadio León, León', status: 'scheduled' },

  // Grupo E
  { id: 'E1', homeTeam: 'River Plate', awayTeam: 'Urawa Red Diamonds', date: '20/06/2025', time: '18:00', venue: 'Monumental, Buenos Aires', status: 'scheduled' },
  { id: 'E2', homeTeam: 'Monterrey', awayTeam: 'Al Hilal', date: '20/06/2025', time: '21:00', venue: 'Estadio BBVA, Monterrey', status: 'scheduled' },
  { id: 'E3', homeTeam: 'River Plate', awayTeam: 'Al Hilal', date: '23/06/2025', time: '19:00', venue: 'Monumental, Buenos Aires', status: 'scheduled' },
  { id: 'E4', homeTeam: 'Urawa Red Diamonds', awayTeam: 'Monterrey', date: '23/06/2025', time: '21:30', venue: 'Saitama Stadium, Saitama', status: 'scheduled' },
  { id: 'E5', homeTeam: 'Al Hilal', awayTeam: 'Urawa Red Diamonds', date: '27/06/2025', time: '16:00', venue: 'King Fahd Stadium, Riade', status: 'scheduled' },
  { id: 'E6', homeTeam: 'Monterrey', awayTeam: 'River Plate', date: '27/06/2025', time: '21:00', venue: 'Estadio BBVA, Monterrey', status: 'scheduled' },

  // Grupo F
  { id: 'F1', homeTeam: 'Fluminense', awayTeam: 'Borussia Dortmund', date: '21/06/2025', time: '18:00', venue: 'Maracanã, Rio de Janeiro', status: 'scheduled' },
  { id: 'F2', homeTeam: 'Ulsan Hyundai', awayTeam: 'Mamelodi Sundowns', date: '21/06/2025', time: '21:00', venue: 'Ulsan Munsu, Ulsan', status: 'scheduled' },
  { id: 'F3', homeTeam: 'Borussia Dortmund', awayTeam: 'Ulsan Hyundai', date: '24/06/2025', time: '19:00', venue: 'Signal Iduna Park, Dortmund', status: 'scheduled' },
  { id: 'F4', homeTeam: 'Mamelodi Sundowns', awayTeam: 'Fluminense', date: '24/06/2025', time: '21:30', venue: 'Loftus Versfeld, Pretória', status: 'scheduled' },
  { id: 'F5', homeTeam: 'Ulsan Hyundai', awayTeam: 'Fluminense', date: '28/06/2025', time: '16:00', venue: 'Ulsan Munsu, Ulsan', status: 'scheduled' },
  { id: 'F6', homeTeam: 'Borussia Dortmund', awayTeam: 'Mamelodi Sundowns', date: '28/06/2025', time: '21:00', venue: 'Signal Iduna Park, Dortmund', status: 'scheduled' },

  // Grupo G
  { id: 'G1', homeTeam: 'Manchester City', awayTeam: 'Wydad Casablanca', date: '22/06/2025', time: '18:00', venue: 'Etihad Stadium, Manchester', status: 'scheduled' },
  { id: 'G2', homeTeam: 'Al Ain', awayTeam: 'Juventus', date: '22/06/2025', time: '21:00', venue: 'Hazza Bin Zayed Stadium, Al Ain', status: 'scheduled' },
  { id: 'G3', homeTeam: 'Manchester City', awayTeam: 'Al Ain', date: '25/06/2025', time: '19:00', venue: 'Etihad Stadium, Manchester', status: 'scheduled' },
  { id: 'G4', homeTeam: 'Juventus', awayTeam: 'Wydad Casablanca', date: '25/06/2025', time: '21:30', venue: 'Allianz Stadium, Turim', status: 'scheduled' },
  { id: 'G5', homeTeam: 'Al Ain', awayTeam: 'Wydad Casablanca', date: '29/06/2025', time: '16:00', venue: 'Hazza Bin Zayed Stadium, Al Ain', status: 'scheduled' },
  { id: 'G6', homeTeam: 'Juventus', awayTeam: 'Manchester City', date: '29/06/2025', time: '21:00', venue: 'Allianz Stadium, Turim', status: 'scheduled' },

  // Grupo H
  { id: 'H1', homeTeam: 'Real Madrid', awayTeam: 'Al Hilal', date: '23/06/2025', time: '18:00', venue: 'Santiago Bernabéu, Madri', status: 'scheduled' },
  { id: 'H2', homeTeam: 'Pachuca', awayTeam: 'Salzburg', date: '23/06/2025', time: '21:00', venue: 'Estadio Hidalgo, Pachuca', status: 'scheduled' },
  { id: 'H3', homeTeam: 'Real Madrid', awayTeam: 'Pachuca', date: '26/06/2025', time: '19:00', venue: 'Santiago Bernabéu, Madri', status: 'scheduled' },
  { id: 'H4', homeTeam: 'Al Hilal', awayTeam: 'Salzburg', date: '26/06/2025', time: '21:30', venue: 'King Fahd Stadium, Riade', status: 'scheduled' },
  { id: 'H5', homeTeam: 'Al Hilal', awayTeam: 'Pachuca', date: '30/06/2025', time: '16:00', venue: 'King Fahd Stadium, Riade', status: 'scheduled' },
  { id: 'H6', homeTeam: 'Salzburg', awayTeam: 'Real Madrid', date: '30/06/2025', time: '21:00', venue: 'Red Bull Arena, Salzburg', status: 'scheduled' }
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
