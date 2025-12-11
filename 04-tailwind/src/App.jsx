import { useState } from "react";

function App() {
  const btnClicked = () => {
    console.log("Button Clicked");
  };

  return (
    <>
      <div className="bg-gray-900 text-white">
        <h1>Hello, Shubham</h1>
        <input
          className="bg-gray-800 text-white border-white border"
          onKeyDownCapture ={(e) => {
            console.log(e.target.value,"A key is pressed");
          }}
          type="text"
        />
        <button
          className="border-2 p-1 bg-blue-800 text-white cursor-pointer"
          onClick={btnClicked}
        >
          Change User
        </button>
      </div>
    </>
  );
}

export default App;
