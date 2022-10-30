const ListItem = ({ imdbID, Title, Poster, onListItemClick }) => {
    const handleListItemClick = () => {
        onListItemClick(imdbID);
    }
    return (
        <div key={imdbID} className="flex flex-row w-full mt-16" style={{ minWidth: 650 }}>
            <div className="w-1/6">
                <img src={Poster} alt={Title} className="w-64"></img>
            </div>
            <div className="w-5/6 flex flex-col items-start py-1 px-4">
                <p className="font-lato text-3xl">{Title}</p>
                <div className="flex h-full items-end">
                    <button className="border-2 border-red-400 rounded-md 
                    w-48 h-10 text-xl text-red-400 hover:bg-red-400 hover:text-white"
                    onClick={handleListItemClick}>
                        Ver mas
                    </button>
                </div>
            </div>
        </div>
)};

export default ListItem;