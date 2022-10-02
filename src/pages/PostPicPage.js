import { useRef } from "react";
import { Link } from "react-router-dom";
import HeaderMenuMain from "../components/HeaderMenuMain";
import Footer from "../components/Footer";

function PostPicPage() {
    const uploadPicEl = useRef();

    
  return (
    <>
      <HeaderMenuMain />
      <section className="container-fluid">
        <div className="container" style={{ width: "80%" }}>
          <div className="row justify-content-center">
            <div className="col-12 mt-4 mb-3 ">
              <p className="text-start font-32 text-black">สร้างประกาศ</p>
            </div>
          </div>
          <div className="container" style={{ width: "70%" }}>
            <p className="text-start font-24 text-black">อัพโหลดภาพ*</p>
          </div>

          <div className="row mt-5">
            <div className="col-12">
              <Link
                to="/post-property2"
                className="btn btn-secondary btn-lg float-end"
                style={{ width: "10rem" }}
                tabindex="-1"
                role="button"
                aria-disabled="true"
              >
                + เพิ่มรูปภาพ
              </Link>
            </div>
          </div>
          <div className="row mt-1 mb-5">
            <div className="col-12">
              <p className="float-end text-gray">กรุณาใส่ภาพไม่เกิน 10 ภาพ</p>
            </div>
          </div>

            {/* DIV UPLOAD PIC */}
          <div className="d-flex flex-column align-items-center mt-3 py-3 div-border-up-pic">
            <div className="text-center bg-gray-300 p-2 position-relative mt-5">
              <i className="fa-regular fa-image position-absolute top-50 left-50 translate-middle"></i>
            </div>
            <div className="mt-1 mb-5">Add Photos</div>
          </div>
          <input type="file" className="d-none" ref={uploadPicEl} />
        </div>
      </section>
      {/* <div className="mt-5">
        <Footer />
      </div> */}
    </>
  );
}

export default PostPicPage;
