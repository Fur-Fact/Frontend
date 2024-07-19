import { Outlet } from 'react-router-dom';
import logo from '../../assets/logo.png'; 

function PCLayout() {
  return (
    <div className='flex w-screen h-screen bg-gray-100'>
      <div className='flex w-full h-full bg-blue-100 rounded-lg'>
        <div className='flex flex-col w-[13rem] bg-primary items-center rounded-l-lg'>
          <div
            className='w-[11.095rem] h-[5.13406rem] mt-16'
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: 'contain',
            }}
          />
          <p className='mt-[0.6rem] text-xs text-white'>
            반려 동물 모발을 이용한 생체 정보 분석
          </p>
        </div>
        {/* 우측 화면단 */}
        <div className='flex flex-shrink flex-col flex-grow'>
          <div className='flex flex-row items-center justify-between px-5 pt-4 bg-white w-full h-28 rounded-tr-lg'>
            <div className='text-lg font-medium'>
              안녕하세요, 홍길동 수의사님!
            </div>
            <div>
              <button className='bg-primary w-[11rem] h-[2.6rem] rounded-2xl text-white font-'>
                파일 등록하기
              </button>
            </div>
          </div>

          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default PCLayout;
