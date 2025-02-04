import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RiSearchLine } from "react-icons/ri";
import { HiMiniXMark } from "react-icons/hi2";

const GifSearch = () => {
  const [query, setquery] = useState("");
  const navigate = useNavigate();

  const SearchGifs = async () => {
    if (query.trim() === "") {
      return;
    }
    navigate(`/search/${query}`);
  };
  return (
    <div className="flex relative">
      <input
        type="text"
        value={query}
        onChange={(e) => setquery(e.target.value)}
        placeholder="search all the Gifs and stickers"
        className="w-full pl-4 pr-14 py-5 text-xl text-black rounded-tl rounded-bl border border-gray-300 outline-none"
      />

      {query && (
        <button
          onClick={() => setquery("")}
          className="absolute bg-gray-300 opacity-90 rounded-full right-20 mr-2 top-6"
        >
          <HiMiniXMark size={22} />
        </button>
      )}

      <button
        onClick={SearchGifs}
        className="bg-gradient-to-tr from-pink-600 to-pink-400 text-white px-4 py-2 rounded"
      >
        <RiSearchLine size={35} className="-scale-x-100" />
      </button>
    </div>
  );
};

export default GifSearch;
