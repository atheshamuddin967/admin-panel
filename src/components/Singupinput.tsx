function Singupinput({ placeholder, type, img, onChange }: any) {
  return (
    <div className="singup">
      <img src={img} alt="" />
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

export default Singupinput;
