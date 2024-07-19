import SelectBox from '../../components/selectBox';
import Chart from '../../components/chart'

export default function index() {
  return (
    <div className='flex flex-col justify-between h-4/5 items-center mx-14'>
      <div className='w-full h-full bg-white p-4 shadow-md rounded-lg mt-[3%]'>
        <SelectBox
          options={['1차-2021-06-29', '1차-2021-06-29', '1차-2021-06-29']}
          selected={'1차-2021-06-29'}
          onChange={onchange}
        />

        <div className='max-w-full h-4/6 overflow-x-auto p-2 mt-1'>
          <Chart/>
        </div>

        {/* 코멘트 입력 */}
        <div className='flex flex-col mt-4 w-full h-1/6 '>
          <textarea
            className='flex-grow border rounded-md p-4'
            placeholder='코멘트를 입력하세요'
          ></textarea>
        </div>

        {/* 입력 버튼 */}
        <div className='flex justify-end mt-4'>
          <button className='bg-blue-500 text-white px-4 py-2 rounded-md'>
            코멘트 등록하기
          </button>
        </div>
      </div>
    </div>
  );
}
