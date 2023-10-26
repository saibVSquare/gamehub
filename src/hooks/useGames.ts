import {useEffect, useState} from "react";
// @ts-ignore
import apiClient from "../services/api-client.ts";
import {CanceledError} from "axios";
// @ts-ignore
import {Genre} from "./hooks/useGenres.ts";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
}

interface FetchGamesResponse {
    count: number;
    result: Game[];
}

const useGames = (selectedGenre: Genre | null) => {

    const [games, setGame] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);

    useEffect(() => {
        const controller = new AbortController();

        setLoading(true);
        apiClient
            .get<FetchGamesResponse>("/games", {params: {genres: selectedGenre?.id}})
            .then((res) => {
                setGame(res.data.results)
                setLoading(false);
            })
            .catch((err) => {
                    if (err instanceof CanceledError) return;
                    setError(err.message)
                    setLoading(false);
                }
            );
        return () => controller.abort();
    }, [selectedGenre]);

    return {games, error, isLoading};
}

export default useGames;