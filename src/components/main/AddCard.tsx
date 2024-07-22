import { useState } from "react";
import axios from "axios";
import PetInfoCard from "./PetInfoCard";
import PetInspectionCard from "./PetInspectionCard";
import Modal from "./Modal";
import AddInput from "../common/AddInput";
import FullButton from "../common/FullButton";
import useAuthStore from "../../store/useAuthStore";

const AddCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [photo, setPhoto] = useState(null);
  const [photoPreview, setPhotoPreview] = useState(null);
  const [petData, setPetData] = useState({
    name: "",
    age: "",
    weight: "",
    gender: "",
    species: "",
    feed: ""
  });

  const { token } = useAuthStore();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setPetData({ ...petData, [name]: value });
  };

  const handlePhotoChange = (e) => {
    const file = e.target.files[0];
    setPhoto(file);
    const reader = new FileReader();
    reader.onloadend = () => {
      setPhotoPreview(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const triggerFileInput = () => {
    document.getElementById("photo-input").click();
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("image", photo);
    formData.append("name", petData.name);
    formData.append("age", petData.age);
    formData.append("weight", petData.weight);
    formData.append("gender", petData.gender);
    formData.append("species", petData.species);
    formData.append("feed", petData.feed);

    try {
      const response = await axios.post('http://localhost:3000/api/v1/pets', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${token}`
        }
      });
      if (response.status === 200) {
        console.log("Pet added successfully");
        setPetData({
          name: "",
          age: "",
          weight: "",
          gender: "",
          species: "",
          feed: ""
        });
        setPhoto(null);
        setIsModalOpen(false);
      } else {
        console.log("Failed to add pet");
      }
    } catch (error) {
      console.error("There was an error adding the pet!", error);
    }
  };

  return (
    <div className="w-full flex flex-col items-center relative">
      <div className="flex flex-col justify-center items-center w-[357px] h-[320px] bg-[#DFDFDF] rounded-3xl m-2 z-10 filter">
        <div className="text-7xl font-bold flex flex-row justify-center items-center  rounded-full text-white w-[100px] h-[100px] hover:bg-blue-700 bg-primary">
          <div onClick={() => setIsModalOpen(true)}>+</div>
        </div>
        <div className="font-bold">버튼을 눌러 기르고 계신 동물을 추가해주세요</div>
      </div>
      <div className="flex flex-row blur-sm justify-between w-[350px] m-2 z-10">
        <PetInfoCard type="나이" value="예시" />
        <PetInfoCard type="성별" value="예시" />
        <PetInfoCard type="종" value="예시" />
        <PetInfoCard type="몸무게" value="예시" />
      </div>
      <div className="w-full blur-sm font-bold text-left m-2 z-10">
        검사 결과
      </div>
      <div className="h-[480px] blur-sm overflow-scroll z-10">
        <PetInspectionCard />
        <PetInspectionCard />
        <PetInspectionCard />
        <PetInspectionCard />
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div className="py-8" >
          <div className="w-100%  h-[320px] flex flex-col items-center justify-center">
            <input id="photo-input" type="file" onChange={handlePhotoChange} className="hidden" />
            {photoPreview && <img src={photoPreview} alt="Pet Preview" className="mt-2 w-64 h-64  object-cover rounded-full" />}
            <button onClick={triggerFileInput} className="bg-primary text-white py-2 px-4 mt-2 rounded-lg">사진 선택</button>
            {/*TODO: 사진 유무에 따라 등록과 수정으로 변경 */}
          </div>
          <AddInput placeholder="동물 이름" name="name" value={petData.name} onChange={handleInputChange} />
          <div className="w-100%">
            <input className="mr-1 text-xs px-4 h-14 my-1 border-2 rounded-xl border-solid border-[#E5E4E3]" placeholder="나이" type="text" name="age" value={petData.age} onChange={handleInputChange} />
            <input className="ml-1 text-xs px-4 h-14 my-1 border-2 rounded-xl border-solid border-[#E5E4E3]" placeholder="몸무게" type="text" name="weight" value={petData.weight} onChange={handleInputChange} />
          </div>
          <div className="w-100% flex flex-row">
            <div className={`w-[164px] mr-1 flex flex-row justify-center items-center text-xs px-4 h-14 my-1 border-2 rounded-xl border-solid ${petData.gender === "male" ? "bg-primary text-white" : "border-[#E5E4E3]"}`} onClick={() => setPetData({ ...petData, gender: "male" })}>
              남성
            </div>
            <div className={`w-[164px] ml-1 flex flex-row justify-center items-center text-xs px-4 h-14 my-1 border-2 rounded-xl border-solid ${petData.gender === "female" ? "bg-primary text-white" : "border-[#E5E4E3]"}`} onClick={() => setPetData({ ...petData, gender: "female" })}>
              여성
            </div>
          </div>
          <AddInput placeholder="종" name="species" value={petData.species} onChange={handleInputChange} />
          <AddInput placeholder="먹이 정보" name="feed" value={petData.feed} onChange={handleInputChange} />
          <FullButton  disabled={false} onClick={handleSubmit}>추가하기</FullButton>
        </div>
      </Modal>
    </div>
  )
}

export default AddCard;
