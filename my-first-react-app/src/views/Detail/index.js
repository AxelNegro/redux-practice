import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from "../../redux/actions/movies";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";
const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { success, error, isFetching, isLoading, details } = useSelector((state) => state.MoviesReducer);

    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);

    return (
        <div className="flex flex-row px-16 h-screen items-center justify-center">
            <LeftContainer url = {details?.image}/>
            <RightContainer
            title={details?.title}
            year={details?.release_year}
            rating={details?.rating}
            synopsis={details?.description}
            genres={details?.genres}
            cast = {details?.actors?.slice(0,20) ?? []}
            />
        
        </div>
    );
};

export default Detail;