type InfoData = {
  type: string,
  value: string | number

}

const PetInfoCard = ({type, value}:InfoData) =>{
  return (
    <div className="flex flex-col text-xs justify-center items-center w-[76px] h-[76px] rounded-2xl shadow-lg bg-white">
      <div className="font-bold ">{value}</div>
      <div>{type}</div>
    </div>
  )
}

export default PetInfoCard