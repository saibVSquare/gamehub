// @ts-ignore
import useGenres from "../hooks/useGenres.ts";
import {Image, List, ListItem, HStack, Text, Button} from "@chakra-ui/react";
// @ts-ignore
import GenreListSkeleton from "./GenreListSkeleton.tsx";

const GenreList = () => {
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
                            console.log(genre)
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
