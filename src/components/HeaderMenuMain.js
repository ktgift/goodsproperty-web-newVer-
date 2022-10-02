import logoPic from "../images/logo_black.png";
import { Link } from "react-router-dom";
import { useAuthen } from "../context/AuthenContext";

function HeaderMenuMain() {
  const { user, logout } = useAuthen();

  return (
    <>
      <div>
        <nav className="navbar navbar-lg navbar-color">
          <div className="container-fluid">
            <div className="ms-1 pt-1 py-1">
              <Link className="navbar-brand" to="/">
                <img src={logoPic} height={40} />
              </Link>
              <Link className="navbar-brand ms-4 font-title" to="/">
                หน้าหลัก
              </Link>
            </div>
            <form className="d-flex">
              <button
                className="btn btn-orange dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user?.firstname}
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
            </form>
          </div>
        </nav>
      </div>
    </>
  );
}

export default HeaderMenuMain;
