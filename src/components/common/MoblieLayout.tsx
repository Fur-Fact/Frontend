import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation/Navigation';

function MoblieLayout() {
  const location = useLocation();
  const hideExtraElement = location.pathname === '/login' || location.pathname === '/signup';

  return (
    <div className='w-full h-full flex flex-row justify-center items-center relative'>
      <div className='w-[390px] h-[844px] bg-[#FEFEFE] m-0 p-0'>
        <Outlet />
      </div>
      {!hideExtraElement && (
        <div className='fixed bottom-0 w-full'>
          <Navigation />
        </div>
      )}
    </div>
  );
}

export default MoblieLayout;
