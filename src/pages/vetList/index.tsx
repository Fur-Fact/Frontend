import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface Item {
  id: string;
  petName: string;
  age: string;
  gender: string;
  species: string;
  weight: string;
  resultDate: string;
  hereditary_disease: string | null;
  request: string;
  status: string;
}

export default function Index() {
  const [list, setList] = useState<Item[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    getList(currentPage);
  }, [currentPage]);

  const getList = async (page: number) => {
    // const token = sessionStorage.getItem('token');
    try {
      const response = await axios.get(
        `http://localhost:3000/api/v1/tests?page=${page}&limit=10`
        // {
        //   headers: {
        //     Authorization: `Bearer ${token}`,
        //   },
        // }
      );

      if (response.status === 200) {
        setList(response.data.data.data);
        setTotalPages(response.data.data.totalPages); // 서버에서 총 페이지 수를 반환한다고 가정
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPageGroup = () => {
    if (currentPage + 10 <= totalPages) {
      setCurrentPage((prevPage) => prevPage + 10);
    } else {
      setCurrentPage(totalPages);
    }
  };

  const handlePrevPageGroup = () => {
    if (currentPage - 10 > 0) {
      setCurrentPage((prevPage) => prevPage - 10);
    } else {
      setCurrentPage(1);
    }
  };

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const getPaginationGroup = () => {
    const group = Math.ceil(currentPage / 10);
    const start = (group - 1) * 10 + 1;
    const end = Math.min(group * 10, totalPages);
    return [...Array(end - start + 1)].map((_, index) => start + index);
  };

  const handleRowClick = (testID: string) => {
    navigate(`/vet/result/${testID}`);
  };

  return (
    <div className='flex flex-col justify-between h-4/5 items-center mx-14'>
      <div className='w-full h-full bg-white p-4 shadow-md rounded-lg mt-[3%]'>
        <table className='w-full divide-y divide-gray-200'>
          <thead className='bg-gray-50 '>
            <tr>
              {[
                '번호',
                '이름',
                '나이',
                '성별',
                '종',
                '몸무게',
                '검사 날짜',
                '보유 질병',
                '요청',
                '조회',
              ].map((header) => (
                <th
                  key={header}
                  className='px-6 py-3 text-center text-base font-medium text-gray-500'
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <br />
          <tbody className='bg-white divide-y divide-gray-200'>
            {list.reverse().map((item, index) => (
              <tr
                key={index}
                onClick={() => handleRowClick(item.id)}
                className='cursor-pointer hover:bg-gray-100'
              >
                <td className='text-center px-6 py-2 whitespace-nowrap text-base text-gray-900'>
                  {index + 1}
                </td>
                <td className='text-center px-6 py-2 text-base'>
                  {item.petName}
                </td>
                <td className='text-center px-6 py-2 whitespace-nowrap text-base'>
                  {item.age}
                </td>
                <td className='text-center px-6 py-2 whitespace-nowrap text-base text-gray-900'>
                  {item.gender}
                </td>
                <td className='text-center px-6 py-2 whitespace-nowrap text-base text-gray-900'>
                  {item.species}
                </td>
                <td className='text-center px-6 py-2 whitespace-nowrap text-base text-gray-900'>
                  {item.weight}kg
                </td>
                <td className='text-center px-6 py-2 whitespace-nowrap text-base text-gray-900'>
                  {item.resultDate.split('T')[0]}
                </td>
                <td className='text-center px-6 py-2 whitespace-nowrap text-base text-gray-900'>
                  {item.hereditary_disease === null
                    ? '없음'
                    : item.hereditary_disease}
                </td>
                <td className='text-center px-6 py-2 whitespace-nowrap text-base text-gray-900'>
                  {item.status === '코멘트 대기' ? 'O' : 'X'}
                </td>
                <td className='text-center px-6 py-2 whitespace-nowrap'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded'>
                    조회
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* 페이지네이션 바 */}
      <div className='mt-[2%] flex justify-center'>
        <nav className='relative z-0 inline-flex rounded-md -space-x-px'>
          <button
            onClick={handlePrevPageGroup}
            className='relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 text-base font-medium text-gray-500 hover:bg-gray-50'
          >
            &lt;&lt;
          </button>
          {getPaginationGroup().map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`relative inline-flex items-center px-4 py-2 border border-gray-300 text-base font-medium ${
                page === currentPage
                  ? 'text-white bg-blue-500'
                  : 'text-gray-700 hover:bg-gray-50'
              }`}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNextPageGroup}
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 text-base font-medium text-gray-500 hover:bg-gray-50'
          >
            &gt;&gt;
          </button>
        </nav>
      </div>
    </div>
  );
}
