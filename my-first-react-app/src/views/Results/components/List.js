import ListItem from "./ListItem"

const List = ({ data }) => {
    return data?.map(movie => <ListItem key={movie.imdbID}{...movie}/>);
}

export default List