import { useState } from "react";
import useModalStore from "../../store/useEditModeStore";
import PetInfoCard from "./PetInfoCard";
import PetInspectionCard from "./PetInspectionCard";

type PetData = {
  id: number,
  petName: string,
  imgUrl: string,
  birthday: string,
  gender: string,
  species: string, 
  weight: number,
};

const PetCard = ({ data, HandleModal }: { data: PetData, HandleModal: (show: boolean) => void }) => {
  const [age, setAge] = useState<string>('10세');
  const [weight, setWeight] = useState<string>('56kg');
  const [gender, setGender] = useState<string>('남성');
  const [species, setSpecies] = useState<string>('강아지');

  const { isEdit,  unSetEdit } = useModalStore();

  const HandleSaveEditData = () => {
    // TODO: API 연동
    unSetEdit();
  };

  // 임의의 검사 결과 데이터
  const inspectionData = [
    { id: 1, result: "검사 결과 1" },
    { id: 2, result: "검사 결과 2" },
    { id: 3, result: "검사 결과 3" },
    { id: 4, result: "검사 결과 4" },
    { id: 5, result: "검사 결과 5" },
    { id: 6, result: "검사 결과 6" },
    { id: 7, result: "검사 결과 7" },
    { id: 8, result: "검사 결과 8" },
    { id: 9, result: "검사 결과 9" },
  ];
  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-row w-[357px] h-[320px] bg-cover bg-center bg-[url('/src/assets/Dog.jpg')] rounded-3xl m-2 p-2">
        <div className="flex flex-row w-full h-10 justify-between">
          <div className=" font-bold text-xl rounded-2xl opacity-80 bg-white px-4 py-2">
            꼬미
          </div>
          {isEdit ? (
            <button onClick={HandleSaveEditData}>
              저장
            </button>
          ) : (
            <button onClick={() => HandleModal(true)}>
              설정
            </button>
          )}
        </div>
      </div>
      <div className="flex flex-row justify-between w-[350px] m-2">
        <PetInfoCard type="나이" handleChange={setAge} value={age} isEdit={isEdit} />
        <PetInfoCard type="성별" handleChange={setGender} value={gender} isEdit={isEdit} />
        <PetInfoCard type="종" handleChange={setSpecies} value={species} isEdit={isEdit} />
        <PetInfoCard type="몸무게" handleChange={setWeight} value={weight} isEdit={isEdit} />
      </div>
      <div className="w-full font-bold text-left m-2">
        검사 결과
      </div>
      <div className="h-[480px] overflow-scroll">
        {inspectionData.map((inspection) => (
          <PetInspectionCard key={inspection.id} number={inspection.id} result={inspection.result} />
        ))}
      </div>
    </div>
  );
};

export default PetCard;
