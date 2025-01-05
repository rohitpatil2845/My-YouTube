
import Sidebar from './sidebar';
import { Outlet } from 'react-router-dom';

const body = () => {
  
  return (
    <div className='flex'>
        <Sidebar />
        <Outlet />
    </div>
  )
}

export default body;