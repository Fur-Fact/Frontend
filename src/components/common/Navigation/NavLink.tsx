import { Link, useLocation } from "react-router-dom";
import {  useState } from "react";

interface NavLinkProps {
  to: string;
  defaultImg: string;
  focusImg: string;
  altText: string;
}

const NavLink = ({ to, defaultImg, focusImg, altText }:NavLinkProps) => {
  const location = useLocation();
  const [hovered, setHovered] = useState(false);
  const isActive = location.pathname === to;

  const getImgSrc = () => {
    if (isActive) {
      return focusImg;
    }
    return hovered ? focusImg : defaultImg;
  };

  return (
    <Link
      to={to}
      className="flex-1 flex justify-center"
      onTouchStart={() => setHovered(true)}
      onTouchEnd={() => setHovered(false)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img src={getImgSrc()} alt={altText} />
    </Link>
  );
};

export default NavLink