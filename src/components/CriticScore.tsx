import {Badge} from "@chakra-ui/react";

interface Props{
	score:number;
}

const CriticScore = ({score}:Props)=>{
	let color = score > 85 ? 'green' : score > 60 ? 'yellow' : '';
	return (
		<Badge color={color} fontSize='14px' borderRadius="4px" paddingX={2}>{score}</Badge>
		)
}

export default CriticScore;