import {Grid, GridItem, Show} from "@chakra-ui/react";
// @ts-ignore
import NavBar from "./components/NavBar.tsx";
// @ts-ignore
import GameGrid from "./components/GameGrid.tsx";
// @ts-ignore
import GenreList from "./components/GenreList.tsx";
// @ts-ignore
import {Genre} from "./hooks/useGenres.ts";
import {useState} from "react";

function App() {
    const [selectedGenre, setSelectedGenre] = useState<Genre>(null);
    return (
        <Grid
            templateAreas={{
                base: `"nav" "main"`,
                lg: `"nav nav" "aside main"`,
            }}
            templateColumns={{
                base: '1fr',
                lg: '200px 1fr',
            }}
        >
            <GridItem area={"nav"}>
                <NavBar/>
            </GridItem>
            <Show above="lg">
                <GridItem area="aside" paddingX={5}>
                    <GenreList selectedGenre={selectedGenre} onSelectGenre={(genre: Genre) => setSelectedGenre(genre)}/>
                </GridItem>
            </Show>
            <GridItem area="main">
                <GameGrid selectedGenre={selectedGenre}/>
            </GridItem>
        </Grid>
    );
}

export default App;
