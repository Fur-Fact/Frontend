import axios from "axios";
import Navigation from "../../../components/common/Navigation/Navigation";
import ResultItem from "../../../components/result/ResultItem";
import { useEffect, useState } from "react";
import useAuthStore from "../../../store/useAuthStore";

interface FurData {
  id: number;
  testId: number;
  Ca: number;
  Mg: number;
  Na: number;
  K: number;
  P: number;
  Zn: number;
  Cu: number;
  Se: number;
  Fe: number;
  Cr: number;
  V: number;
  Mn: number;
  Mo: number;
  Co: number;
  S: number;
  B: number;
  Li: number;
  Sr: number;
  Hg: number;
  Pb: number;
  Al: number;
  Cd: number;
  As: number;
  Ba: number;
  Sb: number;
  Bi: number;
  Ti: number;
  U: number;
  Cs: number;
  createdAt: string;
  updatedAt: string;
}

interface fetchTestResultResponseData {
  result: string;
  message: string;
  data: {
    id: number;
    comment: string | null;
    hospital: string;
    receivedAt: string;
    resultDate: string;
    guardianName: string;
    contactNumber: string | null;
    petName: string;
    species: string;
    breed: string;
    age: number;
    gender: string;
    weight: number;
    hereditaryDisease: string | null;
    feedingMethod: string;
    supplements: string | null;
    medication: string | null;
    createdAt: string;
    updatedAt: string;
    isDeleted: boolean;
    FurData: FurData[];
  };
}

/* prettier-ignore */
const elements = [
  { key: "Ca", label: "칼슘", color: "#40A5FD" },
  { key: "Mg", label: "마그네슘", color: "#FDA640" },
  { key: "Na", label: "나트륨", color: "#40A5FD" },
  { key: "K", label: "칼륨", color: "#FDA640" },
  { key: "P", label: "인", color: "#FD6240" },
  { key: "Zn", label: "아연", color: "#FD6240" },
  { key: "Cu", label: "구리", color: "#FD6240" },
  { key: "Se", label: "셀레늄", color: "#FD6240" },
  { key: "Fe", label: "철", color: "#FD6240" },
  { key: "Cr", label: "크롬", color: "#40A5FD" },
  { key: "V", label: "바나듐", color: "#40A5FD" },
  { key: "Mn", label: "망간", color: "#40A5FD" },
  { key: "Mo", label: "몰리브덴", color: "#FDA640" },
  { key: "Co", label: "코발트", color: "#40A5FD" },
  { key: "S", label: "황", color: "#40A5FD" },
  { key: "B", label: "붕소", color: "#40A5FD" },
  { key: "Li", label: "리튬", color: "#FD6240" },
  { key: "Sr", label: "스트론튬", color: "#FD6240" },
  { key: "Hg", label: "수은", color: "#FDA640" },
  { key: "Pb", label: "납", color: "#FD6240" },
  { key: "Al", label: "알루미늄", color: "#40A5FD" },
  { key: "Cd", label: "카드뮴", color: "#FDA640" },
  { key: "As", label: "비소", color: "#40A5FD" },
  { key: "Ba", label: "바륨", color: "#40A5FD" },
  { key: "Sb", label: "안티몬", color: "#FDA640" },
  { key: "Bi", label: "비스무스", color: "#40A5FD" },
  { key: "Ti", label: "탈륨", color: "#FD6240" },
  { key: "U", label: "우라늄", color: "#FD6240" },
  { key: "Cs", label: "세슘", color: "#40A5FD" },
];

/* prettier-ignore */
const distinction = [
  { element: "Ca", distinction0: "0", distinction1: "100", distinction2: "175", distinction3: "525", distinction4: "875", distinction5: "1700", distinction6: "3500" },
  { element: "Mg", distinction0: "0", distinction1: "10", distinction2: "25", distinction3: "65", distinction4: "105", distinction5: "210", distinction6: "420" },
  { element: "Na", distinction0: "0", distinction1: "100", distinction2: "200", distinction3: "700", distinction4: "1200", distinction5: "2400", distinction6: "4800" },
  { element: "K", distinction0: "0", distinction1: "10", distinction2: "20", distinction3: "310", distinction4: "600", distinction5: "1200", distinction6: "2400" },
  { element: "P", distinction0: "0", distinction1: "80", distinction2: "160", distinction3: "240", distinction4: "320", distinction5: "640", distinction6: "1280" },
  { element: "Zn", distinction0: "0", distinction1: "90", distinction2: "185", distinction3: "205", distinction4: "225", distinction5: "450", distinction6: "900" },
  { element: "Cu", distinction0: "0", distinction1: "5", distinction2: "12.5", distinction3: "17", distinction4: "21.5", distinction5: "43", distinction6: "86" },
  { element: "Se", distinction0: "0", distinction1: "0.5", distinction2: "1.0", distinction3: "1.6", distinction4: "2.2", distinction5: "3.0", distinction6: "6.0" },
  { element: "Fe", distinction0: "0", distinction1: "4.0", distinction2: "8.0", distinction3: "18", distinction4: "28", distinction5: "56", distinction6: "112" },
  { element: "Cr", distinction0: "0", distinction1: "0.1", distinction2: "0.2", distinction3: "0.4", distinction4: "0.6", distinction5: "1.2", distinction6: "2.4" },
  { element: "V", distinction0: "0", distinction1: "0.0000", distinction2: "0.2", distinction3: "0.31", distinction4: "0.6", distinction5: "1.2", distinction6: "2.4" },
  { element: "Mn", distinction0: "0", distinction1: "0.06", distinction2: "0.13", distinction3: "0.49", distinction4: "0.85", distinction5: "1.7", distinction6: "3.4" },
  { element: "Mo", distinction0: "0", distinction1: "0.01", distinction2: "0.02", distinction3: "0.11", distinction4: "0.2", distinction5: "0.4", distinction6: "0.8" },
  { element: "Co", distinction0: "0", distinction1: "0.004", distinction2: "0.008", distinction3: "0.015", distinction4: "0.045", distinction5: "0.09", distinction6: "0.18" },
  { element: "S", distinction0: "0", distinction1: "20000", distinction2: "40000", distinction3: "50000", distinction4: "60000", distinction5: "70000", distinction6: "90000" },
  { element: "B", distinction0: "0", distinction1: "0.25", distinction2: "0.5", distinction3: "2.0", distinction4: "3.5", distinction5: "7.0", distinction6: "14" },
  { element: "Li", distinction0: "0", distinction1: "0.00", distinction2: "0.03", distinction3: "0.06", distinction4: "0.11", distinction5: "0.22", distinction6: "0.44" },
  { element: "Sr", distinction0: "0", distinction1: "0.2", distinction2: "0.4", distinction3: "2.2", distinction4: "4.0", distinction5: "8.0", distinction6: "16" },
  { element: "Hg", distinction0: "0", distinction1: "0.35", distinction2: "0.5", distinction3: "0.75", distinction4: "1.0", distinction5: "1.25", distinction6: "1.5" },
  { element: "Pb", distinction0: "0", distinction1: "1.05", distinction2: "1.5", distinction3: "2.25", distinction4: "3.0", distinction5: "3.75", distinction6: "4.5" },
  { element: "Al", distinction0: "0", distinction1: "17", distinction2: "25", distinction3: "37.5", distinction4: "50", distinction5: "62", distinction6: "75" },
  { element: "Cd", distinction0: "0", distinction1: "0.042", distinction2: "0.06", distinction3: "0.09", distinction4: "0.12", distinction5: "0.15", distinction6: "0.18" },
  { element: "As", distinction0: "0", distinction1: "0.105", distinction2: "0.15", distinction3: "0.225", distinction4: "0.30", distinction5: "0.375", distinction6: "0.45" },
  { element: "Ba", distinction0: "0", distinction1: "2.8", distinction2: "4", distinction3: "6", distinction4: "8", distinction5: "10", distinction6: "12" },
  { element: "Sb", distinction0: "0", distinction1: "0.053", distinction2: "0.075", distinction3: "0.112", distinction4: "0.150", distinction5: "0.188", distinction6: "0.225" },
  { element: "Bi", distinction0: "0", distinction1: "0.098", distinction2: "0.14", distinction3: "0.21", distinction4: "0.28", distinction5: "0.35", distinction6: "0.42" },
  { element: "Ti", distinction0: "0", distinction1: "0.007", distinction2: "0.01", distinction3: "0.015", distinction4: "0.02", distinction5: "0.025", distinction6: "0.03" },
  { element: "U", distinction0: "0", distinction1: "0.14", distinction2: "0.2", distinction3: "0.3", distinction4: "0.4", distinction5: "0.5", distinction6: "0.6" },
  { element: "Cs", distinction0: "0", distinction1: "0.007", distinction2: "0.01", distinction3: "0.015", distinction4: "0.02", distinction5: "0.025", distinction6: "0.03" }
];

function ResultMobilePage() {
  const { token } = useAuthStore();

  const [resultDate, setResultDate] = useState<string>("");
  const [furData, setFurData] = useState<FurData | null>(null);

  const fetchTestResult = async () => {
    try {
      const response = await axios.get<fetchTestResultResponseData>(
        "http://localhost:3000/api/v1/tests/1",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(response.data.data);
      setResultDate(response.data.data.resultDate);
      setFurData(response.data.data.FurData[0]);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    fetchTestResult();
  }, []);

  /* prettier-ignore */
  const slicedResultDate = `${resultDate.slice(0, 4)} ${resultDate.slice(5, 7)} ${resultDate.slice(8, 10)}`;

  return (
    <>
      <section className='flex flex-col justify-center bg-white px-5'>
        <div className='flex w-full justify-start items-end gap-2 mt-7 px-2'>
          <h1 className='text-black font-bold text-3xl'>결과 조회</h1>
          <div className='flex gap-1 items-center mb-1'>
            <span className='text-black text-sm'>접수일 : </span>
            <span className='text-black text-sm'>{slicedResultDate}</span>
          </div>
        </div>
        <div className='relative flex flex-col w-full h-fit rounded-md mt-4 pt-16 pb-7 px-4 gap-6 overflow-hidden'>
          {furData &&
            elements.map((element, index) => (
              <ResultItem
                key={index}
                element={element.key}
                label={element.label}
                value={furData[element.key as keyof FurData] as number}
                color={element.color}
                distinction={distinction.filter(
                  (d) => d.element === element.key
                )}
              />
            ))}
          {/* 구분 색상 배경 */}
          <div className='absolute top-0 left-0 w-[123px] h-full bg-[#F5F7FC]'>
            <h2 className='font-semibold text-black text-lg z-10 py-3 bg-[#e7ecf8]'>
              결핍
            </h2>
          </div>
          <div className='absolute transform -translate-x-1/2 top-0 left-1/2 w-[105px] h-full bg-[#efefef]'>
            <h2 className='font-semibold text-black text-lg z-10 py-3 bg-[#e6dfdf]'>
              기준 범위
            </h2>
          </div>
          <div className='absolute top-0 right-0 w-[123px] h-full bg-[#e8ece2]'>
            <h2 className='font-semibold text-black text-lg z-10 py-3 bg-[#e2e9d2]'>
              과다
            </h2>
          </div>
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
