import MovieImage from "./MovieImage"

const LeftContainer = ({url}) => {
    console.log(url);
    return <MovieImage url={url}/>;
}

export default LeftContainer;