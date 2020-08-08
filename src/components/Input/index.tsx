import React, { FC } from "react";
import "./styles.css";

interface InputProps {
    label:string

}

const Input: React.FC<InputProps> = ({ label }) => {
  return (
    <div className="input-block">
      <label htmlFor="subject">{label}</label>
      <input type="text" id="subject" />
    </div>
  );
};

export default Input;
