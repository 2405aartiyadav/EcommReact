import React from "react";
import { useForm } from "react-hook-form";

function AccountSettingInput({
  label,
  type,
  id,
  name,
  value,
  handleInputChange,
}) {
  const {
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm();
  return (
    <div className="flex-1">
      <label className="block mb-2 text-sm font-medium text-gray-500dark:text-white">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleInputChange}
        className="block  w-96 p-2 text-gray-500 border border-gray-300 rounded-2xl bg-gray-50 text-base"
      />
    </div>
  );
}

export default AccountSettingInput;
