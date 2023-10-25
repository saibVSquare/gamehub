// @ts-ignore
import React from "react";
import {SimpleGrid, Text} from "@chakra-ui/react";
// @ts-ignore
import useGames from "../hooks/useGames.ts";
// @ts-ignore
import GameCard from "./GameCard.tsx";
// @ts-ignore
import GameCardSkeleton from "./GameCardSkeleton.tsx";

const GameGrid = () => {
    const {games, error, isLoading} = useGames();
    const skeletons = [1, 2, 3, 5, 6];

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 4, xl: 5}} padding='10px' spacing={2}>
                {isLoading && skeletons.map(skeleton => <GameCardSkeleton key={skeleton}/>)}
                {games.map((game) => <GameCard key={game.id} game={game}/>)}
            </SimpleGrid>
        </>
    );
};
export default GameGrid;
