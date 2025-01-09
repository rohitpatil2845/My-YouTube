import React from "react";

const Videocard = ({ info }) => {
  // console.log(info);
  const { snippet , statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-2 m-2 w-72 shadow-lg ">
      <img className="rounded-xl" alt="Thumbnail" src={thumbnails.medium.url} />
      <ul>
        <li className="font-bold">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount/1000}k views</li>
      </ul>
    </div>
  );
};

export const AdVideoCard = ({info}) => {
  return(
    <div className="p-1 m-1 border border-red-900">
    <Videocard  info={info}/>
    </div>
  );
};

export default Videocard;