import  { useState } from 'react';
import Input from '../../components/common/Input';
import { Link } from 'react-router-dom';
import FullButton from '../../components/common/FullButton';

const Login = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [isIdValid, setIsIdValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);

  const handleIdChange = (e:any) => {
    const value = e.target.value;
    setId(value);
    setIsIdValid(value.length >= 5);
  };

  const handlePasswordChange = (e:any) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.length >= 6);
  };

  const handleLogin = () => {
    alert('로그인');
  }

  const isFormValid = isIdValid && isPasswordValid;

  return (
    <section className="flex flex-col h-full justify-center bg-[#FEFEFE]">
      <div className="flex flex-col h-full font-bold justify-between items-start m-8 mt-16">
        <div className="flex flex-col items-start">
          <h1 className="text-5xl leading-[4rem]	 font-sans">
            안녕하세요,
          </h1>
          <h1 className="text-5xl">
            돌아오셨네요!
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
            <div className="flex flex-row justify-center">
              회원이 아니신가요? <Link to="/signup"> 회원가입</Link>
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
