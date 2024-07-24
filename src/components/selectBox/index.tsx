import { useState } from 'react';

function Dropdown({ options, selected, onChange }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='relative flex flex-col w-[14.25rem] text-left z-10'>
      <div className='flex '>
        <button
          type='button'
          className='flex w-full justify-between rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none'
          onClick={() => setIsOpen(!isOpen)}
        >
          {selected}
          <svg
            className='h-5 w-5'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 20 20'
            fill='currentColor'
            aria-hidden='true'
          >
            <path
              fillRule='evenodd'
              d='M10 12a1 1 0 01-.707-.293l-5-5a1 1 0 011.414-1.414L10 9.586l4.293-4.293a1 1 0 111.414 1.414l-5 5A1 1 0 0110 12z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className='absolute w-full top-full mt-2 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50'>
          <div className='py-1' role='menu'>
            {options.map((option) => (
              <button
                key={option}
                onClick={() => {
                  onChange(option);
                  setIsOpen(false);
                }}
                className='px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left'
                role='menuitem'
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
