
import React from "react";
import { Match } from "@/hooks/useFifaData";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

interface Props {
  matches: Match[];
  dateStr: string;
}

function formatTime(time: string) {
  return time.length === 5 ? time : time.slice(0,5); // "20:00" or "20:00:00"
}

export const MatchListOfDay: React.FC<Props> = ({ matches, dateStr }) => {
  if (matches.length === 0) {
    return (
      <div className="text-center text-gray-500">Não há jogos para o dia {dateStr}.</div>
    );
  }
  return (
    <div className="grid gap-2">
      {matches.map(match => (
        <div key={match.id} className="flex items-center justify-between bg-white border border-gray-200 rounded p-2 shadow-sm">
          <div className="flex items-center gap-2 flex-1">
            <Avatar className="h-7 w-7">
              <AvatarImage src={`/logos/${match.homeTeam.toLowerCase().replace(/[\s.]/g, "_")}.png`} alt="" />
              <AvatarFallback>{match.homeTeam.slice(0,3).toUpperCase()}</AvatarFallback>
            </Avatar>
            <span className="font-semibold">{match.homeTeam}</span>
            <span>-</span>
            <span className="font-semibold">{match.awayTeam}</span>
            <Avatar className="h-7 w-7">
              <AvatarImage src={`/logos/${match.awayTeam.toLowerCase().replace(/[\s.]/g, "_")}.png`} alt="" />
              <AvatarFallback>{match.awayTeam.slice(0,3).toUpperCase()}</AvatarFallback>
            </Avatar>
          </div>
          <div className="flex flex-col items-end min-w-16">
            {match.status === "finished" && match.result ? (
              <span className="font-bold text-green-700">{match.result.home} x {match.result.away}</span>
            ) : (
              <span className="font-mono text-gray-700">{formatTime(match.time)}</span>
            )}
            <span className="text-xs text-gray-400">{match.venue.split(",")[0]}</span>
          </div>
        </div>
      ))}
    </div>
  )
}
