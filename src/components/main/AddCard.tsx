import { useState } from "react";
import PetInfoCard from "./PetInfoCard"
import PetInspectionCard from "./PetInspectionCard"
import Modal from "./Modal";

const AddCard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="flex flex-col justify-center items-center w-[357px] h-[320px] bg-[#DFDFDF] rounded-3xl m-2 z-10 filter">
        <div className="text-7xl font-bold flex flex-row justify-center items-center  rounded-full text-white	 w-[100px] h-[100px] hover:bg-blue-700 bg-primary">
          <div onClick={()=>setIsModalOpen(true)}>
            +
          </div>
        </div>
        <div className="font-bold">버튼을 눌러 기르고 계신 동물을 추가해주세요</div>
      </div>
      <div className="flex flex-row blur-sm justify-between w-[350px] m-2 z-10">
        <PetInfoCard type="나이" value="예시"/>
        <PetInfoCard type="성별" value="예시"/>
        <PetInfoCard type="종" value="예시"/>
        <PetInfoCard type="몸무게" value="예시"/>
      </div>
      <div className="w-full blur-sm font-bold text-left m-2 z-10">
        검사 결과
      </div>
      <div className="h-[480px] blur-sm overflow-scroll z-10">
        <PetInspectionCard/>
        <PetInspectionCard/>
        <PetInspectionCard/>
        <PetInspectionCard/>
      </div>
      <Modal isOpen={isModalOpen}  onClose={() => setIsModalOpen(false)}>
        생성 모달
      </Modal>
    </div>
  )
}

export default AddCard
