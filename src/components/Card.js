import { useNavigate } from "react-router-dom";

function Card(props) {
  const item = props.item;
  const navigate = useNavigate();
  const productSpecificHandler = (id) => {
    navigate(`/products/${id - 1}`);
  };
  return (
    <div className="flex flex-col items-center justify-between hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10  ml-5 rounded-xl outline">
      <div>
        <h1 className="text-gray-700 font-semibold text-lg text-center  mt-1">
          {item.category}
        </h1>
        <p className="text-gray-700 font-semibold text-lg text-center   mt-1">
          {item.title}
        </p>
      </div>

      <p className=" w-full mx-auto lg:w-40 text-gray-400 font-normal  lg:text-[10px] text-center">
        {item.description.length > 100
          ? item.description.substr(0, 100) + "..."
          : item.description}
      </p>

      <div className="h-[180px]">
        <img src={item.image} alt={item.title} className="h-full w-full " />
      </div>
      <div className="flex gap-4">
        <div className="flex gap-3">
          <p>Rating</p>
          <h4>{item.rating.rate}</h4>
        </div>

        <div className="flex gap-3">
          <p>Count</p>
          <h4>{item.rating.count}</h4>
        </div>
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${item.price}</p>
        </div>

        <button
          className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
        text-[12px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ease-in"
          onClick={() => productSpecificHandler(item.id)}
        >
          More Details
        </button>
      </div>
    </div>
  );
}

export default Card;
