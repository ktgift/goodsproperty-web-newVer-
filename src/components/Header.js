import { Modal } from "bootstrap";
import { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthen } from "../context/AuthenContext";
import logoBlack from "../images/logo_black.png";
import LoginForm from "./LoginForm";

function Header() {
  const { user, logout } = useAuthen();
  const modalEl = useRef();
  const [modal, setModal] = useState("");

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleClickModalLogin = () => {
    const modalObj = new Modal(modalEl.current);
    setModal(modalObj);
    modalObj.show();
    // setOpen(true);
  };

  const closeModal = () => {
    modal.hide();
    // setOpen(false);
  };

  // const handleClickPost = (url, user) => {
  //   if (user) {
  //     window.open(url, "_blank");
  //     console.log(user);
  //   } else {
  //     handleClickModalLogin();
  //   }
  // };
  const handleClickPost = (user) => {
    if (!user) {
      handleClickModalLogin();
    } else {
      navigate("/post-property1")
    }
  };

  return (
    <>
      <nav className="navbar navbar-lg navbar-color">
        <div className="container-fluid">
          <div className="ms-1 pt-1 py-1">
            <Link className="navbar-brand" to="/">
              <img src={logoBlack} height={40} />
            </Link>
            <Link className="navbar-brand ms-4 font-title" to="/sale">
              ซื้อ
            </Link>
            <Link className="navbar-brand ms-4 font-title" to="/rent">
              เช่า
            </Link>
            <button
              className="btn btn-form-outline pt-0 font-title"
              type="button"
              onClick={() =>
                // handleClickPost("http://localhost:3000/post-property1", user)
                handleClickPost(user)
              }
            >
              ลงประกาศ
            </button>
          </div>
          <form className="d-flex">
            {user ? (
              // {/* แสดงหลัง login */}
              <>
                <button
                  className="btn btn-outline-secondary dropdown-toggle"
                  type="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  {user.firstname}
                </button>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li>
                    <Link className="dropdown-item" to="/my-post">
                      ประกาศของฉัน
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to={`/profile/` + user.id}>
                      แก้ไขข้อมูลส่วนตัว
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/like">
                      รายการโปรด
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/" onClick={logout}>
                      ออกจากระบบ
                    </Link>
                  </li>
                </ul>
              </>
            ) : (
              <button
                className="btn-orange"
                type="button"
                onClick={handleClickModalLogin}
              >
                เข้าสู่ระบบ/สมัครสมาชิก
              </button>
            )}
          </form>
        </div>
      </nav>

      {/* modal login */}
      <div
        className="modal fade"
        id="modal-register"
        tabIndex="-1"
        ref={modalEl}
      >
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
              <LoginForm open={open} closeModal={closeModal} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
