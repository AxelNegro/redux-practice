const List = ({ data }) => {
    return data?.map(movie => (
        <div key={movie.imdbID}>
            <div>
                <img src={movie.Poster} alt={movie.Title} ></img>
            </div>
            <div>
                <p>{movie.Title}</p>
                <div>
                    <button>
                        Ver mas
                    </button>
                </div>
            </div>
        </div>
    ))
}

export default List