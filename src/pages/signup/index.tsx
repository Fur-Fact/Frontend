import { useState, ChangeEvent } from 'react';
import Input from '../../components/common/Input';
import { Link, useNavigate } from 'react-router-dom';
import FullButton from '../../components/common/FullButton';
import axios, { AxiosError } from 'axios';

const SignUp = () => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [phone, setPhone] = useState('');

  const [isNameValid, setIsNameValid] = useState(false);
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isConfirmPasswordValid, setIsConfirmPasswordValid] = useState(false);
  const [isPhoneValid, setIsPhoneValid] = useState(false);

  const navigate = useNavigate();

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setName(value);
    setIsNameValid(value.length >= 2);
  };

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);
    setIsIdValid(value.length >= 5);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length >= 6); 
    setIsConfirmPasswordValid(value === confirmPassword);
  };

  const handleConfirmPasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setConfirmPassword(value);
    setIsConfirmPasswordValid(value === password);
  };

  const handlePhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPhone(value);
    setIsPhoneValid(/^\d{10,11}$/.test(value));
  };

  const handleSignUp = async () => {
    try {
      const response = await axios.post('http://3.37.180.182:3000/api/v1/users/signup', {
        name: name,
        email: id,
        password: password,
        phone: phone,
      });

      if (response.status === 200) {
        alert('회원가입 성공');
        navigate('/login');
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.status === 400) {
        alert('중복된 이메일 또는 필드 누락');
      } else {
        alert('error');
        console.log(axiosError);
      }
    }
  };

  const isFormValid = isNameValid && isIdValid && isPasswordValid && isConfirmPasswordValid && isPhoneValid;

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
            label="휴대폰 번호"
            placeholder="휴대폰 번호"
            value={phone}
            onChange={handlePhoneChange}
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
            <div className="flex flex-row text-xs justify-center">
              계정이 있으신가요? <Link className='text-primary font-bold hover:text-blue-500' to="/login">로그인</Link>
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
