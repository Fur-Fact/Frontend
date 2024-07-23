import { useEffect, useState } from 'react';
import Carousel from '../../components/main/Carousel/Carousel';
import Modal from '../../components/main/Modal';
import useModalStore from '../../store/useEditModeStore';
import Navigation from '../../components/common/Navigation/Navigation';
import axios from 'axios';
import useAuthStore from '../../store/useAuthStore';

const MainPage = () => {

  const { isEdit, setEdit, unSetEdit } = useModalStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chooseDelete, setChooseDelete] = useState(false);
  const [pets, setPets] = useState([]);
  const { token } = useAuthStore();

  useEffect(() => {
    getPetData();
  }, []);

  const getPetData = async () => {
    try {
      const response = await axios.get('http://localhost:3000/api/v1/pets/list', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log(response.data.pets);
        setPets(response.data.pets);
      }
    } catch (error) {
      console.error('Error fetching pet data:', error);
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    setChooseDelete(true);
    console.log(isEdit);
  };

  useEffect(() => {
    if (!isModalOpen) {
      setChooseDelete(false);
    }
  }, [isModalOpen]);

  const handleEdit = () => {
    setEdit();
    setIsModalOpen(false);
  };

  return (
    <section className="flex flex-col justify-center bg-[#FEFEFE]">
      <Carousel slides={pets} HandleModal={handleModalOpen} />
      <Navigation />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="flex flex-col justify-center items-center">
          {chooseDelete ? (
            <>
              <div>삭제하시겠습니까?</div>
              <div>예</div>
              <div onClick={() => setChooseDelete(false)}>아니오</div>
            </>
          ) : (
            <>
              <h2 className="item text-xl mb-4">설정</h2>
              <div className="flex flex-row">
                <div onClick={handleEdit}>수정</div>/
                <div onClick={handleDelete}>삭제</div>
              </div>
            </>
          )}
        </div>
      </Modal>
    </section>
  );
};

export default MainPage;
