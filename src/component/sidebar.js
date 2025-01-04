import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {

 const isMenuOpen = useSelector ((store) => store.app.isMenuOpen);
 if(!isMenuOpen) return null;
  return (
    <div className='p-5 shadow-lg w-42'>

      <ul>
        <li>Home</li>
        <li>Shorts</li>
        <li>Videos</li>
        <li>Live</li>
      </ul>

      <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        <li>Music</li>
        <li>sports</li>
        <li>Gaming</li>
        <li>Movies</li>
      </ul>

      <h1 className='font-bold pt-5'>More From Youtube</h1>
      <ul>
        <li>Youtube Studio</li>
        <li>Youtube Shorts</li>
        <li>Youtube Music</li>
        <li>Youtube Kids</li>
      </ul>
    </div>

    
  )
}
export default Sidebar;