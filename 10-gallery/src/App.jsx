import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";

const App = () => {
  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=5`
    );
    setUserData(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-white p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Masonry Gallery</h1>

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 w-full">
          {userData.length > 0 ? (
            userData.map((elem, idx) => (
              <Card elem={elem} key={idx}/>
            ))
          ) : (
            <h3 className="text-gray-400 text-center">Loading...</h3>
          )}
        </div>
      </div>
      <div className="bg-gray-900 flex justify-center pb-5">
        <button
          onClick={()=>{
            if (index>1) {
              setIndex(index-1)
            }
          }}
          className="hover:bg-yellow-400 hover:text-gray-500 transition-all duration-300 text-yellow-400 text-6xl cursor-pointer bg-gray-500 px-3 py-2 rounded-lg font-extrabold mr-5"
        >
          {" "}
          &lt; Prev
        </button>
        <div className="flex items-center">
        <p className=" text-6xl font-bold text-red-500">Page : {index}</p>
        </div>
        <button 
          onClick={()=>{
            setIndex(index+1)
            console.log('Button clicked')
          }}
          className="hover:bg-yellow-400 hover:text-gray-500 transition-all duration-300 text-yellow-400 text-6xl cursor-pointer bg-gray-500 px-3 py-2 rounded-lg font-extrabold ml-5"
        >
          {" "}
          Next &gt;
        </button>
        
      </div>
    </>
  );
};

export default App;
