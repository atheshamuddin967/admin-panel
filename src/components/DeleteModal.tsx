import "../styles/global.scss";
import { IoMdClose } from "react-icons/io";

function DeleteModal({ title, button, item, closeDelete }: any) {
  const handledelete = (item: any) => {
    button(item);
    closeDelete();
  };
  return (
    <div className="deletlayout">
      <div className="headerdelte">
        <button onClick={closeDelete}>
          <IoMdClose />
        </button>
      </div>
      <div className="Headerdetails">
        <p>Do you want to delete this {title}</p>
        <button
          onClick={() => {
            handledelete(item);
          }}
        >
          Delete
        </button>
        <button className="cancel" onClick={closeDelete}>
          Cancel
        </button>
      </div>
    </div>
  );
}

export default DeleteModal;
