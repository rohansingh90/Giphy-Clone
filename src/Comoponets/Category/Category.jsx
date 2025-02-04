import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Gifstore } from "../Context/GifContext";
import Gif from "../GifPage/Gif";
import Followon from "./Followon";

const Category = () => {
  const [results, setResults] = useState([]);
  const { name } = useParams();  // ✅ Correct param name
  const { gf } = Gifstore();

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const { data } = await gf.search(name, { limit: 20 });  // ✅ Correct API call
        setResults(data);
      } catch (error) {
        console.error("Error fetching category GIFs:", error);
      }
    };

    fetchResults();
  }, [name]);

  return (
    <div className="flex flex-col sm:flex-row gap-5 my-4">
      <div className="w-full sm:w-72">
        {results.length > 0 && <Gif gif={results[0]} hover={false} />}
        <span className="text-gray-400 text-sm pt-2">
          Don&apos;t tell it to me, GIF it to me
        </span>
        <Followon />

        <div className="divider"></div>
      </div>
      <div>
          <h2 className="text-4xl pb-1 font-extrabold capitalize">
            {name.split("-").join(" & ")} GIFs
          </h2>

          <h2 className="text-lg text-gray-400 pb-3 font-bold hover:text-gray-50 cursor-pointer">
            @{name}
          </h2>
          {
            results.length>0 && (
              <div className="columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
                {
                  results.slice(1).map((gif)=>(
                    <Gif gif={gif} key={gif.id}/>
                  ))
                }
              </div>
            )
          }
        </div>
    </div>
  );
};

export default Category;
