import React, { ChangeEvent, useEffect, useState } from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { DotButton, useDotButton } from './CarouselDotButton';
import useEmblaCarousel from 'embla-carousel-react';
import PetCard from '../PetCard';
import AddCard from '../AddCard';
import { PetData } from '../../../types';
import Modal from '../Modal';
import AddInput from '../../common/AddInput';
import FullButton from '../../common/FullButton';
import useAuthStore from '../../../store/useAuthStore';
import useModalStore from '../../../store/useEditModeStore';
import axios from 'axios';

type PropType = {
  slides: PetData[];
  options?: EmblaOptionsType;
  HandleModal: (value: boolean) => void;
  setSelected: (value: number) => void;
};

const EmblaCarousel: React.FC<PropType> = ({ slides, options, HandleModal, setSelected }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: 'center', ...options });
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  useEffect(() => {
    setSelected(selectedIndex);
  }, [selectedIndex]);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photo, setPhoto] = useState<File | null>(null);
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  const [petData, setPetData] = useState({
    name: '',
    age: '',
    weight: '',
    gender: '',
    species: '',
    feed: '',
  });

  const { token } = useAuthStore();
  const { isEdit, unSetEdit } = useModalStore();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setPhoto(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    document.getElementById('photo-input')?.click();
  };

  const handleSubmit = async () => {
    if (!photo|| !petData.name || !petData.age || !petData.weight || !petData.gender || !petData.species || !petData.feed) {
      console.log('모든 필드를 채워주세요.');
      console.log(petData)
      return;
    }

    const formData = new FormData();
    formData.append('image', photo);
    formData.append('name', petData.name);
    formData.append('age', petData.age);
    formData.append('weight', petData.weight);
    formData.append('gender', petData.gender);
    formData.append('species', petData.species);
    formData.append('feed', petData.feed);

    for (let pair of formData.entries()) {
      console.log(pair[0] + ': ' + pair[1]);
    }

    try {
      const response = await axios.put(`http://localhost:3000/api/v1/pets/${selectedIndex}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`,
        },
      });
      if (response.status === 200) {
        console.log('Pet added successfully');
        setPetData({
          name: '',
          age: '',
          weight: '',
          gender: '',
          species: '',
          feed: '',
        });
        setPhoto(null);
        setPhotoPreview(null);
        setIsModalOpen(false);
      } else {
        console.log('Failed to add pet');
      }
    } catch (error) {
      console.error('There was an error adding the pet!', error);
    }
  };

  useEffect(() => {
    if (isEdit) {
      setIsModalOpen(true);
      const selectedPet = slides[selectedIndex];
      setPetData({
        name: selectedPet.name,
        age: selectedPet.age,
        weight: selectedPet.weight,
        gender: selectedPet.gender,
        species: selectedPet.species,
        feed: selectedPet.feed,
      });
      setPhotoPreview(selectedPet.image); // Assuming 'photo' is a URL in `PetData`
    }
  }, [isEdit]);

  useEffect(() => {
    if (!isModalOpen) {
      unSetEdit();
    }
  }, [isModalOpen]);

  return (
    <section className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((data, index) => (
            <div className="embla__slide" key={index}>
              <PetCard data={data} HandleModal={HandleModal} />
            </div>
          ))}
          <div className="embla__slide">
            <AddCard />
          </div>
        </div>
      </div>
      <div className="embla__controls">
        <div className="embla__dots">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={'embla__dot'.concat(index === selectedIndex ? ' embla__dot--selected' : '')}
            />
          ))}
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="py-8">
          <div className="w-full h-[320px] flex flex-col items-center justify-center">
            <input id="photo-input" type="file" onChange={handlePhotoChange} className="hidden" />
            {photoPreview === null ? (
              <div
                onClick={triggerFileInput}
                className="mt-2 w-64 h-64 bg-slate-400 object-cover rounded-full cursor-pointer"
              ></div>
            ) : (
              <img
                src={photoPreview}
                onClick={triggerFileInput}
                alt={photoPreview}
                className="mt-2 w-64 h-64 object-cover rounded-full cursor-pointer"
              />
            )}
          </div>
          <AddInput placeholder="동물 이름" name="name" value={petData.name} onChange={handleInputChange} />
          <div className="flex">
            <input
              className="mr-1 text-xs px-4 h-14 my-1 border-2 rounded-xl border-solid border-[#E5E4E3]"
              placeholder="나이"
              type="text"
              name="age"
              value={petData.age}
              onChange={handleInputChange}
            />
            <input
              className="ml-1 text-xs px-4 h-14 my-1 border-2 rounded-xl border-solid border-[#E5E4E3]"
              placeholder="몸무게"
              type="text"
              name="weight"
              value={petData.weight}
              onChange={handleInputChange}
            />
          </div>
          <div className="flex">
            <div
              className={`w-[164px] mr-1 flex flex-row justify-center items-center text-xs px-4 h-14 my-1 border-2 rounded-xl border-solid cursor-pointer ${
                petData.gender === 'male' ? 'bg-primary text-white' : 'border-[#E5E4E3]'
              }`}
              onClick={() => setPetData({ ...petData, gender: 'male' })}
            >
              남성
            </div>
            <div
              className={`w-[164px] ml-1 flex flex-row justify-center items-center text-xs px-4 h-14 my-1 border-2 rounded-xl border-solid cursor-pointer ${
                petData.gender === 'female' ? 'bg-primary text-white' : 'border-[#E5E4E3]'
              }`}
              onClick={() => setPetData({ ...petData, gender: 'female' })}
            >
              여성
            </div>
          </div>
          <AddInput placeholder="종" name="species" value={petData.species} onChange={handleInputChange} />
          <AddInput placeholder="먹이 정보" name="feed" value={petData.feed} onChange={handleInputChange} />
          <FullButton disabled={false} onClick={handleSubmit}>
            수정하기
          </FullButton>
        </div>
      </Modal>
    </section>
  );
};

export default EmblaCarousel;
