export const mockGroups = [
  {
    id: "A",
    teams: [
      {
        name: "Flamengo",
        confederation: "CONMEBOL",
        flag: "https://flagcdn.com/br.svg",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/16/CR_Flamengo_logo.svg"
      },
      {
        name: "Chelsea",
        confederation: "UEFA",
        flag: "https://flagcdn.com/gb.svg",
        logo: "https://upload.wikimedia.org/wikipedia/en/c/cc/Chelsea_FC.svg"
      },
    ]
  },
];

export const mockMatches = [
  {
    id: "A1",
    group: "A",
    homeTeam: "Flamengo",
    awayTeam: "Chelsea",
    date: "26/06",
    time: "18:00",
    timeUTC: "21:00:00",
    venue: "Maracanã",
    status: "upcoming",
    result: null,
  },
];
