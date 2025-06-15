
export interface Team {
  name: string;
  country: string;
  confederation: string;
  flag: string;
  points: number;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goalsFor: number;
  goalsAgainst: number;
  ranking?: number;
  iffhsPoints?: number;
}

export interface Match {
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

export const mockGroups = [
  {
    name: 'Grupo A',
    teams: [
      { name: 'Manchester City', country: 'Inglaterra', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/gb-eng.png', logo: 'https://upload.wikimedia.org/wikipedia/en/e/eb/Manchester_City_FC_badge.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Palmeiras', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Hilal', country: 'Arábia Saudita', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/sa.png', logo: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Al_Hilal_Club_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Monterrey', country: 'México', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/mx.png', logo: 'https://upload.wikimedia.org/wikipedia/en/2/2d/CF_Monterrey_crest.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo B',
    teams: [
      { name: 'Real Madrid', country: 'Espanha', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/es.png', logo: 'https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Flamengo', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Clube_de_Regatas_do_Flamengo_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Urawa Red Diamonds', country: 'Japão', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/jp.png', logo: 'https://upload.wikimedia.org/wikipedia/en/f/f3/Urawa_Red_Diamonds.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Seattle Sounders', country: 'Estados Unidos', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/us.png', logo: 'https://upload.wikimedia.org/wikipedia/en/2/27/Seattle_Sounders_FC.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo C',
    teams: [
      { name: 'Chelsea', country: 'Inglaterra', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/gb-eng.png', logo: 'https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'River Plate', country: 'Argentina', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/ar.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3e/CA_River_Plate_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Ahly', country: 'Egito', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/eg.png', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Al_Ahly_SC_%28logo%29.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'León', country: 'México', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/mx.png', logo: 'https://upload.wikimedia.org/wikipedia/en/8/81/Club_León_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo D',
    teams: [
      { name: 'Bayern Munich', country: 'Alemanha', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/de.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/FC_Bayern_München_logo_%282017%29.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Boca Juniors', country: 'Argentina', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/ar.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Boca_Juniors_logo18.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Auckland City', country: 'Nova Zelândia', confederation: 'OFC', flag: 'https://flagcdn.com/24x18/nz.png', logo: 'https://upload.wikimedia.org/wikipedia/en/0/0c/Auckland_City_FC_logo2.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Wydad Casablanca', country: 'Marrocos', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/ma.png', logo: 'https://upload.wikimedia.org/wikipedia/ar/2/2d/Wydad_logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo E',
    teams: [
      { name: 'Paris Saint-Germain', country: 'França', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/fr.png', logo: 'https://upload.wikimedia.org/wikipedia/en/a/a7/Paris_Saint-Germain_F.C..svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Atlético Nacional', country: 'Colômbia', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/co.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Escudo_Atlético_Nacional.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Mamelodi Sundowns', country: 'África do Sul', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/za.png', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Mamelodi_Sundowns_FC_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Ain', country: 'Emirados Árabes Unidos', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/ae.png', logo: 'https://upload.wikimedia.org/wikipedia/en/0/07/Al_Ain_FC_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo F',
    teams: [
      { name: 'Juventus', country: 'Itália', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/it.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Juventus_FC_2017_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'São Paulo', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/5a/Sao_Paulo_FC_crest.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Esperance', country: 'Tunísia', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/tn.png', logo: 'https://upload.wikimedia.org/wikipedia/en/3/35/ES_Tunis_logo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Al Jazira', country: 'Emirados Árabes Unidos', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/ae.png', logo: 'https://upload.wikimedia.org/wikipedia/en/d/df/Al_Jazira_Club_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo G',
    teams: [
      { name: 'Manchester United', country: 'Inglaterra', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/gb-eng.png', logo: 'https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Botafogo', country: 'Brasil', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/br.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7e/Escudo_Botafogo.png', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Pachuca', country: 'México', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/mx.png', logo: 'https://upload.wikimedia.org/wikipedia/en/6/6a/C.F._Pachuca_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Ulsan Hyundai', country: 'Coreia do Sul', confederation: 'AFC', flag: 'https://flagcdn.com/24x18/kr.png', logo: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Ulsan_Hyundai_FC.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  },
  {
    name: 'Grupo H',
    teams: [
      { name: 'Barcelona', country: 'Espanha', confederation: 'UEFA', flag: 'https://flagcdn.com/24x18/es.png', logo: 'https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Racing', country: 'Argentina', confederation: 'CONMEBOL', flag: 'https://flagcdn.com/24x18/ar.png', logo: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Escudo_del_Racing_Club_%28Argentina%29.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Raja Casablanca', country: 'Marrocos', confederation: 'CAF', flag: 'https://flagcdn.com/24x18/ma.png', logo: 'https://upload.wikimedia.org/wikipedia/ar/3/3d/Raja_Club_Athletic_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 },
      { name: 'Inter Miami', country: 'Estados Unidos', confederation: 'CONCACAF', flag: 'https://flagcdn.com/24x18/us.png', logo: 'https://upload.wikimedia.org/wikipedia/en/c/c2/Inter_Miami_CF_logo.svg', points: 0, played: 0, won: 0, drawn: 0, lost: 0, goalsFor: 0, goalsAgainst: 0 }
    ]
  }
];

export const mockMatches: Match[] = [
  // Partida de abertura (já finalizada, com resultado)
  { 
    id: 'OPEN1', 
    homeTeam: 'Manchester City', 
    awayTeam: 'Palmeiras', 
    date: '14/06/2025', 
    time: '21:00', 
    venue: 'Maracanã', 
    status: 'finished',
    result: { home: 3, away: 1 }
  },

  // Grupo A
  { id: 'A1', homeTeam: 'Manchester City', awayTeam: 'Al Hilal', date: '15/06/2025', time: '15:00', venue: 'MetLife Stadium', status: 'scheduled' },
  { id: 'A2', homeTeam: 'Palmeiras', awayTeam: 'Monterrey', date: '15/06/2025', time: '18:00', venue: 'Arrowhead Stadium', status: 'scheduled' },
  { id: 'A3', homeTeam: 'Manchester City', awayTeam: 'Monterrey', date: '19/06/2025', time: '15:00', venue: 'MetLife Stadium', status: 'scheduled' },
  { id: 'A4', homeTeam: 'Al Hilal', awayTeam: 'Palmeiras', date: '19/06/2025', time: '18:00', venue: 'Arrowhead Stadium', status: 'scheduled' },
  { id: 'A5', homeTeam: 'Monterrey', awayTeam: 'Al Hilal', date: '23/06/2025', time: '15:00', venue: 'MetLife Stadium', status: 'scheduled' },
  { id: 'A6', homeTeam: 'Palmeiras', awayTeam: 'Manchester City', date: '23/06/2025', time: '18:00', venue: 'Arrowhead Stadium', status: 'scheduled' },

  // Grupo B
  { id: 'B1', homeTeam: 'Real Madrid', awayTeam: 'Urawa Red Diamonds', date: '16/06/2025', time: '15:00', venue: 'Rose Bowl', status: 'scheduled' },
  { id: 'B2', homeTeam: 'Flamengo', awayTeam: 'Seattle Sounders', date: '16/06/2025', time: '18:00', venue: 'Soldier Field', status: 'scheduled' },
  { id: 'B3', homeTeam: 'Real Madrid', awayTeam: 'Seattle Sounders', date: '20/06/2025', time: '15:00', venue: 'Rose Bowl', status: 'scheduled' },
  { id: 'B4', homeTeam: 'Urawa Red Diamonds', awayTeam: 'Flamengo', date: '20/06/2025', time: '18:00', venue: 'Soldier Field', status: 'scheduled' },
  { id: 'B5', homeTeam: 'Seattle Sounders', awayTeam: 'Urawa Red Diamonds', date: '24/06/2025', time: '15:00', venue: 'Rose Bowl', status: 'scheduled' },
  { id: 'B6', homeTeam: 'Flamengo', awayTeam: 'Real Madrid', date: '24/06/2025', time: '18:00', venue: 'Soldier Field', status: 'scheduled' },

  // Grupo C
  { id: 'C1', homeTeam: 'Chelsea', awayTeam: 'Al Ahly', date: '17/06/2025', time: '15:00', venue: 'Anfield', status: 'scheduled' },
  { id: 'C2', homeTeam: 'River Plate', awayTeam: 'León', date: '17/06/2025', time: '18:00', venue: 'Estadio Monumental', status: 'scheduled' },
  { id: 'C3', homeTeam: 'Chelsea', awayTeam: 'León', date: '21/06/2025', time: '15:00', venue: 'Anfield', status: 'scheduled' },
  { id: 'C4', homeTeam: 'Al Ahly', awayTeam: 'River Plate', date: '21/06/2025', time: '18:00', venue: 'Estadio Monumental', status: 'scheduled' },
  { id: 'C5', homeTeam: 'León', awayTeam: 'Al Ahly', date: '25/06/2025', time: '15:00', venue: 'Anfield', status: 'scheduled' },
  { id: 'C6', homeTeam: 'River Plate', awayTeam: 'Chelsea', date: '25/06/2025', time: '18:00', venue: 'Estadio Monumental', status: 'scheduled' },

  // Grupo D
  { id: 'D1', homeTeam: 'Bayern Munich', awayTeam: 'Auckland City', date: '18/06/2025', time: '15:00', venue: 'Allianz Arena', status: 'scheduled' },
  { id: 'D2', homeTeam: 'Boca Juniors', awayTeam: 'Wydad Casablanca', date: '18/06/2025', time: '18:00', venue: 'La Bombonera', status: 'scheduled' },
  { id: 'D3', homeTeam: 'Bayern Munich', awayTeam: 'Wydad Casablanca', date: '22/06/2025', time: '15:00', venue: 'Allianz Arena', status: 'scheduled' },
  { id: 'D4', homeTeam: 'Auckland City', awayTeam: 'Boca Juniors', date: '22/06/2025', time: '18:00', venue: 'La Bombonera', status: 'scheduled' },
  { id: 'D5', homeTeam: 'Wydad Casablanca', awayTeam: 'Auckland City', date: '26/06/2025', time: '15:00', venue: 'Allianz Arena', status: 'scheduled' },
  { id: 'D6', homeTeam: 'Boca Juniors', awayTeam: 'Bayern Munich', date: '26/06/2025', time: '18:00', venue: 'La Bombonera', status: 'scheduled' },

  // Grupo E
  { id: 'E1', homeTeam: 'Paris Saint-Germain', awayTeam: 'Mamelodi Sundowns', date: '19/06/2025', time: '15:00', venue: 'Parc des Princes', status: 'scheduled' },
  { id: 'E2', homeTeam: 'Atlético Nacional', awayTeam: 'Al Ain', date: '19/06/2025', time: '18:00', venue: 'Atanasio Girardot', status: 'scheduled' },
  { id: 'E3', homeTeam: 'Paris Saint-Germain', awayTeam: 'Al Ain', date: '23/06/2025', time: '15:00', venue: 'Parc des Princes', status: 'scheduled' },
  { id: 'E4', homeTeam: 'Mamelodi Sundowns', awayTeam: 'Atlético Nacional', date: '23/06/2025', time: '18:00', venue: 'Atanasio Girardot', status: 'scheduled' },
  { id: 'E5', homeTeam: 'Al Ain', awayTeam: 'Mamelodi Sundowns', date: '27/06/2025', time: '15:00', venue: 'Parc des Princes', status: 'scheduled' },
  { id: 'E6', homeTeam: 'Atlético Nacional', awayTeam: 'Paris Saint-Germain', date: '27/06/2025', time: '18:00', venue: 'Atanasio Girardot', status: 'scheduled' },

  // Grupo F
  { id: 'F1', homeTeam: 'Juventus', awayTeam: 'Esperance', date: '20/06/2025', time: '15:00', venue: 'Juventus Stadium', status: 'scheduled' },
  { id: 'F2', homeTeam: 'São Paulo', awayTeam: 'Al Jazira', date: '20/06/2025', time: '18:00', venue: 'Morumbi', status: 'scheduled' },
  { id: 'F3', homeTeam: 'Juventus', awayTeam: 'Al Jazira', date: '24/06/2025', time: '15:00', venue: 'Juventus Stadium', status: 'scheduled' },
  { id: 'F4', homeTeam: 'Esperance', awayTeam: 'São Paulo', date: '24/06/2025', time: '18:00', venue: 'Morumbi', status: 'scheduled' },
  { id: 'F5', homeTeam: 'Al Jazira', awayTeam: 'Esperance', date: '28/06/2025', time: '15:00', venue: 'Juventus Stadium', status: 'scheduled' },
  { id: 'F6', homeTeam: 'São Paulo', awayTeam: 'Juventus', date: '28/06/2025', time: '18:00', venue: 'Morumbi', status: 'scheduled' },

  // Grupo G
  { id: 'G1', homeTeam: 'Manchester United', awayTeam: 'Pachuca', date: '21/06/2025', time: '15:00', venue: 'Old Trafford', status: 'scheduled' },
  { id: 'G2', homeTeam: 'Botafogo', awayTeam: 'Ulsan Hyundai', date: '21/06/2025', time: '18:00', venue: 'Nilton Santos', status: 'scheduled' },
  { id: 'G3', homeTeam: 'Manchester United', awayTeam: 'Ulsan Hyundai', date: '25/06/2025', time: '15:00', venue: 'Old Trafford', status: 'scheduled' },
  { id: 'G4', homeTeam: 'Pachuca', awayTeam: 'Botafogo', date: '25/06/2025', time: '18:00', venue: 'Nilton Santos', status: 'scheduled' },
  { id: 'G5', homeTeam: 'Ulsan Hyundai', awayTeam: 'Pachuca', date: '29/06/2025', time: '15:00', venue: 'Old Trafford', status: 'scheduled' },
  { id: 'G6', homeTeam: 'Botafogo', awayTeam: 'Manchester United', date: '29/06/2025', time: '18:00', venue: 'Nilton Santos', status: 'scheduled' },

  // Grupo H
  { id: 'H1', homeTeam: 'Barcelona', awayTeam: 'Raja Casablanca', date: '22/06/2025', time: '15:00', venue: 'Camp Nou', status: 'scheduled' },
  { id: 'H2', homeTeam: 'Racing', awayTeam: 'Inter Miami', date: '22/06/2025', time: '18:00', venue: 'El Cilindro', status: 'scheduled' },
  { id: 'H3', homeTeam: 'Barcelona', awayTeam: 'Inter Miami', date: '26/06/2025', time: '15:00', venue: 'Camp Nou', status: 'scheduled' },
  { id: 'H4', homeTeam: 'Raja Casablanca', awayTeam: 'Racing', date: '26/06/2025', time: '18:00', venue: 'El Cilindro', status: 'scheduled' },
  { id: 'H5', homeTeam: 'Inter Miami', awayTeam: 'Raja Casablanca', date: '30/06/2025', time: '15:00', venue: 'Camp Nou', status: 'scheduled' },
  { id: 'H6', homeTeam: 'Racing', awayTeam: 'Barcelona', date: '30/06/2025', time: '18:00', venue: 'El Cilindro', status: 'scheduled' }
];
