import { Modal } from "bootstrap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logoBlack from "../images/logo_black.png";
import LoginForm from "./LoginForm";

function Header() {
  const modalEl = useRef();
  const [modal, setModal] = useState(''); 

  const [open, setOpen] = useState(false);

  const closeModal = () => {
    modal.hide();
    setOpen(false);
  };

  const handleClickModal = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
    // setOpen(true);
  }

  // const closeModal = () => {
  //   modal.hide();
  // }

  return (
    <>
      <nav className="navbar navbar-lg navbar-color">
        <div className="container-fluid">
          <div className="ms-1 pt-1 py-1">
            <Link className="navbar-brand" to="/">
              <img src={logoBlack} height={40} />
            </Link>
            <Link className="navbar-brand ms-4 font-title" to="/">
              ซื้อ
            </Link>
            <Link className="navbar-brand ms-4 font-title" to="/">
              ขาย
            </Link>
            <Link className="navbar-brand ms-4 font-title" to="/">
              ลงประกาศ
            </Link>
          </div>
          <form className="d-flex">
            {/* แสดงหลัง login */}
            {/* <button
              class="btn btn-outline-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              กวิสรา
            </button>
            <ul class="dropdown-menu dropdown-menu-end">
              <li>
                <a class="dropdown-item" href="#">
                  ประกาศของฉัน
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  แก้ไขข้อมูลส่วนตัว
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                 รายการโปรด
                </a>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  ออกจากระบบ
                </a>
              </li>
            </ul> */}

            <button className="btn-orange" type="button" onClick={handleClickModal}>
              เข้าสู่ระบบ/สมัครสมาชิก
            </button>
          </form>
        </div>
      </nav>

      {/* modal login */}
      <div className="modal fade" id="modal-register" tabIndex="-1" ref={modalEl}>
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">เข้าสู่ระบบ</h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
              ></button>
            </div>
            <div className="modal-body">
              <LoginForm open={open} onClose={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
