import React from "react";
import { IoCallOutline } from "react-icons/io5";
const Button = ({ display }) => {
  return (
    <button
      type="button"
      className={`${display}  text-red-600  focus:ring-4 border-[1px] border-red-600 font-medium rounded-lg text-xl px-5 py-2 items-center gap-4 me-2 mb-2    `}
    >
      <IoCallOutline size={24} /> 1800-121-0140
    </button>
  );
};

export default Button;
