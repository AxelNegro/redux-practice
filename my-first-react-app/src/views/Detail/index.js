import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';
import { fetchMovieRatings } from "../../redux/actions/movies";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovieRatings(id));
    }, [dispatch, id]);
    return (<div>Detail</div>);
};

export default Detail;