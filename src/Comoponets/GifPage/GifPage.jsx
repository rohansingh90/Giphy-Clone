import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Gifstore } from "../Context/GifContext";
import Gif from "./Gif";
import {
  HiMiniChevronDown,
  HiMiniChevronUp,
  HiMiniHeart,
} from "react-icons/hi2";
import Followon from "../Category/Followon";
import { HiOutlineExternalLink } from "react-icons/hi";
import { FaPaperPlane } from "react-icons/fa6";
import { IoCodeSharp } from "react-icons/io5";

const GifPage = () => {
  const contentType = ["gifs", "stickers", "texts"];
  const { type, slug } = useParams();
  const [gif, setgif] = useState({});
  const [realtedGifs, setrealtedGifs] = useState([]);
  const [readmore, setreadmore] = useState(false);
  const { gf, addtofav, favorites } = Gifstore();

  const fetchGif = async () => {
    const gifId = slug.split("-");
    const { data } = await gf.gif(gifId[gifId.length - 1]);
    const { data: related } = await gf.related(gifId[gifId.length - 1], {
      limit: 10,
    });

    setgif(data);
    setrealtedGifs(related);
  };

  useEffect(() => {
    if (!contentType.includes(type)) {
      throw new Error("Invalid Content Type");
    }
    fetchGif();
  }, []);

  const shareGif = () => {

  };

  const embedGif = () => {

  };
  return (
    <div className="grid grid-cols-4  my-10 gap-4 ">
      <div className="hidden sm:block">
        {gif?.user && (
          <>
            <div className="flex gap-1 ">
              <img
                src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-14"
              />

              <div className="px-2">
                <div className="font-bold ">{gif?.user?.display_name}</div>
                <div className="faded-text">@{gif?.user?.username}</div>
              </div>
            </div>
            {gif?.user?.description && (
              <p className="py-4 whitespace-pre-line text-sm text-gray-400">
                {!readmore
                  ? gif?.user?.description
                  : readmore?.gif?.user?.description.slice(0, 100)}

                <div
                  className="flex items-center faded-text cursor-pointer"
                  onClick={() => setreadmore(!readmore)}
                >
                  {readmore ? (
                    <>
                      Reda less <HiMiniChevronUp size={20} />
                    </>
                  ) : (
                    <>
                      Reda less <HiMiniChevronDown size={20} />
                    </>
                  )}
                </div>
              </p>
            )}
            <Followon />
          </>
        )}
        <div className="divider" />
        {gif?.source && (
          <div>
            <span className="faded-text">Source</span>

            <div className="flex items-center text-sm font-bold gap-1">
              <HiOutlineExternalLink size={25} />
              <a href={gif.source} target="_blank" className="truncate">
                {gif.source}
              </a>
            </div>
          </div>
        )}
      </div>
      <div className="col-span-4 sm:col-span-3">
        <div className="flex gap-6 ">
          <div className="w-full sm:w-3/4">
            <div className="faded-text truncate mb-2">{gif.title}</div>
            <Gif gif={gif} hover={false} />

            {/* mobile features */}
            <div className="flex  sm:hidden gap-1">
              <img
                src={gif?.user?.avatar_url}
                alt={gif?.user?.display_name}
                className="h-14"
              />
              <div className="px-2">
                <div className="font-bold ">{gif?.user?.display_name}</div>
                <div className="faded-text">@{gif?.user?.username}</div>
              </div>
              <button
                className="ml-auto"

                // onClick={shareGif}
              >
                <FaPaperPlane size={25} />
              </button>
            </div>
          </div>
          <div className="hidden sm:flex flex-col gap-5 mt-6 ">
            <button className="flex gap-6 items-center font-bold text-lg" onClick={() => addtofav(gif.id)}>
              <HiMiniHeart
                size={30}
                className={`${
                  favorites.includes(gif.id) ? "text-red-500" : ""
                }`}
              />
              Favorite
            </button>
            <button
              onClick={shareGif}
              className="flex gap-6 items-center font-bold text-lg"
            >
              <FaPaperPlane size={25} />
              share
            </button>
           
            <button
              className="flex gap-5 items-center font-bold text-lg"

              onClick={embedGif}
            >
              <IoCodeSharp size={25}/>
              Embed
            </button>
          </div>
        </div>
        <div>
          <span className="font-extrabold ">Realted GIFs</span>
          <div className="columns-2 md:columns-3 gap-2">
            {
              realtedGifs.slice(1).map((gif)=>(
                <Gif gif={gif} key={gif.id}/>
              ))
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default GifPage;
