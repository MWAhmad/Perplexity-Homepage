import { useState } from "react";
import { useDispatch } from "react-redux";
// import { RiCloseLine } from "react-icons/ri";

const Modal = ({ setIsOpen, children }) => {
  const dispatch = useDispatch();

  const [closeControl, setCloseControl] = useState(false)

  const handleCloseRequest = () => {
    setCloseControl(true)
    setTimeout(() => {
      dispatch(setIsOpen(false))
    },250)
  }


  return (
    <>
      <div className="darkBG" style={closeControl ? {animationName: "fade-out"} : {}} onClick={handleCloseRequest}/>
      <div className="centered">
        <div className={`modal`} style={closeControl ? {animationName: "scaled-down"} : {}}>
          <div className="modal-top">
          </div>
          <button className="closeBtn" onClick={handleCloseRequest}>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
              <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
            </svg>
          </button>
          <div className="modalContent">
            {children}
          </div>
        </div>
      </div>

    </>
  );
};

export default Modal;