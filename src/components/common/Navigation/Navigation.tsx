import Alarm from "../../../assets/Alarm.png";
import MyPage from "../../../assets/MyPage.png";
import Home from "../../../assets/Home.png";
import Alarm_Focus from "../../../assets/Alarm_Focus.png";
import MyPage_Focus from "../../../assets/MyPage_Focus.png";
import Home_Focus from "../../../assets/Home_Focus.png";
import NavLink from "./NavLink";


const Navigation = () => {
  return (
    <div className="w-full flex flex-row justify-around items-center h-16 bg-white">
      <NavLink to="/" defaultImg={Home} focusImg={Home_Focus} altText="Alarm" />
      <NavLink to="/alarm" defaultImg={Alarm} focusImg={Alarm_Focus} altText="Home" />
      <NavLink to="/myPage" defaultImg={MyPage} focusImg={MyPage_Focus} altText="MyPage" />
    </div>
  );
};

export default Navigation;
