import { useParams } from 'react-router-dom';
import moviesImage from "../../assets/movie_theater.png";
import { useFetchMoviesQuery } from '../../redux/api/movies';
import Loading from './components/Loading';

const Results = () => {
    const { title } = useParams();
    const { data, error, isLoading, isFetching } = useFetchMoviesQuery(title);

    return (
    <div className='flex flex-row'>
        <div className='w-3/5 h-screen overflow-y-auto px-10'>
            {isLoading && isFetching && <Loading/>}
        </div>
        <div className='w-2/5'>
            <img src={moviesImage} alt='Movies theater' className='w-full h-screen object-cover'/>
        </div>
    </div>);
} 

export default Results