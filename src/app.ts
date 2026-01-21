import express, { Express } from "express";
import { getPlayerCount, getPlayerWithId, calculatePlayerRating } from "./services/playerService";


// Initialize Express application
const app: Express = express();

/**
 * Gets all players with a total count
 * @returns {JSON} An object containing the player count and array of total players.
 */
app.get("/api/v1/players", (req, res) => {
    const data = getPlayerCount();
    res.json(data)
});

/**
 * Gets a player's details by their ID.
 * @returns 200 - Returns the player object.
 * @returns 404 - Returns an error message if it doesn't exist.
 */
app.get("/api/v1/players/:id", (req, res) => {
    //parses player ID from string to number
    const playerID = parseInt(req.params.id);
    //calls the function passing the ID as a param
    const player = getPlayerWithId(playerID);
    
    if (player) {
        res.json(player);
    } else {
        res.status(404).json({
            message: `Cannot find player ${playerID}`
        });
    }
});

/**
 * Gets the player's rating and stat summary.
 * @returns 200 - returns the player's stats and rating.
 * @returns 404 - Returns an error message if the player doesnt exist.
 */
app.get("/api/v1/players/:id/rating", (req, res) => {
    const playerID = parseInt(req.params.id);
    const player = getPlayerWithId(playerID);

    if (player) {
        const rating = calculatePlayerRating(player);

        res.json({
            playerId: player.id,
            playerName: player.name,
            playerRating: rating,
            totalGamesPlayed: player.wins + player.losses
        });
    } else {
        res.status(404).json({
            message: `Cannot find player ${playerID}`
        });
    }
});

/**
 * Represents the response structure for a health check endpoint
 */
interface HealthCheckResponse {
    status: string;
    uptime: number;
    timestamp: string;
    version: string;
}

// Using the interface to type your response
app.get("/api/v1/health", (req, res) => {
    // Create a response object that matches our interface
    const healthData: HealthCheckResponse = {
        status: "OK",
        uptime: process.uptime(),
        timestamp: new Date().toISOString(),
        version: "1.0.0",
    };

    res.json(healthData);
});

export default app;
