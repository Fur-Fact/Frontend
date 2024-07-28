type PetInspectionCardProps = {
  number: number;
  onClick: () => void;
  comment: string | null;
  date: string;
}

const PetInspectionCard = ({ number, onClick, comment, date }: PetInspectionCardProps) => {
  const formattedDate = new Date(date).toLocaleDateString('ko-KR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div onClick={onClick} className="flex flex-col justify-center items-start text-black hover:text-white bg-white hover:bg-primary w-[357px] h-[70px] shadow-lg rounded-lg m-2 p-4">
      <div className="text-sm font-bold">{number}회차 검사 결과</div>
      <div className="text-xs">{formattedDate}</div>
      <div className="text-xs mt-1">
        {comment ? "진료 결과 등록!" : "코멘트 요청중..."}
      </div>
    </div>
  );
}

export default PetInspectionCard;
