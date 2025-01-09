"use client";

import { ChangeEvent } from "react";

export type FieldProps = {
  label: string;
  placeholder?: string;
  type?: string;
  svg?: React.ReactNode;
  defaultValue?: any;
  className?:any,
  onChange: any | ChangeEvent<HTMLSelectElement>,
   name:string
};
const TextInputWithEvent = ({
  type,
  label,
  placeholder,
  svg,
  defaultValue,
  onChange,
  className,
  name
}: FieldProps) => {

   return (
    <div className="mb-4 w-full">
      <label className="mb-2.5 block font-medium text-white capitalize dark:text-white">
        {label}
      </label>
      <div className="relative">
        <input
          type={type ?? "text"}
          placeholder={placeholder ?? `Enter ${label}`}
          className={`w-full rounded-lg border-stroke border  bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none ${className}`}
          defaultValue={defaultValue}
          name={name}
          onChange={onChange}
        />
        {svg ? <span className="absolute right-4 top-4">{svg}</span> : ""}
      </div>
    </div>
  );
};

export default TextInputWithEvent;
