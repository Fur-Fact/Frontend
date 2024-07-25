import  { ReactNode, ButtonHTMLAttributes } from 'react';

interface FullButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  disabled?: boolean;
}

const FullButton= ({ children, disabled, ...props }:FullButtonProps) => {
  return (
    <button
      className={`w-full h-16 rounded-full ${disabled ? 'bg-gray-300 cursor-not-allowed' : 'bg-primary hover:bg-blue-700 text-white cursor-pointer'}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default FullButton;
