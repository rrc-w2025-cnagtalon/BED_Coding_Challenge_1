/**
 * Represents the structure for a Player object.
 */
interface Player {
    id: number;
    name: string;
    wins: number;
    losses: number;
    totalScore: number;
}

/**
 * Hardcoded Sample Data.
 */
const players: Player[] = [
    { id: 1, name: "ShadowStrike", wins: 15, losses: 5, totalScore: 28500 },
    { id: 2, name: "NoobMaster", wins: 3, losses: 12, totalScore: 4200 },
    { id: 3, name: "ProGamer", wins: 99, losses: 0, totalScore: 0 }
];


//returns player count
const playerCount = () => ({
    count: players.length,
    players: players
});

//returns single player by ID

//returns calculated performance rating
