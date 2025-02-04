import React, { useEffect } from "react";
import { Gifstore } from "../Context/GifContext";
import Gif from "../GifPage/Gif";
import FilterGifs from "../GifPage/FilterGifs";

const Home = () => {
  const { gf, gifs, setgifs, filter, setfilter, favorites } = Gifstore();

  const trendingGifs = async () => {
    const { data } = await gf.trending({
      limit: 20,
      type: filter,
      rating: "g",
    });
    setgifs(data)
  };

  useEffect(() => {
    trendingGifs();
  }, [filter]);

  return (
    <div>


{/* fillter gifs */}
<FilterGifs showTrending/>

      <div className="columms-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2">
        {gifs.map((gif) => {
          return <Gif  gif={gif} key={gif.tite}/>;
        })}
      </div>
    </div>
  );
};

export default Home;
