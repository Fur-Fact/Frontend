type InfoData = {
  type: string,
  handleChange: (value: string) => void,
  value: string,
  isEdit: boolean
  unit?: string
}

const PetInfoCard = ({type, handleChange , value, isEdit, unit}:InfoData) =>{
  return (
    <div className="flex flex-col text-xs justify-center items-center w-[76px] h-[76px] rounded-2xl shadow-lg bg-white">
      {isEdit ? (
        <input
          className=" w-full font-bold text-center text-primary"
          type="text"
          value={value}
          onChange={(e) => handleChange(e.target.value)}
        />//TODO: 벨류 선택 요소 수정
      ) : (
        <div className="font-bold">{value}{unit}</div>
      )}
      <div>{type}</div>
    </div>
  )
}

export default PetInfoCard