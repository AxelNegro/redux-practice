import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from "../../redux/actions/movies";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const { success, error, isFetching, isLoading, details } = useSelector((state) => state.MoviesReducer);
    console.log(details)
    useEffect(() => {
        dispatch(fetchMovieDetails(id));
    }, [dispatch, id]);
    return (<div>Detail</div>);
};

export default Detail;