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

/**
 * Gets a list of all the players, as well a total count.
 * @returns {Object} An object that contains the total count, and an array of all players.
 */
export const getPlayerCount = () => {
    return {
        count: players.length,
        players: players
    };
};

/**
 * Finds a player by their ID.
 * @param id - The numeric ID of the player to search for.
 * @returns The specific player object, or undefined if not found.
 */
export const getPlayerWithId = (id: number): Player | undefined => {
    return players.find((player) => player.id === id);
};

//returns calculated performance rating
