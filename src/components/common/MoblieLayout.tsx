import { Outlet } from 'react-router-dom';

function MoblieLayout(){
  return(
    <div className='w-[390px] h-[844px] bg-[#FEFEFE] m-0 p-0'>
      <Outlet/>
    </div>
  )
}

export default MoblieLayout