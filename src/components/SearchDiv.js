import { useState } from "react";
import { useSearch } from "../context/SearchContext";
import bgPhoto from "../images/bgmain.jpg";

function SearchDiv() {
  const { province, amphure, tambon } = useSearch();

  // เก็บค่า id ของจังหวัด อำเภอ ตำบล ที่เลือก
  const [selectProvince, setSelectProvince] = useState("");
  const [selectAmphure, setSelectAmphure] = useState("");
  const [selectTambon, setSelectTambon] = useState("");
  // เลือกวัตถุประสงค์
  const [selectObjective, setSelectObjective] = useState("");
  const [selectResidence, setSelectResidence] = useState("");
  const [selectCommercail, setSelectCommercail] = useState("");

  // เก็บอำเภอ ที่ filter
  const [amphureInProvince, setAmphureInProvince] = useState([]);
  // เก็บตำบล ที่ filter
  const [tambonInAmphure, setTambonInAmphure] = useState([]);


  // console.log(selectObjective);
  // console.log(selectResidence);
  // console.log(selectCommercail);

  // สร้างรายการจังหวัด
  const optionProvinces = province?.map((el) => (
    <option value={el.id}>{el.nameTh}</option>
  ));

  const filterAmphure = (selectProvince) => {
    const amphureInProvince = amphure.filter((el) => {
      return el.provinceId == selectProvince;
    });
    setAmphureInProvince(amphureInProvince);
    // console.log(amphureInProvince);
  };

  const filterTambon = (selectAmphure) => {
    const tambonInAmphure = tambon.filter((el) => {
      return el.amphureId == selectAmphure;
    });
    setTambonInAmphure(tambonInAmphure);
  };

  const objective = [
    { label: "ซื้อ", value: "sale" },
    { label: "เช่า", value: "rent" }
  ];

  const residence = [
    { label: "ทั้งหมด", value: "totalRes"},
    { label: "คอนโด", value: "condo"},
    { label: "บ้านเดี่ยว", value: "home"},
    { label: "ทาวน์เฮ้าส์", value: "townhouse"},
    { label: "ที่ดิน", value: "land"},
  ];

  const commercail = [
    { label: "ทั้งหมด", value: "totalCom"},
    { label: "สำนักงาน", value: "office"},
    { label: "โกดัง/โรงงาน", value: "factory"},
    { label: "ตึกแถว/อาคารพาณิชย์", value: "shophouse"}
  ];

  return (
    <>
      {/* search part */}
      <div
        className="container-fluid"
        // style={{height: '20%!important'}}
      >
        <div style={{ position: "relative" }}>
          {/* ภาพ */}
          <div className="row">
            <div className="col-12 ">
              <img
                className="page-img mw-100 "
                src={bgPhoto}
                alt="backgrounp photo"
              />
            </div>
          </div>

          {/* พื้นหลังสีน้ำเงิน */}
          <div className="bg-search">
            <div className="align-items-center ">
              <form
                className="justify-content-start align-items-center mt-5 ms-5 me-5"
                action="/"
              >
                {/* row 1 */}
                <div className="row g-2 mb-2 justify-content-center">
                  <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                    <div className="input-group mb-3">
                      <select
                        className="form-select"
                        // style={{ fontSize: "90%"  }}
                        id="inputGroupSelect02"
                        value={province?.nameTh}
                        onChange={(event) => {
                          setSelectProvince(event.target.value);
                          // call fn and send selecrValue
                          filterAmphure(event.target.value);
                        }}
                      >
                        <option selected disabled>
                          {"เลือกจังหวัด"}
                        </option>
                        {optionProvinces}
                      </select>
                    </div>
                  </div>

                  {/* อำเภอ */}
                  <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                    <select
                      className="form-select"
                      value={amphureInProvince?.nameTh}
                      onChange={(event) => {
                        setSelectAmphure(event.target.value);
                        filterTambon(event.target.value);
                      }}
                    >
                      <option selected disabled>
                        {"เลือกอำเภอ"}
                      </option>
                      {amphureInProvince?.map((el, idx) => (
                        <option key={idx} value={el.id}>
                          {el.nameTh}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* ตำบล */}
                  <div className="col-xl-4 col-lg-4 col-md-4 col-12">
                    <select
                      className="form-select"
                      value={tambonInAmphure?.nameTh}
                      onChange={(event) => {
                        setSelectTambon(event.target.value);
                      }}
                    >
                      <option selected disabled>
                        เลือกตำบล
                      </option>
                      {tambonInAmphure.map((el, idx) => (
                        <option key={idx} value={el.id}>
                          {el.nameTh}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* row2 */}
                <div className="row g-2 mb-2 justify-content-center mt-2">
                  <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                    <div className="input-group mb-3">
                      <select
                        className="form-select"
                        // style={{ fontSize: "90%"  }}
                        value={objective.value}
                        onChange={(event) => {
                          setSelectObjective(event.target.value);
                        }}
                      >
                        <option selected disabled>{"วัตถุประสงค์"}</option>
                        {objective.map((el, idx) => (
                          <option key={idx} value={el.value}>{el.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* dropdown ที่อยู่อาศัย */}
                  <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                    <div className="input-group mb-3">
                      <select
                        className="form-select"
                        value={residence.value}
                        onChange={(event) => {
                          setSelectResidence(event.target.value);
                        }}
                      >
                        <option disabled selected>
                          {"ที่อยู่อาศัย"}
                        </option>
                        {residence.map((el, idx) => (
                          <option key={idx} value={el.value}>{el.label}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* dropdown เชิงพาณิชย์ commercail */}
                  <div className="col-xl-3 col-lg-3 col-md-3 col-12">
                    <div className="input-group mb-3">
                      <select
                          className="form-select"
                          value={commercail.value}
                          onChange={(event) => {
                            setSelectCommercail(event.target.value);
                          }}
                        >
                          <option disabled selected>
                            {"เชิงพาณิชย์"}
                          </option>
                          {commercail.map((el, idx) => (
                            <option key={idx} value={el.value}>{el.label}</option>
                          ))}
                        </select>
                    </div>
                  </div>

                  {/* dropdown ราคา */}
                  <div className="dropdown col-xl-3 col-lg-3 col-md-3 col-12">
                    <button
                      className="btn btn-light btn-text dropdown-toggle ms-0"
                      type="button"
                      style={{height: "2.40rem"}}
                      // id="search-province"
                      data-bs-toggle="dropdown"
                    >
                      ไม่จำกัดราคา
                    </button>
                    <ul className="dropdown-menu">
                      <li>
                        <a className="ms-2" href="#">
                          เริ่มต้น
                        </a>
                        <ul className="sub-dropdown-menu mt-1">
                          <li>
                            <label>
                              <input
                                className="me-4"
                                type="text"
                                name="search_price"
                                placeholder="0"
                              />
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
                              <input
                                className="me-4"
                                type="text"
                                name="search_price"
                                placeholder="ไม่ระบุ"
                              />
                            </label>
                          </li>
                        </ul>
                      </li>

                      <li className="d-flex justify-content-center">
                        <ul className="sub-dropdown-menu w-50  mt-3">
                          <li>
                            <label>
                              <button className="btn-blue" type="button">
                                เสร็จสิ้น
                              </button>
                            </label>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* row2 */}
                <div className="row justify-content-center mt-3 mb-5">
                  <div className="col-12">
                    <button className="search-btn-blue" type="submit">
                      ค้นหา
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/*จบ search part */}
    </>
  );
}

export default SearchDiv;
