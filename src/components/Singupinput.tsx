function Singupinput({ placeholder, type, img, onChange, name, value }: any) {
  return (
    <div className="singup">
      <img src={img} alt="" />
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        name={name}
        value={value}
      />
    </div>
  );
}

export default Singupinput;
