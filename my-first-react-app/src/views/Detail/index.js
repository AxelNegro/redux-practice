import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import Loading from "../../components/Loading";
import { fetchMovieDetails } from "../../redux/actions/movies";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { error, isFetching, isLoading, details } = useSelector((state) => state.MoviesReducerSlice);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    const renderContent = () => {
        if(isLoading || isFetching)
            return <Loading message="Getting movies information..."/>;
        else if(error)
            return <p>There's an error getting the movies information.</p>

        return (
            <>
                <LeftContainer url = {details?.image}/>
                <RightContainer
                title={details?.title}
                year={details?.release_year}
                rating={details?.rating}
                synopsis={details?.description}
                genres={details?.genres}
                cast = {details?.actors?.slice(0,20) ?? []}
                />
            </>
        );
    }

    return (<div className="flex flex-row px-16 h-screen items-center justify-center">
        {renderContent()}
        </div>);
};

export default Detail;