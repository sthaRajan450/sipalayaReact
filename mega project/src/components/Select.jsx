import React, { forwardRef, useId } from "react";

const Select = ({ options = [], label, className = "", ...props }, ref) => {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="block mb-1 font-medium">
          {label}
        </label>
      )}

      <select
        {...props}
        id={id}
        ref={ref}
        className={`${className} px-3 py-2 bg-white text-black outline-none focus:grayscale-75 duration-100 border border-gray-200 w-full`}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default forwardRef(Select);
