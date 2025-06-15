
import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export interface Team {
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

export interface Group {
  name: string;
  teams: Team[];
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

export interface FifaData {
  groups: Group[];
  matches: Match[];
  lastUpdated: string;
}

export const useFifaData = () => {
  return useQuery({
    queryKey: ['fifa-club-world-cup-data'],
    queryFn: async (): Promise<FifaData> => {
      console.log('Fetching FIFA Club World Cup data...');
      
      const { data, error } = await supabase.functions.invoke('fifa-club-world-cup/all-data');
      
      if (error) {
        console.error('Error fetching FIFA data:', error);
        throw new Error(`Failed to fetch FIFA data: ${error.message}`);
      }
      
      if (!data) {
        throw new Error('No data received from FIFA API');
      }
      
      console.log('FIFA data fetched successfully:', data);
      return data;
    },
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: false,
  });
};
