import { useNavigate, useParams } from 'react-router-dom';
import moviesImage from "../../assets/movie_theater.png";
import { useFetchMoviesQuery } from '../../redux/api/movies';
import Loading from './components/Loading';
import List from './components/List';

const Results = () => {
    const { title } = useParams();
    const { data: movies, isLoading, isFetching, isSuccess, error } = useFetchMoviesQuery(title, 1);
    const navigate = useNavigate();
    const handleListItemClick = (id) => {
        navigate(`/detail/${id}`);
    };

    const renderContent = () => {
        if(error)
            return (
            <div className='flex items-center justify-center h-full'>
                <p className='text-xl'>{error.error}</p>
            </div>
            );
        else if (isLoading || isFetching)
            return <Loading/>
        else if (isSuccess && movies?.Search)
            return <List data={ movies?.Search } onListItemClick={handleListItemClick} />
    };

    return (
    <div className='flex flex-row'>
        <div className='w-3/5 h-screen overflow-y-auto px-10'>
            {renderContent()}
        </div>
        <div className='w-2/5'>
            <img src={moviesImage} alt='Movies theater' className='w-full h-screen object-cover'/>
        </div>
    </div>);
} 

export default Results