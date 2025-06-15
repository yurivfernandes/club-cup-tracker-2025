
import React from "react";
import { Match } from "@/hooks/useFifaData";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ArrowLeft, ArrowRight } from "lucide-react";

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
      {match.time.slice(0, 5)}
    </span>
  );
};

const PAGE_SIZE = 4;

export const CompactMatchAgenda: React.FC<CompactMatchAgendaProps> = ({
  title,
  matches,
  showDate = false,
}) => {
  const [page, setPage] = React.useState(0);

  const totalPages = Math.ceil(matches.length / PAGE_SIZE);

  const paginatedMatches = matches.slice(
    page * PAGE_SIZE,
    (page + 1) * PAGE_SIZE
  );

  const canGoPrev = page > 0;
  const canGoNext = page < totalPages - 1;

  // Reset pagination if matches change (novo dia, etc):
  React.useEffect(() => {
    setPage(0);
  }, [matches]);

  return (
    <div className="rounded-xl bg-white shadow p-5 mb-6 max-w-lg mx-auto min-h-[320px] flex flex-col">
      <h3 className="text-lg font-bold text-green-700 mb-5 flex items-center justify-between">
        {title}
        {totalPages > 1 && (
          <span className="flex gap-2 items-center">
            <button
              className={`rounded-full p-1 ${canGoPrev ? "bg-gray-100 hover:bg-gray-200" : "bg-gray-50 text-gray-300"} transition`}
              title="Anterior"
              onClick={() => setPage(p => (canGoPrev ? p - 1 : p))}
              disabled={!canGoPrev}
              aria-label="Página anterior"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <span className="text-xs text-gray-500">
              {page + 1}/{totalPages}
            </span>
            <button
              className={`rounded-full p-1 ${canGoNext ? "bg-gray-100 hover:bg-gray-200" : "bg-gray-50 text-gray-300"} transition`}
              title="Próxima"
              onClick={() => setPage(p => (canGoNext ? p + 1 : p))}
              disabled={!canGoNext}
              aria-label="Próxima página"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </span>
        )}
      </h3>
      {matches.length === 0 ? (
        <div className="text-gray-400 text-center py-12 flex-1">Sem jogos</div>
      ) : (
        <ul className="divide-y divide-gray-200 flex-1">
          {paginatedMatches.map((match) => (
            <li key={match.id} className="flex items-center justify-between gap-2 py-4">
              <div className="flex items-center gap-2 flex-1 min-w-0">
                <span className="w-10 text-right font-bold text-gray-700 truncate">
                  {match.homeTeam.slice(0, 3).toUpperCase()}
                </span>
                <Avatar className="h-8 w-8 mx-1">
                  <AvatarImage
                    src={`/logos/${match.homeTeam.toLowerCase().replace(/[\s.]/g, "_")}.png`}
                    alt={match.homeTeam}
                  />
                  <AvatarFallback>
                    {match.homeTeam.slice(0, 3).toUpperCase()}
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
                    alt={match.awayTeam}
                  />
                  <AvatarFallback>
                    {match.awayTeam.slice(0, 3).toUpperCase()}
                  </AvatarFallback>
                </Avatar>
                <span className="w-10 text-left font-bold text-gray-700 truncate">
                  {match.awayTeam.slice(0, 3).toUpperCase()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompactMatchAgenda;

