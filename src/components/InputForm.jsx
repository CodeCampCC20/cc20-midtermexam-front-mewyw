function InputForm({
  error,
  handleChnage,
  value,
  placeHolder,
  type = 'text',
}) {
  return (
    <div className="flex flex-col w-full gap-1 cursor-pointer">
      <label className="flex items-center gap-1" html="email">
      </label>
      <input 
      className={`px-4 rounded-xl bg-ph-1 ${
        error ? "outline-0 outline-red-500" : "outline-0"
      }`}
      onChange={handleChnage}
      value={value}
      placeholder={placeHolder}
      type={type}
      
      />
      {error &&<p className="text-xs text-red-500">{error}</p>}
    </div>
  )
}

export default InputForm;