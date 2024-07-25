import NotificationItem from "../../components/alarm/NotificationItem";
import Navigation from "../../components/common/Navigation/Navigation";

const data = [
  { petName: "나비", iteration: 1 },

];

function AlarmPage() {
  return (
    <>
      <section className='flex flex-col justify-center bg-white'>
        <h1 className='text-black font-bold text-3xl text-start pt-7 pl-7'>
          알림
        </h1>
        <div className='flex flex-col px-5 mt-8'>
          {data.map((data, index) => (
            <NotificationItem
              key={index}
              petName={data.petName}
              iteration={data.iteration}
            />
          ))}
        </div>
      </section>
    </>
  );
}

export default AlarmPage;
