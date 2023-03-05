import { ChangeEvent, useId } from "react";

type TextareaProps = {
  label: string;
  value: string;
  name: string;
  onChange: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  id?: string;
};

export const Textarea = ({
  label,
  value,
  name,
  onChange,
  id,
}: TextareaProps) => {
  const generatedId = useId();
  return (
    <div className="w-full">
      <label
        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
        htmlFor="grid-title"
      >
        {label}
      </label>
      <textarea
        className="appearance-none block w-full h-20 bg-white text-gray-700 border-2 border-blue-400 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
        name={name}
        id={id ? id : generatedId}
        onChange={onChange}
        value={value}
      />
    </div>
  );
};
