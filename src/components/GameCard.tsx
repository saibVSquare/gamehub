// @ts-ignore
import {Game} from "../hooks/useGames.ts";
import {Card, CardBody, Heading, Image, Text, HStack} from "@chakra-ui/react";
// @ts-ignore
import CriticScore from "./CriticScore.tsx";

interface Props {
    game: Game;
}

const GameCard = ({game}: Props) => {
    return (
        <Card width="17vw" borderRadius={10} overflow='hidden'>
            <Image src={game.background_image}/>
            <CardBody>
                <Heading fontSize='2xl'>
                    {game.name}
                </Heading>
                    {
                        game.parent_platforms.map(({platform}) => <Text>{platform.name}</Text>)
                    }
                <HStack justifyContent='right'>
                    <CriticScore score={game.metacritic} />
                </HStack>
            </CardBody>
        </Card>
    )
}

export default GameCard