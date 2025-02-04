import React, { useEffect, useState } from 'react'
import { Gifstore } from '../Context/GifContext'
import Gif from '../GifPage/Gif'

const Favorites = () => {
  const {gf, favorites} = Gifstore()
  const [favoriteGIFs , setfavorites]  = useState([])
  
  const fetchfavgifs = async ()=>{
    const {data: gifs} =  await gf.gifs(favorites);
    setfavorites(gifs)
  }
  useEffect(()=>{
fetchfavgifs()
  },[])
  return (
    <div className='mt-2'>
      <span className='faded-text'>My Favorites</span>
      <div className='columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-2 mt-2'>

      
      {
        favoriteGIFs.map((gif)=>(
          <Gif gif={gif} key={gif.id}/>
        ))
      }
      </div>
    </div>
  )
}

export default Favorites