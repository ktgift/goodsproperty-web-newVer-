import { Link } from "react-router-dom";
import logowh from "../images/logo_white.png";

function Footer() {
  return (
    <>
      <footer className="container-fluid bg-black-container">
        <div className="row justify-content-start">
          <div className="col-6 mt-3 mb-4">
            <img
              className="float-start"
              style={{ width: "10rem" }}
              src={logowh}
              alt="logo GoodsProperty"
            />
          </div>
          <div className="col-6 mt-3 mb-4">
            <Link className="float-end font-body text-orange" to="/newtotal">
              Follow Us
              <i className="fa-brands fa-facebook-f ms-3"></i>
              <i className="fa-brands fa-instagram ms-3 me-3"></i>
            </Link>
          </div>
          <hr style={{ borderTop: "2px solid #fff" }} />
          <h6 className="text-orange mb-3">copyright <i className="fa-regular fa-copyright ms-1 me-1" /> 2022 GoodsProperty</h6>
        </div>
      </footer>
    </>
  );
}

export default Footer;
