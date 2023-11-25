import InputsFroms from "./InputsFroms";

function FormsVehicle({
  buttonlabel,
  label1,
  label2,
  label3,
  label4,
  placeholder1,
  placeholder2,
  placeholder3,
  placeholder4,
  closemodal,
  formtitle,
}: any) {
  return (
    <div className="fromLayout">
      <div className="formbg">
        <div className="formData">
          <h6>{formtitle}</h6>
          <InputsFroms label={label1} placeholder={placeholder1} />
          <InputsFroms label={label2} placeholder={placeholder2} />
          <InputsFroms label={label3} placeholder={placeholder3} />
          <InputsFroms label={label4} placeholder={placeholder4} />
          <button>{buttonlabel}</button>

          <div className="closebtn">
            <button onClick={closemodal}>
              <i className="fa-solid fa-xmark"></i>
            </button>
            {buttonlabel === "Edit" && (
              <button onClick={closemodal}>
                <i className="fa-solid fa-trash"></i>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default FormsVehicle;
