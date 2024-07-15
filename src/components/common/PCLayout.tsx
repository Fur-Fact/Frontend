import { Outlet } from 'react-router-dom';

function PCLayout(){
  return(
    <div className='w-full h-full bg-slate-200 m-0 p-0'>
      <Outlet/>
    </div>
  )
}

export default PCLayout