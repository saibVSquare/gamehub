import {List, ListItem, Skeleton, SkeletonText} from '@chakra-ui/react'

const GenreListSkeleton = () => {
    return (
        <List>
            <Skeleton width="20px" borderRadius={8} />
            <ListItem>
                <SkeletonText/>
            </ListItem>
        </List>
    )
}

export default GenreListSkeleton