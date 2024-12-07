import { useState } from "react";
import { CgCloseR } from "react-icons/cg";
import "./modal.scss";
export default function Modal() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => {
    setShowModal(!showModal);
  };
  const handleClose = () => {
    setShowModal(false);
  };
  return (
    <>
      <button onClick={handleClick}>Click</button>
      {showModal && (
        <div className="modal">
          <div className="modal__body">
            <div className="modal__close" onClick={handleClose}>
              <CgCloseR />
            </div>
            <div className="modal__content">Nội dung</div>
          </div>
        </div>
      )}
    </>
  );
}
