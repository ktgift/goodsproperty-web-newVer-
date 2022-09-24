import { Toast, toast } from "bootstrap";
import { useContext, useEffect, useRef } from "react";
import { useError } from "../context/ErrorContext";

function ToastError() {
  const { error, setError } = useError();
  const toastEl = useRef();

  useEffect(() => {
    if (error) {
      const toast = new Toast(toastEl.current);
      toast.show();
      setTimeout(() => setError(null), 5000);
    }
  }, [error]);

  return (
    <div className="toast align-items-center position-absolute bottom-0 start-50 translate-middle-x mt-5 " style={{ zIndex: 3000 }} role="alert" ref={toastEl}>
      <div className="d-flex">
        <div className="toast-body text-danger">
          <span>
            <i className="fa-sharp fa-solid fa-circle-exclamation" />
            {" " + error}
          </span>
        </div>
        <button
          type="button"
          className="btn-close me-2 m-auto"
          data-bs-dismiss="toast"
          aria-label="Close"
        ></button>
      </div>
    </div>

  );
}

export default ToastError;
