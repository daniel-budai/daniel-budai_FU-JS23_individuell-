import React from "react";
import "./Footer.scss";

interface FooterImageProps {
  src: string;
}

const FooterImage: React.FC<FooterImageProps> = ({ src }) => {
  return (
    <div className="footer">
      <img src={src} alt="Footer" />
    </div>
  );
};

export default FooterImage;
