import React, { useEffect } from 'react'
import PixabayContext from './PixabayContext'
import { useState } from 'react';

const PixabayState = (props) => {
    const [imageData,setImageData] = useState([]);
    const [query,setQuery] =useState('london');
    const api_key ="51542275-8892710737f267fb9a8e1dd98"
 useEffect(()=>{
    const fetchData = async()=>{
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&q=${query}&image_type=photo&pretty=true&per_page=50`);
        const data = await api.json();
        setImageData(data.hits)
        console.log(data)
    };
    fetchData();
 },[query]);
 const fetchImageByCategory =async (cat)=>{
        const api = await fetch(`https://pixabay.com/api/?key=${api_key}&category=${cat}&image_type=photo&pretty=true&per_page=50`);
        const data = await api.json();
        setImageData(data.hits)
        console.log(data)

 };

  return (
    <PixabayContext.Provider value={{
imageData,fetchImageByCategory,setQuery
    }}>
        {props.children}
      
    </PixabayContext.Provider>
  );
};

export default PixabayState
