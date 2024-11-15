import { useNavigate } from 'react-router-dom';

const ProgramCard = ({ scheme }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (scheme && scheme._id){
            navigate(`/scheme/${scheme._id}`);
        }
    };

    if (!scheme) {
        return null;
    } 

     return(
        <div className="p-6 hover:shadow-2xl hover:rounded-2xl cursor-pointer flex flex-row w-96 h-60 gap-x-6 border border-gray-200 rounded-md" onClick={handleClick}>
            <img src={scheme.image} alt={scheme.name} className="w-40 h-40 object-contain rounded self-center" />
            <div className="flex flex-col justify-between items-center my-8">
                <h2 className="text-lg font-bold mb-1">{scheme.name}</h2>
                <button className="mt-4 w-full md:w-40 bg-white text-black font-bold py-2 px-1 rounded border border-black hover:shadow-[4px_4px_0px_#F7A221] hover:scale-105 transition-transform duration-200">
                    Know More
                </button>
            </div>
        </div>
     );
};

export default ProgramCard;