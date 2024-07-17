import SelectBox from '../../components/selectBox'

export default function index() {
  return (
    <div className='flex flex-col justify-between h-4/5 items-center mx-14'>
      <SelectBox
        options={['1차-2021-06-29', '1차-2021-06-29', '1차-2021-06-29']}
        selected={'1차-2021-06-29'}
        onChange={onchange}
      />
      <div className='w-full h-full bg-white p-4 shadow-md rounded-lg mt-[3%]'></div>
    </div>
  );
}
