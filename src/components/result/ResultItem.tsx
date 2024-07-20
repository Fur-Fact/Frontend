interface ResultItemProps {
  element: string;
  label: string;
  value: number;
  color: string;
}

function ResultItem({ element, label, value, color }: ResultItemProps) {
  return (
    <div className='flex items-start py-2'>
      <div className='flex'>
        <span className='w-7 text-start text-black text-sm'>{element}</span>
        <span className='w-14 text-start text-black text-sm'>{label}</span>
        <span className='w-20 text-start text-black text-sm'>{value}ppm</span>
      </div>
      <div
        className='w-32 h-5 rounded-tr-full rounded-br-full shadow-sm'
        style={{ background: color }}
      ></div>
    </div>
  );
}

export default ResultItem;
