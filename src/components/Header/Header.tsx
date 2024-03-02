import React from "react";
import "./Header.scss";

interface HeaderImageProps {
  src: string;
}

const HeaderImage: React.FC<HeaderImageProps> = ({ src }) => {
  return (
    <div className="header">
      <img src={src} alt="Header" />
    </div>
  );
};

export default HeaderImage;
