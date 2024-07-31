import NotificationItem from '../../components/alarm/NotificationItem';
import { useEffect, useState } from 'react';
import useAuthStore from '../../store/useAuthStore';

const data = [{ petName: '나비', iteration: 1 }];

function AlarmPage() {
  const [isLoading, setIsLoading] = useState(false);

  const { clearToken } = useAuthStore();

  const handleClick = () => {
    setIsLoading(true); 
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <section className='flex flex-col justify-center bg-white'>
        <div className='flex justify-between'>
          <h1 className='text-black font-bold text-3xl text-start pt-7 pl-7'>
            알림
          </h1>

          <div className='p-7 cursor-pointer' onClick={handleClick}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='20'
              viewBox='0 0 20 20'
            >
              <path
                fill='black'
                d='M15.65 4.35A8 8 0 1 0 17.4 13h-2.22a6 6 0 1 1-1-7.22L11 9h7V2z'
              />
            </svg>
          </div>
        </div>
        <div className='flex flex-col px-5 mt-8'>
          {isLoading ? (
            <div className='flex justify-center items-center'>
              <span className='loading loading-spinner loading-sm'></span>
            </div>
          ) : (
            data.map((data, index) => (
              <NotificationItem
                key={index}
                petName={data.petName}
                iteration={data.iteration}
              />
            ))
          )}
        </div>
        <button onClick={clearToken}>로그아웃</button>
      </section>
    </>
  );
}

export default AlarmPage;
