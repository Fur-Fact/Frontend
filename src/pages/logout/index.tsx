import useAuthStore from "../../store/useAuthStore";

const Logout = () => {

  const { clearToken } = useAuthStore()

  return (
    <section className='flex flex-col justify-center bg-[#FEFEFE]'>
      <button onClick={clearToken}>로그아웃</button>
    </section>
  );
};

export default Logout;
