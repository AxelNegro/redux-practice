import MovieChairs from '../../assets/movie_chairs.png';

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleInputChange = ({ target: {value}}) => {
        setSearch(value);
    }

    const handleCleanClick = () => {
        setSearch('');
    }

    const handleSearchClick = () => {
        navigate(`/results/${search.trim()}`)
    }

    return (
    <div className='flex h-screen overflow-hidden'>
        <div className='w-2/5'>
            <img src={MovieChairs} alt="Movie chairs" className='w-full h-full object-cover'></img>
        </div>
        <div className='w-3/5 flex justify-center items-center flex-col px-10'>
            <h2 className='text-4xl font-bold font-lato'>Search your movie...</h2>
            <input className='bg-special-gray font-lato w-full my-3 h-9 p-1 border
            focus:outline-none focus:ring-2 focus:ring-gray-500 rounded'
            value={search}
            onChange={handleInputChange}/>
            <div className='flex w-full justify-between'>
                <button className='bg-red-500 hover:bg-red-600 text-white font-lato w-full
                shadow-lg h-9' style={{ width: "48%" }}
                onClick = {handleSearchClick}>
                    Search
                </button>
                <button className='bg-red-500 hover:bg-red-600 text-white font-lato w-full
                shadow-lg h-9' style={{ width: "48%" }}
                onClick = {handleCleanClick}>
                    Clear
                </button>
            </div>
        </div>
    </div>
    );
};

export default Home;