import { useEffect, useState } from 'react';
import Carousel from '../../components/main/Carousel/Carousel'
import Modal from '../../components/main/Modal';

const MainPage = () =>{

  const data = [
    {
      "id": 1,
      "petName": "꼬미",
      "imgUrl": "...",
      "birthday": "2022-06-22", // 날짜 형식 유지
      "gender": "male",
      "species": "dog", // 예시로 "dog" 추가
      "weight": 17,
      "disease": [], // 빈 배열 유지
      // 프론트 데이터에 따라서 요소가 변경될 수 있음
    },
    {
      "id": 2,
      "petName": "꼬미",
      "imgUrl": "...",
      "birthday": "2022-06-22", // 날짜 형식 유지
      "gender": "male",
      "species": "dog", // 예시로 "dog" 추가
      "weight": 17,
      "disease": [], // 빈 배열 유지
      // 프론트 데이터에 따라서 요소가 변경될 수 있음
    },
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chooseDelete, setChooseDelete] = useState(false);
  //TODO: 설정 input은 상태 관리 라이브러리 활용
  //TODO: 수정 삭제 선택 기능

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };
  const handleDelete = () => {
    setChooseDelete(true);
  }
  //TOOD: API연동

  useEffect(()=>{
    if(!isModalOpen){
      setChooseDelete(false);
    }
  },[isModalOpen])//초기화

  
  return(
    <section className='flex flex-row justify-center bg-[#FEFEFE]'>
      <Carousel slides={data} HandleModal={handleModalOpen} />
      <Modal isOpen={isModalOpen}  onClose={() => setIsModalOpen(false)} >
        <div className='flex flex-col justify-center items-center'>
          {
            chooseDelete ?
            <>
              <div>
                삭제하시겠습니까?
              </div>
              <div>
                예
              </div>
              <div onClick={()=>setChooseDelete(false)} >
                아니오
              </div>
            </>
            :
            <>
              <h2 className="item text-xl mb-4">설정</h2>
              <div className='flex flex-row'>
                <div>
                  수정
                </div>
                /
                <div onClick={()=>handleDelete()}>
                  삭제
                </div>
              </div>
            </>
          }

        </div>
        {/* TODO: 삭제하시겠습니까? 추가 후 삭제 구현 */}
      </Modal>
    </section>
  )
}

export default MainPage