import { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';

function PCLayout() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [refreshKey, setRefreshKey] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (selectedFile) {
      setIsModalOpen(true);
    }
  }, [selectedFile, isModalOpen]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      event.target.value = '';
    }
  };

  const handleFileUpload = async () => {
    const token = sessionStorage.getItem('token');

    if (!selectedFile) {
      alert('파일을 선택해주세요.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/furdatas',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        alert('파일이 성공적으로 업로드되었습니다.');
        setIsModalOpen(false);
        setSelectedFile(null);
        setRefreshKey((oldKey) => oldKey + 1);
      }
    } catch (error) {
      console.error('파일 업로드 중 에러가 발생했습니다.', error);
      alert('파일 업로드 중 에러가 발생했습니다.');
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedFile(null);
  };

  return (
    <div className='flex w-screen h-screen bg-gray-100'>
      <div className='flex w-full bg-blue-100 rounded-lg'>
        <div className='flex flex-col w-[13rem] bg-primary items-center rounded-l-lg'>
          <div
            className='w-[11.095rem] h-[5.13406rem] mt-16 cursor-pointer'
            style={{
              backgroundImage: `url(${logo})`,
              backgroundSize: 'contain',
            }}
            onClick={() => navigate('/vet')}
          />
          <p className='mt-[0.6rem] text-xs text-white'>
            반려 동물 모발을 이용한 생체 정보 분석
          </p>
        </div>
        <div className='flex flex-shrink flex-col flex-grow'>
          <div className='flex flex-row items-center justify-between px-5 pt-4 bg-white w-full h-28 rounded-tr-lg'>
            <div className='text-lg font-medium text-gray-900'>
              안녕하세요, 홍길동 수의사님!
            </div>
            {!location.pathname.includes('result') && (
              <div className='flex items-center'>
                <input
                  type='file'
                  onChange={handleFileChange}
                  className='hidden'
                  id='file-upload'
                />
                <label
                  htmlFor='file-upload'
                  className='bg-primary w-[11rem] h-[2.6rem] rounded-2xl text-white font-medium flex items-center justify-center cursor-pointer'
                >
                  파일 업로드
                </label>
              </div>
            )}
          </div>

          <Outlet key={refreshKey} />
        </div>
      </div>

      {isModalOpen && (
        <div className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50'>
          <div className='bg-white p-4 rounded-lg'>
            <h2 className='text-lg font-medium mb-4'>파일 업로드 확인</h2>
            {selectedFile && (
              <div className='mb-4'>
                <p>선택된 파일: {selectedFile.name}</p>
              </div>
            )}
            <div className='flex justify-end'>
              <button
                onClick={handleFileUpload}
                className='bg-primary w-[11rem] h-[2.6rem] rounded-2xl text-white font-medium mr-2'
              >
                파일 등록하기
              </button>
              <button
                onClick={closeModal}
                className='bg-gray-300 w-[11rem] h-[2.6rem] rounded-2xl text-black font-medium'
              >
                취소
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PCLayout;
