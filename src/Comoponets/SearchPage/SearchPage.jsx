import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Gifstore } from '../Context/GifContext';
import FilterGifs from '../GifPage/FilterGifs';
import Gif from '../GifPage/Gif';

const SearchPage = () => {
const [searchReslut , setsearchReslut] = useState([]);

const {gif ,filter, gf} = Gifstore()
 const {query}  =  useParams()

 const fetchSearchResluts   = async ()=>{
  const {data} = await gf.search(query,{
    sort: 'relevent',
    lang: 'en',
    type: filter,
    limit: 20,
  })
  setsearchReslut(data)
 }

 useEffect(()=>{
fetchSearchResluts()
 },[filter])
  return (
    <div className='my-4'>
<h2 className='text-5xl pb-3 font-extrabold'>{query}</h2>

<FilterGifs alignLeft={true}/>
{
  searchReslut?.length>0 ? (
<div className='columns-2 md:columns-3 lg:columns-4 gap-2'>
  {searchReslut.map((gif)=>{
    return(
      <Gif gif={gif} key={gif.id}/>
    )
  })}
</div>

  ): <span>No GIFs found {query}.Try searching for stickers instead </span>
}
    </div>
  )
}

export default SearchPage