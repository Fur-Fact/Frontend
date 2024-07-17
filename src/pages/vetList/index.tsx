export default function Index() {
  return (
    <div className='flex flex-col justify-between h-4/5 items-center mx-14'>
      <div className='w-full h-full bg-white p-4 shadow-md rounded-lg  mt-[3%]'>
        <table className=' w-full h-full divide-y divide-gray-200'>
          <thead className='bg-gray-50'>
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
                  className='px-6 py-3  text-center text-base font-medium text-gray-500 '
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className='bg-white divide-y divide-gray-200'>
            {data.map((item, index) => (
              <tr key={index}>
                <td className='text-center px-6 py-4 whitespace-nowrap text-base text-gray-900'>
                  {item.number}
                </td>
                <td className='text-center px-6 py-4  text-base'>
                  {item.name}
                </td>
                <td className='text-center px-6 py-4 whitespace-nowrap text-base'>
                  {item.age}
                </td>
                <td className='text-center px-6 py-4 whitespace-nowrap text-base text-gray-900'>
                  {item.gender}
                </td>
                <td className='text-center px-6 py-4 whitespace-nowrap text-base text-gray-900'>
                  {item.species}
                </td>
                <td className='text-center px-6 py-4 whitespace-nowrap text-base text-gray-900'>
                  {item.weight}
                </td>
                <td className='text-center px-6 py-4 whitespace-nowrap text-base text-gray-900'>
                  {item.testDate}
                </td>
                <td className='text-center px-6 py-4 whitespace-nowrap text-base text-gray-900'>
                  {item.illness}
                </td>
                <td className='text-center px-6 py-4 whitespace-nowrap text-base text-gray-900'>
                  {item.request}
                </td>
                <td className='text-center px-6 py-4 whitespace-nowrap'>
                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
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
        <nav className='relative z-0 inline-flex rounded-md  -space-x-px'>
          <a
            href='#'
            className='relative inline-flex items-center  rounded-l-md border border-gray-300  text-base font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className='sr-only'>Previous</span>
            &lt;&lt;
          </a>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((page) => (
            <a
              key={page}
              href='#'
              className='relative inline-flex items-center px-4 py-2 border border-gray-300  text-base font-medium text-gray-700 hover:bg-gray-50'
            >
              {page}
            </a>
          ))}
          <a
            href='#'
            className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300  text-base font-medium text-gray-500 hover:bg-gray-50'
          >
            <span className='sr-only'>Next</span>
            &gt;&gt;
          </a>
        </nav>
      </div>
    </div>
  );
}

const data = [
  {
    number: 1,
    name: '코코코',
    age: '4세',
    gender: '여성',
    species: '강아지',
    weight: '5.6kg',
    testDate: '2024.06.21',
    illness: '없음',
    request: 'O',
  },
  {
    number: 2,
    name: '코코',
    age: '4세',
    gender: '여성',
    species: '강아지',
    weight: '5.6kg',
    testDate: '2024.06.21',
    illness: '없음',
    request: 'O',
  },
  {
    number: 3,
    name: '코코',
    age: '4세',
    gender: '여성',
    species: '강아지',
    weight: '5.6kg',
    testDate: '2024.06.21',
    illness: '없음',
    request: 'O',
  },
  {
    number: 4,
    name: '코코',
    age: '4세',
    gender: '여성',
    species: '강아지',
    weight: '5.6kg',
    testDate: '2024.06.21',
    illness: '없음',
    request: 'O',
  },
  {
    number: 5,
    name: '코코',
    age: '4세',
    gender: '여성',
    species: '강아지',
    weight: '5.6kg',
    testDate: '2024.06.21',
    illness: '없음',
    request: 'O',
  },
  {
    number: 6,
    name: '코코',
    age: '4세',
    gender: '여성',
    species: '강아지',
    weight: '5.6kg',
    testDate: '2024.06.21',
    illness: '없음',
    request: 'O',
  },
  {
    number: 7,
    name: '코코',
    age: '4세',
    gender: '여성',
    species: '강아지',
    weight: '5.6kg',
    testDate: '2024.06.21',
    illness: '없음',
    request: 'O',
  },
  {
    number: 8,
    name: '코코',
    age: '4세',
    gender: '여성',
    species: '강아지',
    weight: '5.6kg',
    testDate: '2024.06.21',
    illness: '없음',
    request: 'O',
  },
  // {
  //   number: 9,
  //   name: '코코',
  //   age: '4세',
  //   gender: '여성',
  //   species: '강아지',
  //   weight: '5.6kg',
  //   testDate: '2024.06.21',
  //   illness: '없음',
  //   request: 'O',
  // },
  // {
  //   number: 10,
  //   name: '코코',
  //   age: '4세',
  //   gender: '여성',
  //   species: '강아지',
  //   weight: '5.6kg',
  //   testDate: '2024.06.21',
  //   illness: '없음',
  //   request: 'O',
  // },
];
