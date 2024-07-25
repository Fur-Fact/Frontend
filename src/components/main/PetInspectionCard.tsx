type PetInspectionCardProps = {
  number: number;
  onClick: () => void;
}

const PetInspectionCard = ({number,onClick}:PetInspectionCardProps) => {
  return(
    <div onClick={onClick} className="flex flex-col justify-center items-start text-black	hover:text-white  bg-white hover:bg-primary w-[357px] h-[70px] shadow-lg rounded-lg m-2 p-4">
      <div className="text-sm font-bold	">{number}회차 검사 결과</div>
      <div className="text-xs">2024년 6월 29일</div>
      <div className="text-xs mt-1"> 코멘트 요청중...</div>
    </div>
  )
}

export default PetInspectionCard