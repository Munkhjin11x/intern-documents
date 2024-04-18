import React from "react";
import Arrow from "../assets/Arrow";

const Button = ({ path, label }: any) => {
  return (
    <a href={`${path}`}>
      <button className="text-[#4ADF7E] hover:bg-[#252525] mt-2  items-center gap-4 flex">
      {label}  <Arrow /> 
      </button>
    </a>
  );
};

export default Button;
