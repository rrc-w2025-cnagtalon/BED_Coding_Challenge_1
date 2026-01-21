import express, { Express } from "express";
import { getPlayerCount } from "./services/playerService";

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

export default app;
