import React, { useState } from 'react';
import Input from '../../components/common/Input';
import { Link } from 'react-router-dom';
import FullButton from '../../components/common/FullButton';

const SignUp = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [isNameValid, setIsNameValid] = useState(false);
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);

  const handleNameChange = (e) => {
    const value = e.target.value;
    setName(value);
    setIsNameValid(value.length >= 2); // 예: 이름은 최소 2자 이상
  };

  const handleIdChange = (e) => {
    const value = e.target.value;
    setId(value);
    setIsIdValid(value.length >= 5); // 예: 아이디는 최소 5자 이상
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length >= 6); // 예: 비밀번호는 최소 6자 이상
    setIsConfirmPasswordValid(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsConfirmPasswordValid(value === password);
  };

  const handleSignUp = () => {
    alert('회원가입 성공');
  }

  const isFormValid = isNameValid && isIdValid && isPasswordValid && isConfirmPasswordValid;

  return (
    <section className="flex flex-col h-full justify-center bg-[#FEFEFE]">
      <div className="flex flex-col h-full font-bold justify-between items-start m-8 mt-16">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl font-sans">
            회원가입
          </h1>
        </div>
        <div>
          <Input
            label="이름"
            placeholder="이름"
            value={name}
            onChange={handleNameChange}
          />
          <Input
            label="아이디"
            placeholder="아이디"
            value={id}
            onChange={handleIdChange}
          />
          <Input
            label="비밀번호"
            type="password"
            placeholder="비밀번호"
            value={password}
            onChange={handlePasswordChange}
          />
          <Input
            label="비밀번호 확인"
            type="password"
            placeholder="비밀번호 확인"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
          <div className="w-full flex flex-row justify-center">
            <div className="flex flex-row justify-center">
              계정이 있으신가요? <Link to="/login"> 로그인</Link>
            </div>
          </div>
        </div>
        <FullButton onClick={handleSignUp} disabled={!isFormValid}>
          회원가입
        </FullButton>
      </div>
    </section>
  );
};

export default SignUp;
