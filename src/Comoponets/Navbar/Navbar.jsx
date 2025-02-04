import React, { useContext, useEffect, useState } from "react";
import logo from "/public/logo.png";
import { HiDotsVertical } from "react-icons/hi";
import { GiHamburgerMenu } from "react-icons/gi";
import { Gifstore } from "../Context/GifContext";
import { Link } from "react-router-dom";
import GifSearch from "../GifPage/GifSearch";
const Navbar = () => {
  const [showCateorgy, setshowCateorgy] = useState(false);
  const [categories, setCategories] = useState([]);

  const { gf, gifs, setgifs, filter, setfilter, favorites } = Gifstore();
  const fetchGifscategoria = async () => {
    const { data } = await gf.categories();
    setCategories(data);
  };

  useEffect(() => {
    fetchGifscategoria();
  }, []);
  return (
    <div className="realtive">
      <div className=" flex gap-4  justify-between items-center realtive p-3">
  <Link to={'/'}><div className="flex gap-2 ">
          <img src={logo} alt="logo" className="w-10 " />
          <h1 className="text-5xl font-bold tracking-tight cursor-pointer text-white">
            GIPHY
          </h1>
        </div>
        </Link>      

        {categories.slice(0, 5).map((category) => (
          <Link key={category.name} to={`/category/${category?.name_encoded}`}>
            <div className="hidden sm:flex text-center px-4 py-1 hover:gradient border-b-4 text-white">
              {category.name}
            </div>
          </Link>
        ))}

        <button onClick={() => setshowCateorgy(!showCateorgy)}>
          <HiDotsVertical
            size={30}
            className={`py-0.5 text-white  ${
              showCateorgy ? "gradient" : " "
            } border-b-4 hidden hover:gradient lg:block`}
          />
        </button>

     {
      favorites.length>0 &&
   <Link to={'/favorites'}>
      <div className="h-9 bg-gray-700 pt-1.5 px-6 cursor-pointer rounded text-white">
          Favorite GIFs
        </div>
        </Link>   
}
        <button>
          <GiHamburgerMenu
            size={30}
            className="text-sky-400 bloack lg:hidden"
          />
        </button>
      </div>
      {showCateorgy && (
        <div className="absolute right-0 top-20 px-10 z-20 pt-6 pb-9 w-full gradient font-bold text-white">
          <span className="text-3xl font-extrabold">Categories</span>
          <hr className="bg-gray-100 opacity-50 my-5"/>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
            {
              categories?.map((categories)=>{
                return(
<Link className="font-bold"
                  key={categories.name}
                  to={`/category/${categories.name_encoded}`}
                  >{categories.name} </Link>
                )
              })
            }
          </div>
        </div>
      )}


      {/* search bar */}

      <GifSearch/>
    </div>
  );
};

export default Navbar;

