import express, { Express } from "express";
import { getPlayerCount, getPlayerWithId } from "./services/playerService";


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

app.get("/api/v1/players/:id", (req, res) => {
    const playerID = parseInt(req.params.id);
    const player = getPlayerWithId(playerID);
    
    if (player) {
        res.json(player);
    } else {
        res.status(404).json({
            message: `Cannot find player ${playerID}`
        });
    }
});

export default app;
