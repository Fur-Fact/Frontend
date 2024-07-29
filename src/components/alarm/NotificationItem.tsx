import { useNavigate } from "react-router-dom";
// import Alarm_Filled from "../../assets/Alarm_Filled.png";
import Alarm_Focus from '../../assets/Alarm_Focus.png'

interface NotificationItemProps {
  petName: string;
  iteration: number;
}

function NotificationItem({ petName, iteration }: NotificationItemProps) {
  const navigate = useNavigate();

  return (
    <div
      className='flex w-full justify-start items-center gap-3 py-4'
      onClick={() => navigate('/result/1')}
    >
      <div className='flex justify-center items-center w-7'>
        <img src={Alarm_Focus} alt='' className='w-6' />
      </div>
      <div className='flex flex-col w-full max-w-[305px] items-start justify-center'>
        <span className='w-full text-start text-black text-[13px] font-bold overflow-hidden whitespace-nowrap text-ellipsis'>
          {petName}의 {iteration}회차 검사에 따른 수의사 코멘트가 도착했어요!
        </span>
        <span className='text-subTitle text-xs'>오늘</span>
      </div>
    </div>
  );
}

export default NotificationItem;
