import PetInfoCard from "./PetInfoCard"
import PetInspectionCard from "./PetInspectionCard"

type PetData = {
  id: number,
  petName: string,
  imgUrl: string,
  birthday: string,
  gender: string,
  species: string, 
  weight: number,
}

const PetCard = ({data,HandleModal}:PetData) =>{

 //TODO: 검사결과 조회



  return(
    <div className="w-full flex flex-col items-center">
      <div className="flex flex-row w-[357px] h-[320px] bg-slate-300 rounded-3xl m-2 p-2">
        <div className="flex flex-row w-full justify-between">
          <div className=" font-bold h-10 text-xl	rounded-2xl opacity-80 bg-white	px-4 py-2">
            꼬미
          </div>
          <button onClick={()=>HandleModal(true)}>
            설정
          </button>
        </div>
      </div>
      <div className="flex flex-row justify-between w-[350px] m-2">
        <PetInfoCard type="나이" value="예시"/>
        <PetInfoCard type="성별" value="예시"/>
        <PetInfoCard type="종" value="예시"/>
        <PetInfoCard type="몸무게" value="예시"/>
      </div>
      <div className="w-full font-bold text-left m-2">
        검사 결과
      </div>
      <div className=" h-[480px] overflow-scroll	">
        <PetInspectionCard/>
        <PetInspectionCard/>
        <PetInspectionCard/>
        <PetInspectionCard/>
        <PetInspectionCard/>
        <PetInspectionCard/>
        <PetInspectionCard/>
        <PetInspectionCard/>
        <PetInspectionCard/>
      </div>
    </div>  
  )
}

export default PetCard