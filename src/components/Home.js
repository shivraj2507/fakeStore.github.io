import React from "react";
import Card from "./Card";
import Spinner from "./Spinner";

const Home = ({ fakeStore, loading }) => {
  console.log(fakeStore);
  return (
    <div
      className="w-11/12 max-w-[1200px] 
      mx-auto  "
    >
      {loading ? (
        <Spinner />
      ) : (
        <div className="grid  xs:gridcols-1 md:grid-cols-2 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh] my-auto  ">
          {fakeStore.map((item) => (
            <Card item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
