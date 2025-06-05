import React from 'react'

function InputForm({
  error,
  text,
  icon: Icon,
  handleChange,
  value,
  type = "checkbox",
  id,
 }) {
  return (
    <div className="flex flex-col w-full gap-1 cursor-pointer">
   

        <Icon className="w-5 h-5 " strokeWidth={2}  /> {text}

      <input
        className={`h-15 px-4 rounded-2xl bg-ph-1 text-gray-500 text-xl ${
          error ? "outline-1 outline-red-500" : "outline-0"
          } `}
        onChange={handleChange}
        id={id}
        value={value}
        type={type}
        placeholder={placeholder}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>

  )
}

export default InputForm