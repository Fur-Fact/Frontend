type InfoData = {
  type: string,
  // handleChange: (value: string) => void,
  value: string,
  unit?: string
}

const PetInfoCard = ({ type, value, unit }: InfoData) => {
  const ViewValue = () => { 
    if (value === 'male') {
      return '수컷';
    } else if (value === 'female') {
      return '암컷';
    } else {
      return value;
    }
  };

  return (
    <div className="flex flex-col text-xs justify-center items-center w-[76px] h-[76px] rounded-2xl shadow-lg bg-white">
        <div className="font-bold">
          {ViewValue()}
          {unit}
        </div>
      <div>{type}</div>
    </div>
  );
};

export default PetInfoCard;
