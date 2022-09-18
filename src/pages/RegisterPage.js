import { useState } from "react";
import { Link } from "react-router-dom";
import logoBlack from "../images/logo_black.png";

function RegisterPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');


  return (
    <>
      <nav className="navbar navbar-lg navbar-color">
        <div className="container-fluid">
          <div className="ms-1 pt-1 py-1">
            <Link className="navbar-brand" to="/">
              <img src={logoBlack} height={40} />
            </Link>
            <Link className="navbar-brand ms-4 font-title" to="/">
              หน้าหลัก
            </Link>
          </div>
        </div>
      </nav>
      {/* form */}
      <div className="container-fluid">
        <form className="row align-items-center justify-content-center">
          <div className="col-8 mt-5 mb-5 div-border-gray">
            <div className="row justify-content-start">
                <h1 className="font-h1-black mt-5 mb-5 ">
                  สร้างบัญชี GOODS PROPERTY
                </h1>            
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <input
                  className="input-s mb-4"
                  type="text"
                  placeholder="ชื่อ"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <input
                  className="input-s mb-4"
                  type="text"
                  placeholder="นามสกุล"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  className="input-m mb-4"
                  type="text"
                  placeholder="เบอร์โทรศัพท์"
                  value={phonenumber}
                  onChange={(e) => setPhonenumber(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  className="input-m mb-4"
                  type="email"
                  placeholder="อีเมล"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <input
                  className="input-s mb-1"
                  type="password"
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <input
                  className="input-s mb-1"
                  type="password"
                  placeholder="ยืนยันรหัสผ่าน"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <p className="font-body text-left ms-5">ใช้อักษระ 8 ตัวขึ้นไป</p>
              </div>
            </div>
            <div className="row justify-content-left ">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12 justify-content-left mb-4">
                <input style={{ float: "left", marginLeft: "3rem" }} type="checkbox" id="showPassword" />
                <label className="font-body" style={{ float: "left", marginLeft: "0.125rem", marginTop: "-0.25rem" }} for="showPassword"> แสดงรหัสผ่าน</label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn-blue mb-5">สมัครสมาชิก</button>
              </div>
            </div>

          </div>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
