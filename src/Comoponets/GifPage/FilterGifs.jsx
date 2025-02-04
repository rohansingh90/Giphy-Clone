import React from "react";
import { Gifstore } from "../Context/GifContext";
import { IoMdTrendingUp } from "react-icons/io";

const FilterGifs = ({ alignLeft = false, showTrending = false }) => {
  const filters = [
    {
      title: "GIFs",
      name: "gifs",
      background:
        "bg-gradient-to-tr from-purple-500 via-purple-600 to-purple-500",
    },
    {
      title: "Stickers",
      name: "stickers",
      background: "bg-gradient-to-tr from-teal-500 via-teal-600 to-teal-500",
    },
    {
      title: "Text",
      name: "text",
      background: "bg-gradient-to-tr from-blue-500 via-blue-600 to-blue-500",
    },
  ];

  const { filter, setfilter } = Gifstore();

  return (
    <div
      className={`flex my-3 gap-3 ${alignLeft ? "" : "justify-end"}  ${
        showTrending
          ? "justify-between flex-col sm:flex-row sm:items-center"
          : ""
      }`}
    >
      {showTrending && (
        <span className="flex items-center gap-2">
          <IoMdTrendingUp size={25} className="text-teal-400" />
          <span className="font-semibold text-gray-400">Trending</span>
        </span>
      )}

      <div className="flex min-w-80 rounded-full bg-gray-800">
        {filters.map((f) => (
          <span
            key={f.title}
            onClick={() => setfilter(f.name)} // ✅ Corrected this line
            className={`${
              filter === f.name ? f.background + " text-white" : "text-gray-300"
            } font-semibold py-2 w-1/3 text-center rounded-full cursor-pointer`}
          >
            {f.title}
          </span>
        ))}
      </div>
    </div>
  );
};

export default FilterGifs;


















