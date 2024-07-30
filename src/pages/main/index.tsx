import { useEffect, useState } from 'react';
import Carousel from '../../components/main/Carousel/Carousel';
import Modal from '../../components/main/Modal';
import useModalStore from '../../store/useEditModeStore';
import useAuthStore from '../../store/useAuthStore';
import { PetData } from '../../types';
import { useNavigate } from 'react-router-dom';
import { baseInstance } from '../../api/config';

const MainPage = () => {
  const navigate = useNavigate();

  const { isEdit, setEdit } = useModalStore();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [chooseDelete, setChooseDelete] = useState(false);
  const [pets, setPets] = useState<PetData[]>([]);
  const { token } = useAuthStore();
  const [selectedPet, setSelectedPet] = useState(0);

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }
    getPetData();
  }, []);

  const getPetData = async () => {
    try {
      const response = await baseInstance.get(`pets/list`, {
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

  const deletePetData = async (id: number) => {
    try {
      const response = await baseInstance.delete(`pets/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        setPets(pets.filter((pet) => pet.id !== id));
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error('Error deleting pet data:', error);
    }
  };

  const handleModalOpen = () => {
    setIsModalOpen(true);
  };

  const handleDelete = () => {
    deletePetData(pets[selectedPet].id);
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

  const setSelected = (index: number) => {
    setSelectedPet(index);
  };

  return (
    <section className='flex flex-col justify-center bg-[#FEFEFE]'>
      <Carousel
        slides={pets}
        HandleModal={handleModalOpen}
        setSelected={setSelected}
      />
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className='flex flex-col justify-center items-center'>
          {chooseDelete ? (
            <>
              <div>{selectedPet}번 펫 삭제하시겠습니까?</div>
              <div onClick={handleDelete}>예</div>
              <div onClick={() => setChooseDelete(false)}>아니오</div>
            </>
          ) : (
            <>
              <h2 className='item text-xl mb-4'>설정</h2>
              <div className='flex flex-row'>
                <div onClick={handleEdit}>수정</div>/
                <div onClick={handleDelete}>삭제</div>
              </div>
            </>
          )}
          {}
        </div>
      </Modal>
    </section>
  );
};

export default MainPage;
