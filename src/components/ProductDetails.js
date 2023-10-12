import React from "react";
import { useParams } from "react-router-dom";
import Spinner from "./Spinner";

import { useNavigate } from "react-router-dom";

function UserDetails({ fakeStore, loading }) {
  console.log(fakeStore);
  const navigate = useNavigate();
  const { productId } = useParams();
  console.log(fakeStore[productId]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : fakeStore.length > 0 ? (
        <div className=" w-11/12 lg:w-1/2 mx-auto flex flex-col items-center gap-3 my-6">
          <div>
            <h1 className="text-gray-700 font-semibold text-lg text-center  mt-1">
              {fakeStore[productId].category}
            </h1>
            <p className="text-gray-700 font-semibold text-lg text-center   mt-1">
              {fakeStore[productId].title}
            </p>
          </div>
          <div>
            <p className=" text-gray-600 font-normal text-[13px] text-center">
              {fakeStore[productId].description}
            </p>
          </div>
          <div className="h-[250px]">
            <img
              src={fakeStore[productId].image}
              alt={fakeStore[productId].id}
              className="h-full  "
            />
          </div>

          <div className="flex justify-between gap-12   w-full ">
            <div>
              <p className="text-green-600 font-semibold">
                ${fakeStore[productId].price}
              </p>
            </div>

            <div className="flex gap-4">
              <div className="flex gap-3">
                <p>Rating</p>
                <h4>{fakeStore[productId].rating.rate}</h4>
              </div>

              <div className="flex gap-3">
                <p>Count</p>
                <h4>{fakeStore[productId].rating.count}</h4>
              </div>
            </div>
          </div>
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold 
        text-[12px] p-1 px-3 uppercase 
        hover:bg-gray-700
        hover:text-white transition duration-300 ml-auto"
            onClick={() => navigate(-1)}
          >
            Go Back
          </button>
        </div>
      ) : (
        <div className="flex justify-center items-center text-black">
          <p>No Data Found</p>
        </div>
      )}
    </div>
  );
}

export default UserDetails;
