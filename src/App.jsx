import React, { useState } from "react";
import data from "./assets/countryData.json";

function App() {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
    console.log(e.target.value);
  };

  const onSearch = (searchTerm) => {
    setValue(searchTerm);
    console.log("You pressed", searchTerm);
  };

  return (
    <>
      <div className="container mx-auto mt-8 flex flex-col items-center justify-center w-full h-full">
        <div className="bg-gray-200 p-6 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">Search</h1>
          <div className="flex items-center">
            <input
              type="text"
              placeholder="Type Something...."
              value={value}
              onChange={onChange}
              className="border-2 border-gray-400 p-2 mr-2 rounded-md"
            />
            <button
              onClick={() => onSearch(value)}
              className="bg-blue-500 text-white p-2 rounded-md"
            >
              Search
            </button>
          </div>
          <div className="mt-4">
            {data
              .filter((item) => {
                const searchTerm = value.toLowerCase();
                const name = item.name.toLowerCase();

                return (
                  searchTerm &&
                  name.startsWith(searchTerm) &&
                  name !== searchTerm
                );
              })
              .map((item, index) => (
                <div
                  onClick={() => onSearch(item.name)}
                  key={index}
                  className="cursor-pointer text-blue-500 hover:underline"
                >
                  {item.name}
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
