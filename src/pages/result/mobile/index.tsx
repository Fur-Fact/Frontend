import Navigation from "../../../components/common/Navigation/Navigation";
import ResultItem from "../../../components/result/ResultItem";

const data = [
  { element: "Ca", label: "칼슘", value: 440, color: "#40A5FD" },
  { element: "Mg", label: "마그네슘", value: 48, color: "#FDA640" },
  { element: "Na", label: "나트륨", value: 246, color: "#40A5FD" },
  { element: "K", label: "칼륨", value: 74, color: "#FDA640" },
  { element: "P", label: "인", value: 170, color: "#FD6240" },
  { element: "Zn", label: "아연", value: 187, color: "#FD6240" },
  { element: "Cu", label: "구리", value: 14.3, color: "#FD6240" },
  { element: "Se", label: "셀레늄", value: 0.93, color: "#FD6240" },
  { element: "Fe", label: "철", value: 11.4, color: "#FD6240" },
  { element: "Cr", label: "크롬", value: 0.1, color: "#40A5FD" },
  { element: "V", label: "바나듐", value: 0.015, color: "#40A5FD" },
  { element: "Mn", label: "망간", value: 0.42, color: "#40A5FD" },
  { element: "Mo", label: "몰리브덴", value: 0.04, color: "#FDA640" },
  { element: "Co", label: "코발트", value: 0.01, color: "#40A5FD" },
  { element: "S", label: "황", value: 58347, color: "#40A5FD" },
  { element: "B", label: "붕소", value: 0.37, color: "#40A5FD" },
  { element: "Li", label: "리튬", value: 0.03, color: "#40A5FD" },
  { element: "Sr", label: "스트론튬", value: 0.88, color: "#40A5FD" },
];

function ResultMobilePage() {
  return (
    <>
      <section className='flex flex-col justify-center bg-white px-5'>
        <div className='flex w-full justify-start items-end gap-2 mt-7 px-2'>
          <h1 className='text-black font-bold text-3xl'>결과 조회</h1>
          <div className='flex gap-1 items-center mb-1'>
            <span className='text-black text-sm'>접수일 : </span>
            <span className='text-black text-sm'>2024 06 25</span>
          </div>
        </div>
        <div className='flex flex-col w-full h-fit overflow-y-auto bg-[#F5F7FC] rounded-md mt-2 py-1 px-2'>
          {data.map((data, index) => (
            <ResultItem
              key={index}
              element={data.element}
              label={data.label}
              value={data.value}
              color={data.color}
            />
          ))}
        </div>
        <div className='flex w-full items-center justify-start gap-1 h-12 border border-solid border-primary rounded-xl mt-5 px-3'>
          <span className='text-black text-sm'>위험 요소 :</span>
          <span className='text-black text-sm'>칼슘, 아연, 구리, 셀레늄</span>
        </div>
        <div className='flex w-full justify-end mt-2'>
          <button className='flex justify-center items-center w-44 h-9 bg-primary rounded-3xl text-white font-bold text-sm whitespace-nowrap'>
            수의사 코멘트 요청하기
          </button>
        </div>
      </section>
      <Navigation />
    </>
  );
}

export default ResultMobilePage;
