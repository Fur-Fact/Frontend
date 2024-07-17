import PetInfoCard from "./PetInfoCard"
import PetInspectionCard from "./PetInspectionCard"

const AddCard = () => {
  return (
    <div className="w-[350px] flex flex-col items-center relative">
      <div className="absolute z-20 inset-0 rounded-3xl bg-gray-700 opacity-50 "></div>
      <div className="relative w-[357px] blur-sm h-[320px] bg-black rounded-3xl m-2 z-10">
        이미지
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
      <div className="absolute inset-0 flex flex-col items-center justify-center rounded-3xl z-20">
        <p className="text-white font-bold text-xl ml-4">버튼을 누르고 </p>
        <p className="text-white font-bold text-xl ml-4">기르고 계신 동물을 등록해주세요</p>

      </div>
    </div>
  )
}

export default AddCard
