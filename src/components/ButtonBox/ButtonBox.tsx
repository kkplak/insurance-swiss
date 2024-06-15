// src/components/ButtonBox/ButtonBox.tsx
import React from "react";
import { Link } from "react-router-dom";
import "./ButtonBox.css";

interface ButtonBoxProps {
  icon: string;
  title: string;
  description: string;
  link: string;
}

const ButtonBox: React.FC<ButtonBoxProps> = ({
  icon,
  title,
  description,
  link,
}) => {
  return (
    <Link to={link} className='button-box'>
      <img src={icon} alt={`${title} icon`} className='button-box-icon' />
      <h3 className='button-box-title'>{title}</h3>
      <p className='button-box-description'>{description}</p>
    </Link>
  );
};

export default ButtonBox;
