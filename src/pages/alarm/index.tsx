import NotificationItem from "../../components/alarm/NotificationItem";
import Navigation from "../../components/common/Navigation/Navigation";

const data = [
  { petName: "꼬미", iteration: 2 },
  { petName: "둘리", iteration: 3 },
  { petName: "하니", iteration: 1 },
  { petName: "보리", iteration: 4 },
  { petName: "초코", iteration: 5 },
  { petName: "사랑이", iteration: 2 },
  { petName: "구름이", iteration: 6 },
  { petName: "별이", iteration: 3 },
  { petName: "눈송이", iteration: 7 },
  { petName: "바다", iteration: 4 },
  { petName: "모래", iteration: 8 },
  { petName: "햇님이", iteration: 1 },
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
      <Navigation />
    </>
  );
}

export default AlarmPage;
