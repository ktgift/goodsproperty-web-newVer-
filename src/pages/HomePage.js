import Headers from "../components/Header";
import bgPhoto from "../images/bgmain.jpg";

function HomePage() {
  return (
    <>
      <Headers />
      {/* search part */}
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 page-img">
            <img className="page-img" src={bgPhoto} alt="backgrounp photo" />
          </div>

          <div className="bg-search">
            <form className="justify-content-start mt-5 ms-5 me-5" action="/">
              <div className="">
                {/* row 1 */}
                <div className="row justify-content-start">
                  <div className="dropdown col-xl-4 col-lg-4 col-md-4 col-12 justify-content-start">
                    <button
                      className="btn btn-light dropdown-toggle ms-0"
                      style={{ width: "100%", textAlign: "left" }}
                      type="button"
                      id="search-province"
                      data-bs-toggle="dropdown"
                    >
                      วัตถุประสงค์
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="ms-2" href="#">
                          ซื้อ
                        </a>
                        <ul className="sub-dropdown-menu display-none">
                          <li>
                            <label>
                              <input type="radio" name="sale" value="sale" />
                            </label>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a className="ms-2" href="#">
                          เช่า
                        </a>
                        <ul className="sub-dropdown-menu display-none">
                          <li>
                            <label>
                              <input type="radio" name="rent" value="rent" />
                            </label>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>

                  <div className="dropdown col-xl-8 col-lg-8 col-md-8 col-12">
                    <button
                      className="btn btn-light dropdown-toggle"
                      style={{ width: "100%", textAlign: "left" }}
                      type="button"
                      id="search-province"
                      data-bs-toggle="dropdown"
                    >
                      <span>เลือกตำแหน่งที่ตั้ง</span>
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="search-province"
                    >
                      <li>
                        <a href="#" className="dropdown-item">
                          กรุงเทพ
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          กรุงเทพ
                        </a>
                      </li>
                      <li>
                        <a href="#" className="dropdown-item">
                          กรุงเทพ
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* row2 */}
                <div className="row justify-content-start mt-3">
                  {/* dropdown ที่อยู่อาศัย */}
                  <div className="dropdown col-xl-4 col-lg-4 col-md-4 col-12 justify-content-start">
                    <button
                      className="btn btn-light dropdown-toggle ms-0"
                      style={{ width: "100%", textAlign: "left" }}
                      type="button"
                      id="search-province"
                      data-bs-toggle="dropdown"
                    >
                      ที่อยู่อาศัย
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="ms-2" href="#">
                          คอนโด
                        </a>
                        <ul className="sub-dropdown-menu display-none">
                          <li>
                            <label>
                              <input type="checkbox" name="property_type" value="condo" />
                            </label>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a className="ms-2" href="#">
                          บ้านเดี่ยว
                        </a>
                        <ul className="sub-dropdown-menu display-none">
                          <li>
                            <label>
                            <input type="checkbox" name="property_type" value="home" />
                            </label>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a className="ms-2" href="#">
                          ทาวน์เฮ้าส์
                        </a>
                        <ul className="sub-dropdown-menu display-none">
                          <li>
                            <label>
                            <input type="checkbox" name="property_type" value="townhouse" />
                            </label>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a className="ms-2" href="#">
                          ที่ดิน
                        </a>
                        <ul className="sub-dropdown-menu display-none">
                          <li>
                            <label>
                            <input type="checkbox" name="property_type" value="land" />
                            </label>
                          </li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                  
                  {/* dropdown เชิงพาณิชย์ */}
                  <div className="dropdown col-xl-4 col-lg-4 col-md-4 col-12">
                  <button
                      className="btn btn-light dropdown-toggle ms-0"
                      style={{ width: "100%", textAlign: "left" }}
                      type="button"
                      id="search-province"
                      data-bs-toggle="dropdown"
                    >
                      เชิงพาณิชย์
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="ms-2" href="#">
                          สำนักงาน
                        </a>
                        <ul className="sub-dropdown-menu display-none">
                          <li>
                            <label>
                              <input type="checkbox" name="property_type" value="office" />
                            </label>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a className="ms-2" href="#">
                          โกดัง/โรงงาน
                        </a>
                        <ul className="sub-dropdown-menu display-none">
                          <li>
                            <label>
                            <input type="checkbox" name="property_type" value="factory" />
                            </label>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a className="ms-2" href="#">
                          ตึกแถว/อาคารพาณิชย์
                        </a>
                        <ul className="sub-dropdown-menu display-none">
                          <li>
                            <label>
                            <input type="checkbox" name="property_type" value="shophouse" />
                            </label>
                          </li>
                        </ul>
                      </li>

                    </ul>
                  </div>

                  {/* dropdown ราคา */}
                  <div className="dropdown col-xl-4 col-lg-4 col-md-4 col-12">
                  <button
                      className="btn btn-light dropdown-toggle ms-0"
                      style={{ width: "100%", textAlign: "left" }}
                      type="button"
                      id="search-province"
                      data-bs-toggle="dropdown"
                    >
                      ไม่จำกัดราคา
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="ms-2" href="#">
                          เริ่มต้น
                        </a>
                        <ul className="sub-dropdown-menu">
                          <li>
                            <label>
                              <input className="me-4" type="text" name="search_price" placeholder="0" />
                            </label>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <a className="ms-2" href="#">
                          สูงสุด
                        </a>
                        <ul className="sub-dropdown-menu">
                          <li>
                            <label>
                            <input className="me-4" type="text" name="search_price" placeholder="ไม่ระบุ" />
                            </label>
                          </li>
                        </ul>
                      </li>

                      <li>
                        <ul className="sub-dropdown-menu mt-3">
                          <li>
                            <label>
                              <button className="dropdown-btn-blue" type="button">เสร็จสิ้น</button>
                            </label>
                          </li>
                        </ul>
                      </li>

                    </ul>
                  </div>
                </div>

                {/* row2 */}
                <div className="row justify-content-center mt-5 mb-5">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                    <button className="search-btn-blue" type="button">ค้นหา</button>
                  </div>
                </div>

              </div>
            </form>
          </div>

        </div>
      </div>
    </>
  );
}

export default HomePage;
