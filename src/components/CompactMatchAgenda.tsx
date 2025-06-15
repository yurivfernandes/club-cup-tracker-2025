
import React from "react";
import { Match } from "@/hooks/useFifaData";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface CompactMatchAgendaProps {
  title: string;
  matches: Match[];
  showDate?: boolean;
}

const getTimeOrScore = (match: Match) => {
  if (match.status === "finished" && match.result) {
    return (
      <span className="font-bold text-green-700 text-lg">
        {match.result.home} x {match.result.away}
      </span>
    );
  }
  return (
    <span className="font-semibold text-gray-900 text-lg font-mono">
      {match.time.slice(0,5)}
    </span>
  );
};

export const CompactMatchAgenda: React.FC<CompactMatchAgendaProps> = ({
  title,
  matches,
  showDate = false,
}) => (
  <div className="rounded-xl bg-white shadow p-5 mb-6 max-w-lg mx-auto">
    <h3 className="text-lg font-bold text-green-700 mb-5">{title}</h3>
    {matches.length === 0 ? (
      <div className="text-gray-400 text-center py-12">Sem jogos</div>
    ) : (
      <ul className="divide-y divide-gray-200">
        {matches.map((match) => (
          <li key={match.id} className="flex items-center justify-between gap-2 py-4">
            <div className="flex items-center gap-2 flex-1 min-w-0">
              <span className="w-10 text-right font-bold text-gray-700 truncate">{match.homeTeam.slice(0,3).toUpperCase()}</span>
              <Avatar className="h-8 w-8 mx-1">
                <AvatarImage
                  src={`/logos/${match.homeTeam.toLowerCase().replace(/[\s.]/g, "_")}.png`}
                  alt=""
                />
                <AvatarFallback>
                  {match.homeTeam.slice(0,3).toUpperCase()}
                </AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col items-center min-w-[64px] px-1">
              {getTimeOrScore(match)}
              {showDate && (
                <span className="text-xs text-gray-500 mt-0.5">{match.date}</span>
              )}
              <span className="text-[11px] text-gray-500">Copa do Mundo de Clubes da FIFA™</span>
            </div>
            <div className="flex items-center gap-2 flex-1 justify-end min-w-0">
              <Avatar className="h-8 w-8 mx-1">
                <AvatarImage
                  src={`/logos/${match.awayTeam.toLowerCase().replace(/[\s.]/g, "_")}.png`}
                  alt=""
                />
                <AvatarFallback>
                  {match.awayTeam.slice(0,3).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <span className="w-10 text-left font-bold text-gray-700 truncate">{match.awayTeam.slice(0,3).toUpperCase()}</span>
            </div>
          </li>
        ))}
      </ul>
    )}
    {/* Optional "Mais jogos" link for today/this week */}
  </div>
);

export default CompactMatchAgenda;
