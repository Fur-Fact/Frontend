import { useState } from 'react';
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

    //모달 관리
    //설정 input관리
  ];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  return(
    <section className='flex flex-row justify-center bg-[#FEFEFE]'>
      <Carousel slides={data} HandleModal={handleModalOpen} />
      
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <h2 className="text-2xl mb-4">Modal Content</h2>
        <p>Here is some content inside the modal!</p>
      </Modal>
      {/* <PetCardCarousel/> */}
    </section>
  )
}

export default MainPage