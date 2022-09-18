import { Link } from "react-router-dom";
import RegisterPage from "../pages/RegisterPage";

function LoginForm({ open, closeModal }) {
    return (
        <>
        <form>
            <div className="mb-3">
                <input type="email" className="input-m" id="InputEmail" placeholder="อีเมล" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <input type="password" className="input-m" id="InputPassword" placeholder="รหัสผ่าน" />
            </div>
            <div className="text-right">
                <a href="/" className="text-decoration-none text-orange">
                    <small>ลืมรหัสผ่าน</small>
                </a>
            </div>
            <div className="mb-2 mt-3 d-grid">
                <button type="submit" className="btn-orange">เข้าสู่ระบบ</button>
            </div>
            <hr className="hr-sm mt-4" />
            <div className="text-center">
                <span>ยังไม่มีบัญชีกับเรา?</span>
                <Link className="text-orange" to="/register" onClick={() => closeModal()}>ลงทะเบียน</Link>
                <div className="display-none">
                    <RegisterPage />
                </div>
            </div>
        </form>
        </>
    )
}

export default LoginForm;