import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Wave from "../components/Wave";
import { useAuthen } from "../context/AuthenContext";
import { useError } from "../context/ErrorContext";
import logoHomeW from "../images/LOGO_homeWhite.png";

function RegisterPage() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [firstnameError, setFirstnameError] = useState("");
  const [lastnameError, setLastnameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmError, setConfirmError] = useState("");

  const { register } = useAuthen();
  const { setError } = useError()

  const navigate = useNavigate()

  const handleSubmitLogin = async (e) => {
    try {
      e.preventDefault();

      if (!firstname || firstname.match(/^[0-9]*$/)) {
        return setFirstnameError("กรุณากรอกชื่อ หรือใช้ชื่อเป็นตัวอักษร");
      } else {
        setFirstnameError(false);
        // setFirstname(firstname)
      }

      if (!lastname || lastname.match(/^[0-9]*$/)) {
        return setLastnameError("กรุณากรอกนามสกุล หรือใช้นามสกุลเป็นตัวอักษร");
      } else {
        setLastnameError(false);
      }

      if (!phoneNumber || !phoneNumber.match(/^[0-9]*$/)) {
        return setPhoneError("กรุณากรอกเบอร์โทร หรือกรอกเป็นตัวเลข");
      } else {
        setPhoneError(false);
      }

      if (!email) {
        return setEmailError("กรุณากรอกอีเมล");
      } else if (!email.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i)) {
        return setEmailError("รูปแบบอีเมลไม่ถูกต้อง");
      } else {
        setEmailError(false);
      }

      if (!password) {
        return setPasswordError("กรุณากรอกรหัสผ่าน");
      } else if (password.length < 8) {
        return setPasswordError("ใช้อักษระ 8 ตัวขึ้นไป");
      } else {
        setPasswordError(false);
      }

      if (!confirmPassword) {
        return setPasswordError("ยืนยันรหัสผ่าน");
      } else if (password !== confirmPassword) {
        return setPasswordError("รหัสผ่านไม่ตรงกัน");
      } else {
        setConfirmError(false);
      }

      await register({
        firstname,
        lastname,
        phoneNumber,
        email,
        password,
        confirmPassword,
      });

      navigate('/')

      setFirstname('');
      setLastname('');
      setPhoneNumber('');
      setEmail('');
      setPassword('');
      setConfirmPassword('');

    } catch (err) {
      console.log(err)
      setError(err.response.data.message)
    }
  };

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <>
      {/* header */}
      <div>
      <nav className="navbar navbar-lg navbar-color" >
        <div className="container-fluid">
          <div className="ms-1 pt-1 py-1">
            <Link className="navbar-brand" to="/">
              <img src={logoHomeW} height={40} />
            </Link>
            <Link className="navbar-brand ms-4 font-title" to="/">
              หน้าหลัก
            </Link>
          </div>
        </div>
      </nav>
      </div>
      {/* form */}
      <div className="container-fluid">
        <form
          className="row align-items-center justify-content-center"
          onSubmit={handleSubmitLogin}
        >
          <div className="col-5 mt-5 mb-5 div-border-gray">
            <div className="row justify-content-start">
              <h1 className="font-h1-black mt-5 mb-5 ">
                สร้างบัญชี GOODS PROPERTY
              </h1>
            </div>
            <div className="row">
              <div className="col-12">
                <input
                  className={`input-s ${
                    firstnameError ? "isInvalid" : ""
                  } mb-1`}
                  type="text"
                  placeholder="ชื่อ"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p
                  className={`${
                    firstnameError ? "text-danger " : "font-body"
                  }  text-left ms-5`}
                >
                  {firstnameError}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input
                  className={`input-s ${lastnameError ? "isInvalid" : ""} mb-1`}
                  type="text"
                  placeholder="นามสกุล"
                  value={lastname}
                  onChange={(e) => setLastname(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p
                  className={`${
                    lastnameError ? "text-danger " : "font-body"
                  }  text-left ms-5`}
                >
                  {lastnameError}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input
                  className={`input-s ${phoneError ? "isInvalid" : ""} mb-1`}
                  type="text"
                  placeholder="เบอร์โทรศัพท์"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p
                  className={`${
                    phoneError ? "text-danger " : "font-body"
                  }  text-left ms-5`}
                >
                  {phoneError}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <input
                  className={`input-s ${emailError ? "isInvalid" : ""} mb-1`}
                  type="text"
                  placeholder="อีเมล"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <p
                  className={`${
                    emailError ? "text-danger " : "font-body"
                  }  text-left ms-5`}
                >
                  {emailError}
                </p>
              </div>
            </div>

            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <input
                  className={`input-s ${
                    passwordError ? "isInvalid" : ""
                  } mb-1 `}
                  style={{ float: "right" }}
                  type={showPassword ? "text" : "password"}
                  placeholder="รหัสผ่าน"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <input
                  className={`input-s ${confirmError ? "isInvalid" : ""} mb-1`}
                  style={{ float: "left" }}
                  type={showPassword ? "text" : "password"}
                  placeholder="ยืนยันรหัสผ่าน"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12">
                <p
                  className={`${
                    passwordError ? "text-danger " : "font-body"
                  }  text-left ms-5`}
                >
                  {passwordError ? passwordError : "ใช้อักษระ 8 ตัวขึ้นไป"}
                </p>
              </div>
            </div>
            <div className="row justify-content-left ">
              <div className="col-xl-6 col-lg-6 col-md-6 col-12 justify-content-left mb-4">
                <input
                  style={{ float: "left", marginLeft: "3rem" }}
                  type="checkbox"
                  role="button"
                  onClick={handleShowPassword}
                />
                <label
                  className="font-body"
                  style={{
                    float: "left",
                    marginLeft: "0.125rem",
                    marginTop: "-0.25rem",
                  }}
                  htmlFor="showPassword"
                >
                  {" "}
                  แสดงรหัสผ่าน
                </label>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <button type="submit" className="btn-blue mb-5">
                  สมัครสมาชิก
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* แต่งสี */}
      <Wave/>

    </>
  );
}

export default RegisterPage;
