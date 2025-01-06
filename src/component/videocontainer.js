import React, { useEffect, useState } from 'react';
import { YoutubeVideoApi } from '../utils/constant';
import Videocard , {AdVideoCard} from './videocard';
import { Link } from 'react-router-dom';

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
    <div className='flex flex-wrap'>
      {/* Render only if videos[0] exists
      {videos.length > 0 ? (
        <Videocard info={videos[0]} />
      ) : (
        <div>Loading videos...</div> // Fallback while loading
      )} */}
     {videos[0] && <AdVideoCard info={videos[0]} />}
      {videos.map((video) => (
       <Link  key={video.id}  to={"/watch?v=" + video.id}>
       <Videocard info={video} />
       </Link>
      ))}
    </div>
  );
};

export default Videocontainer;