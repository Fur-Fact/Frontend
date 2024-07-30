import { useState, ChangeEvent } from 'react';
import Input from '../../components/common/Input';
import { Link, useNavigate } from 'react-router-dom';
import FullButton from '../../components/common/FullButton';
import axios, { AxiosError } from 'axios';
import useAuthStore from '../../store/useAuthStore';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const navigate = useNavigate();
  const { setToken } = useAuthStore();

  const handleIdChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setId(value);
    setIsIdValid(value.length >= 5);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length >= 6);
  };

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}api/v1/users/login`, {
        email: id,
        password: password,
      });
      console.log(response);
      if (response.status === 200) {
        alert('로그인 되었습니다!');
        setToken(response.data.access_token);
        navigate('/');
      }
    } catch (error) {
      const axiosError = error as AxiosError;
      if (axiosError.response && axiosError.response.status === 400) {
        alert('잘못된 이메일 또는 비밀번호');
      } else {
        alert('서버 오류');
      }
    }
  };

  const isFormValid = isIdValid && isPasswordValid;

  return (
    <section className="flex flex-col h-full justify-center bg-[#FEFEFE]">
      <div className="flex flex-col h-full font-bold justify-between items-start m-8 mt-16">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl leading-[4rem] font-sans">
            안녕하세요,
          </h1>
          <h1 className="text-5xl">
            퍼팩트입니다!
          </h1>
        </div>
        <div>
          <Input
            placeholder="아이디"
            value={id}
            onChange={handleIdChange}
          />
          <Input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={handlePasswordChange}
          />
          <div className="w-full flex flex-row justify-center">
            <div className="flex flex-row text-xs justify-center">
              회원이 아니신가요? <Link className='text-primary font-bold hover:text-blue-500' to="/signup"> 회원가입</Link>
            </div>
          </div>
        </div>
        <FullButton onClick={handleLogin} disabled={!isFormValid}>
          로그인
        </FullButton>
      </div>
    </section>
  );
};

export default Login;
