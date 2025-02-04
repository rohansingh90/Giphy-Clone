import { GiphyFetch } from "@giphy/js-fetch-api";
import {  createContext, useContext, useEffect, useState } from "react";


const GifContext = createContext()

const GifProvider = ({children})=>{
const [gifs , setgifs] = useState([]);
const [filter , setfilter] = useState('gifs');
const [favorites , setfavorites] = useState([]);

const addtofav = (id)=>{
    if(favorites.includes(id)){
        const  updatedfavorites = favorites.filter((itemid)=>itemid !== id)
        localStorage.setItem("favoriteGIFs",JSON.stringify(updatedfavorites));
        setfavorites(updatedfavorites)
    } else{
        const updatedfavorites = [...favorites]
        updatedfavorites.push(id)
        localStorage.setItem("favoriteGIFs",JSON.stringify(updatedfavorites));
        setfavorites(updatedfavorites)
    }
}
useEffect(()=>{
const favorites = JSON.parse(localStorage.getItem('favoriteGIFs')) || [];
setfavorites(favorites)
},[])

    const gf = new GiphyFetch(import.meta.env.VITE_GIPHY_KEY)

return <GifContext.Provider value={{gf,gifs,setgifs,filter,setfilter,favorites , addtofav}}>
    {children}
</GifContext.Provider>
}
export const Gifstore = ()=>{
    return useContext(GifContext)
}

export default GifProvider;