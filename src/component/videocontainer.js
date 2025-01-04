import React, { useEffect, useState } from 'react'
import { YoutubeVideoApi } from '../utils/constant';
import Videocard from './videocard';

const Videocontainer = () => {
 const [videos, setVideos] = useState([]);



  useEffect(() => {
    getVideos();
  } ,[]);

  const getVideos = async () => { 
    const data = await fetch(YoutubeVideoApi);
    const json = await data.json();
   
    setVideos(json.items);
  };
  return (
    <div>
      <Videocard info={videos[0]} />
    </div>
  )
}

export default Videocontainer;