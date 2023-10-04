import {HStack, Image} from "@chakra-ui/react";
// @ts-ignore
import logo from '../assets/logo.webp';
// @ts-ignore
import ColorModeSwitch from "./ColorModeSwitch.tsx";

const NavBar = () => {
    return (
        <HStack justifyContent={'space-between'} padding='10px'>
            <Image src={logo} boxSize='50px'></Image>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default NavBar;
