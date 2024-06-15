import React from "react";
import "./LogoLine.css";

interface LogoLineProps {
  logos: string[];
}

const LogoLine: React.FC<LogoLineProps> = ({ logos }) => {
  return (
    <div className='logo-line'>
      {logos.map((logo, index) => (
        <img
          key={index}
          src={logo}
          alt={`Logo ${index + 1}`}
          className='logo-image'
        />
      ))}
    </div>
  );
};

export default LogoLine;
