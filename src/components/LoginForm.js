import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuthen } from "../context/AuthenContext";
import { useError } from "../context/ErrorContext";
import RegisterPage from "../pages/RegisterPage";



function LoginForm({ closeModal }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); 

  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const { login, user } = useAuthen(); 
  const { setError } = useError()

  const handleSubmitLogin = async e => {
    try {
      e.preventDefault();
  
      if(!email) {
        return setEmailError('กรุณากรอกอีเมล');
      }
  
      if(!password) {
        return setPasswordError('กรุณากรอกรหัสผ่าน')
      }
  
      await login({email, password});

      closeModal();

    } catch(err) {
      console.log(err)
      setError(err.response.data.message);
    }
  }

  const handleShowPassword = () => {
    setShowPassword(prev => !prev);
  }

  return (
    <>
      <form onSubmit={handleSubmitLogin}>
        <div className="row">
            <div className="col-12 mb-1">
              <input
                  type="email"
                  className={`input-m ${ emailError ? "isInvalid" : ""}`}
                  id="InputEmail"
                  placeholder="อีเมล"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                  // pattern="/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i"
              />
            </div>
            <div className="col-12 mb-2">
              <p
                  className={`${
                    emailError ? "text-danger " : "font-body"
                  }  text-left ms-5`}
                >
                  {emailError}
              </p>
            </div>
            <div className="col-12 mb-3">
            <input
                type={showPassword ? "text" : "password"}
                className={`input-m ${ passwordError ? "isInvalid" : ""}`}
                id="InputPassword"
                placeholder="รหัสผ่าน"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
            />
            </div>
            <div className="col-12 mb-2">
              <p
                  className={`${
                    passwordError ? "text-danger " : "font-body"
                  }  text-left ms-5`}
                >
                  {passwordError}
              </p>
            </div>
        </div>
        <div className="row gx-4">
            <div className="col-6 justify-content-left mb-4">
                <input style={{ float: "left", marginLeft: "2rem" }} 
                    type="checkbox" 
                    role="button"
                    onClick={handleShowPassword}
                />
                <label className="font-body" style={{ float: "left", marginLeft: "0.25rem", marginTop: "-0.25rem" }} htmlFor="showPassword"> แสดงรหัสผ่าน</label>
            </div>
            <div className="col-6 justify-content-right">
                <a href="/" className="text-decoration-none text-orange" style={{ float: "right", marginRight: "1.2rem", marginTop: "-0.25rem" }}>
                    <small>ลืมรหัสผ่าน</small>
                </a>
            </div>
        </div>
        <div className="mb-2 mt-3 d-grid">
          <button type="submit" className="btn-orange">
            เข้าสู่ระบบ
          </button>
        </div>
        <hr className="hr-sm mt-4" />
        <div className="text-center">
          <span>ยังไม่มีบัญชีกับเรา?</span>
          <Link
            className="text-orange"
            to="/register"
            onClick={() => closeModal()}
          >
            ลงทะเบียน
          </Link>
          <div className="display-none">
            <RegisterPage  />
          </div>
        </div>
      </form>
    </>
  );
}

export default LoginForm;
