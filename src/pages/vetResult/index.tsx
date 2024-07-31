import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import SelectBox from '../../components/selectBox';
import ResultItem from '../../components/result/ResultItem';
import useAuthStore from '../../store/useAuthStore';
import { baseInstance } from '../../api/config';
interface Option {
  id: number;
  label: string;
}
/* prettier-ignore */
interface FurData {
  id: number; testId: number; Ca: number; Mg: number;Na: number;K: number;P: number;Zn: number;Cu: number;
  Se: number;Fe: number;Cr: number;V: number;Mn: number;Mo: number;Co: number;S: number;B: number;Li: number;
  Sr: number;Hg: number;Pb: number;Al: number;Cd: number;As: number;Ba: number;Sb: number;Bi: number;Ti: number;
  U: number;Cs: number;createdAt: string;updatedAt: string;
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

export default function VetResult() {
  const { testId } = useParams<{ testId: string }>();
  const [furData, setFurData] = useState<FurData | null>(null);
  const [otherTestLists, setOtherTestLists] = useState<Option[] | null>(null);
  const [selectedOption, setSelectedOption] = useState<string>('');
  const [comment, setComment] = useState<string>('');
  const [savedComment, setSavedComment] = useState<string | null>(null);
  const [guardianName, setGuardianName] = useState<string | null>(null);
  const [petName, setPetName] = useState<string | null>(null);
  const [age, setAge] = useState<string | null>(null);
  const [gender, seGender] = useState<string | null>(null);
  const [weight, setWeight] = useState<number | null>(null);
  const [contactNumber, setContactNumber] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (testId) {
      getChartData();
      getOtherLists();
      handleClick();
    }
  }, [testId, contactNumber]);

  const { token } = useAuthStore();

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3500);
  };

  const getChartData = async () => {
    try {
      const response = await baseInstance.get(`tests/${testId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.status === 200) {
        setSavedComment(response.data.data.comment);
        setFurData(response.data.data.FurData[0]);
        setGuardianName(response.data.data.guardianName);
        setPetName(response.data.data.petName);
        setAge(response.data.data.age);
        seGender(response.data.data.gender);
        setWeight(response.data.data.weight);
        setContactNumber(response.data.data.contactNumber);
      }
    } catch (error) {
      console.error('데이터 요청 중 에러가 발생했습니다.', error);
    }
  };

  const getOtherLists = async () => {
    try {
      if (contactNumber && petName) {
        const response = await baseInstance.get(
          `tests/vet/search?contactNumber=${contactNumber}&petName=${petName}`
        );

        if (response.status === 200) {
          const tests = response.data.tests;
          const options = tests.map(
            (test: { id: number; resultDate: string }, index: number) => ({
              id: test.id,
              label: `${index + 1}차-${test.resultDate.split('T')[0]}`,
            })
          );

          setOtherTestLists(options);

          const currentTest = options.find(
            (test: Option) => test.id === Number(testId)
          );
          if (currentTest) {
            setSelectedOption(currentTest.label);
          }
        }
      }
    } catch (error) {
      console.error('데이터 요청 중 에러가 발생했습니다.', error);
    }
  };

  const handleSelectChange = (selected: string) => {
    setSelectedOption(selected);
    const selectedTest = otherTestLists?.find(
      (test) => test.label === selected
    );
    if (selectedTest) {
      navigate(`/vet/result/${selectedTest.id}`);
    }
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const postComment = async () => {
    try {
      const response = await baseInstance.post(`tests/comment`, {
        test_id: testId,
        comment: comment,
      });

      if (response.status === 200) {
        setSavedComment(comment);
        postPush();
      }
    } catch (error) {
      console.error('코멘트 등록 중 에러가 발생했습니다.', error);
    }
  };

  const postPush = async () => {
    try {
      const response = await baseInstance.post(`tests/push`, {
        test_id: testId,
        phone: contactNumber,
      });

      if (response.status === 200) {
        console.log('전송 성공');
      }
    } catch (error) {
      console.error('코멘트 등록 중 에러가 발생했습니다.', error);
    }
  };
  return (
    <div className='flex flex-col justify-between h-4/5 items-center mx-14'>
      <div className='w-full h-full bg-white p-4 shadow-md rounded-lg mt-[3%]'>
        <div className='flex justify-between pr-4 z-50'>
          <SelectBox
            // options={otherTestLists?.map((test) => test.label) || []}
            options={otherTestLists?.map((test) => test.label) || []}
            selected={selectedOption}
            onChange={handleSelectChange}
          />

          <div className='flex items-center mt-2 text-right text-lg font-semibold text-gray-700 '>
            <span className='mr-2'> {guardianName} </span>
            <span className='text-gray-500 text-sm'>|</span>
            <span className='mx-2'>{petName}</span>
            <span className='text-gray-500 text-sm'>|</span>
            <span className='mx-2'>{age}살</span>
            <span className='text-gray-500 text-sm'>|</span>
            <span className='mx-2'>{gender}</span>
            <span className='text-gray-500 text-sm'>|</span>
            <span className='ml-2'>{weight}kg</span>
          </div>
        </div>
        {isLoading ? (
          <div className='relative flex flex-col w-full h-[350px] justify-center items-center rounded-md mt-8'>
            <progress className='progress w-56'></progress>
          </div>
        ) : (
          <>
            <div className='relative flex flex-col w-full h-[400px] rounded-md mt-4 pt-16 pb-7 px-4 gap-6 overflow-x-auto'>
              <div className='absolute top-0 left-0 w-[388px] h-full bg-[#efefef] z-0'>
                <h2 className='text-center font-semibold text-black text-lg z-10 py-3 bg-[#e6dfdf]'>
                  결핍
                </h2>
              </div>
              <div className='absolute transform -translate-x-1/2 top-0 left-1/2 w-[389px] h-full bg-[#e5eaf6] z-0'>
                <h2 className='text-center font-semibold text-black text-lg z-10 py-3 bg-[#d4def5]'>
                  기준 범위
                </h2>
              </div>
              <div className='absolute top-0 right-0 w-[399px] h-full bg-[#e8ece2] z-0'>
                <h2 className='text-center font-semibold text-black text-lg z-10 py-3 bg-[#e2e9d2]'>
                  과다
                </h2>
              </div>

              {/* 스크롤 가능한 영역 */}
              <div className='relative flex flex-col w-full h-full overflow-y-auto'>
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
              </div>
            </div>

            {/* 코멘트 입력 또는 표시 */}
            <div className='flex flex-col mt-4 w-full h-1/6 '>
              {savedComment === null ? (
                <textarea
                  className='flex-grow border rounded-md p-4'
                  placeholder='코멘트를 입력하세요'
                  value={comment}
                  onChange={handleCommentChange}
                ></textarea>
              ) : (
                <div className='flex-grow border rounded-md p-4 bg-blue-100'>
                  {savedComment}
                </div>
              )}
            </div>

            {/* 입력 버튼 */}
            {!savedComment && (
              <div className='flex justify-end mt-1'>
                <button
                  className='bg-blue-500 text-white px-4 py-2 rounded-md'
                  onClick={postComment}
                >
                  코멘트 등록하기
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
