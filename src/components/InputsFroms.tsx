function InputsFroms({ label, placeholder }: any) {
  return (
    <div className="flex">
      <label htmlFor={label}>{label}</label>
      <input type="text" name={label} id="" placeholder={placeholder} />
    </div>
  );
}

export default InputsFroms;
