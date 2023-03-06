import { displayValue } from "@tanstack/react-query-devtools/build/lib/utils";
import { ChangeEvent, useId } from "react";

type InputProps = {
  label: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  id?: string;
};

export const Input = ({ label, value, name, onChange, id }: InputProps) => {
  const generatedId = useId();
  return (
    <div className="w-full">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor={id ? id : generatedId}
      >
        {label}
      </label>
      <input
        className="appearance-none block w-full bg-white text-gray-700 border-2 border-gray-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        name={name}
        id={id ? id : generatedId}
        type="text"
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
