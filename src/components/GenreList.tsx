// @ts-ignore
import useGenres, {Genre} from "../hooks/useGenres.ts";
import {Image, List, ListItem, HStack, Text, Button} from "@chakra-ui/react";
// @ts-ignore
import GenreListSkeleton from "./GenreListSkeleton.tsx";

interface Props {
    onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({onSelectGenre}: Props) => {
    const {genres, error, isLoading} = useGenres();
    const skeletons = [1, 2, 3, 5, 6];

    if (error) return null;
    {
        isLoading && skeletons.map(skeleton => <GenreListSkeleton key={skeleton}/>)
    }

    return (
        <List>
            {genres.map((genre) => (
                <ListItem key={genre.id} paddingY='5px'>
                    <HStack>
                        <Image boxSize="25px" borderRadius={8} src={genre.image_background}/>
                        <Button fontSize="lg" variant='link' onClick={() => {
                            onSelectGenre(genre)
                        }}>
                            {genre.name}
                        </Button>
                    </HStack>
                </ListItem>
            ))}
        </List>
    );
};

export default GenreList;
