// @ts-ignore
import React, {useEffect, useState} from "react";
// @ts-ignore
import apiClient from "../services/api-client.ts";
import {Text} from "@chakra-ui/react";

interface Game {
    id: number;
    name: string;
}

interface FetchGamesResponse {
    count: number;
    result: Game[];
}

const GameGrid = () => {
    const [games, setGame] = useState<Game[]>([]);
    const [error, setError] = useState("");

    useEffect(() => {
        apiClient
            .get<FetchGamesResponse>("/games")
            .then((res) => setGame(res.data.results))
            .catch((err) => setError(err.message));
    });

    return (
        <>
            {error && <Text>{error}</Text>}
            <ul>
                {games.map((game) => <li key={game.id}>{game.name}</li>)}
            </ul>
        </>
    );
};
export default GameGrid;