import { useState } from "react";
import { Link } from "react-router-dom";
import { useSearch } from "../context/SearchContext";
import HeaderMenuMain from "../components/HeaderMenuMain";
import Footer from "../components/Footer";

function PostPropertyPage() {
  const [selectObjective, setSelectObjective] = useState("");
  const [selectType, setSelectType] = useState("");
  const [selectResidence, setSelectResidence] = useState("");
  const [selectCommercail, setSelectCommercail] = useState("");

  const [subTypeInSelclet, setSubtypeInSelclet] = useState([]);

  // เก็บค่า id ของจังหวัด อำเภอ ตำบล ที่เลือก
  const [selectProvince, setSelectProvince] = useState("");
  const [selectAmphure, setSelectAmphure] = useState("");
  const [selectTambon, setSelectTambon] = useState("");

  const [amphureInProvince, setAmphureInProvince] = useState([]);
  const [tambonInAmphure, setTambonInAmphure] = useState([]);

  const { province, amphure, tambon } = useSearch();

  const optionProvinces = province?.map((el) => (
    <option value={el.id}>{el.nameTh}</option>
  ));

  const filterAmphure = (selectProvince) => {
    const amphureInProvince = amphure.filter((el) => {
      return el.provinceId == selectProvince;
    });
    setAmphureInProvince(amphureInProvince);
  };

  const filterTambon = (selectAmphure) => {
    const tambonInAmphure = tambon.filter((el) => {
      return el.amphureId == selectAmphure;
    });
    setTambonInAmphure(tambonInAmphure);
  };

  const objective = [
    { label: "ขาย", value: "sale" },
    { label: "ขายดาวน์", value: "saleDown" },
    { label: "ให้เช่า", value: "rent" },
  ];

  const types = [
    { label: "ที่อยู่อาศัย", value: "residence" },
    { label: "เชิงพาณิชย์", value: "commercail" },
  ];

  const totalSubType = [
    { label: "คอนโด", value: "condo", type: "residence" },
    { label: "บ้านเดี่ยว", value: "home", type: "residence" },
    { label: "ทาวน์เฮ้าส์", value: "townhouse", type: "residence" },
    { label: "ที่ดิน", value: "land", type: "residence" },
    { label: "สำนักงาน", value: "office", type: "commercail" },
    { label: "โกดัง/โรงงาน", value: "factory", type: "commercail" },
    { label: "ตึกแถว/อาคารพาณิชย์", value: "shophouse", type: "commercail" },
  ];

  const filterType = (type) => {
    const subType = totalSubType.filter((el) => {
      return el.type == type;
    });
    setSubtypeInSelclet(subType);
  };
  console.log(selectObjective);

  return (
    <>
      <HeaderMenuMain />

      {/* div */}
      <section className="container-fluid">
        <div className="container" style={{ width: "80%" }}>
          <div className="row justify-content-center">
            <div className="col-12 mt-4 mb-3 ">
              <p className="text-start font-32 text-black">สร้างประกาศ</p>
            </div>
          </div>
        </div>

        {/* form */}
        <div className="row justify-content-center">
          <div className="container" style={{ width: "70%" }}>
            <form>
              {/* สถานะผู้ประกาศ */}
              <div className="row">
                <div className="col-12 mb-1">
                  <p className="text-start font-24">ประเภทและวัตถุประสงค์</p>
                  <p className="text-start">สถานะผู้ประกาศ*</p>
                </div>
              </div>

              <div className="row">
                <div className="form-check col-2 mb-1 ms-4 ">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="owner"
                    checked
                  />
                  <label
                    className="form-check-label float-start"
                    htmlFor="owner"
                  >
                    เจ้าของ
                  </label>
                </div>
                <div className="form-check col-2 mb-1">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="flexRadioDefault"
                    id="agent"
                  />
                  <label
                    className="form-check-label float-start"
                    htmlFor="agent"
                  >
                    นายหน้า
                  </label>
                </div>
              </div>

              {/* วัตถุประสงค์ */}
              <div className="row m-top-34">
                <p className="text-start">วัตถุประสงค์*</p>
              </div>

              <div className="row ms-1">
                <select
                  className="form-select"
                  value={objective.value}
                  onChange={(event) => {
                    setSelectObjective(event.target.value);
                  }}
                >
                  <option selected disabled>
                    {"เลือกวัตถุประสงค์"}
                  </option>
                  {objective.map((el, idx) => (
                    <option key={idx} value={el.value}>
                      {el.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* ประเภททรัพย์ */}
              <div className="row m-top-34">
                <p className="text-start">ประเภททรัพย์*</p>
              </div>

              <div className="row ms-1">
                <select
                  className="form-select"
                  value={types.value}
                  onChange={(event) => {
                    setSelectType(event.target.value);
                    filterType(event.target.value);
                  }}
                >
                  <option selected disabled>
                    {"เลือกประเภททรัพย์"}
                  </option>
                  {types.map((el, idx) => (
                    <option key={idx} value={el.value}>
                      {el.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* ประเภทย่อย*/}
              <div className="row m-top-34">
                <p className="text-start">ประเภทย่อย*</p>
              </div>

              <div className="row ms-1">
                <select
                  className="form-select"
                  value={types.value}
                  onChange={(event) => {
                    setSelectType(event.target.value);
                  }}
                >
                  <option selected disabled>
                    {"เลือกประเภทย่อย"}
                  </option>
                  {subTypeInSelclet.map((el, idx) => (
                    <option key={idx} value={el.value}>
                      {el.label}
                    </option>
                  ))}
                </select>
              </div>

              {/* สถานที่ตั้ง */}
              <div className="row mt-5">
                <div className="col-12">
                  <p className="text-start font-24">สถานที่ตั้ง</p>
                </div>
              </div>

              {/* จังหวัด */}
              <div className="row mt-4">
                <p className="text-start">จังหวัด*</p>
              </div>

              <div className="row ms-1">
                <select
                  className="form-select"
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

              {/* อำเภอ */}
              <div className="row mt-4">
                <p className="text-start">เขต/อำเภอ*</p>
              </div>
              <div className="row ms-1">
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
              <div className="row mt-4">
                <p className="text-start">แขวง/ตำบล*</p>
              </div>
              <div className="row ms-1">
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

              {/* map */}
              <div className="row mt-5">
                <button className="col-4 btn btn-outline-primary ms-2">
                  ระบุตำแหน่งบนแผนที่
                </button>
              </div>

              {/* รายละเอียดทรัพย์ */}
              <div className="row mt-5">
                <div className="col-12">
                  <p className="text-start font-24">รายละเอียดทรัพย์</p>
                </div>
              </div>

              {/* title */}
              <div className="row mt-4">
                <p className="text-start">หัวข้อ*</p>
              </div>
              <div className="row ms-1">
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="กรุณาระบุหัวข้อ เช่น ขายบ้านเดี่ยว 3นอน 3น้ำ"
                />
              </div>

              {/* รายละเอียด */}
              <div className="row m-top-34">
                <p className="text-start">รายละเอียด*</p>
              </div>
              <div className="row ms-1">
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                />
              </div>

              {/* ขนาด */}
              <div className="row m-top-34">
                <div className="col-12 col-md-6 col-lg-6">
                  <p className="text-start">ขนาดพื้นที่ใช้สอย (ตร.ม.)</p>
                  <input type="number" className="form-control float-start" />
                </div>
                <div className="col-12 col-md-6 col-lg-6">
                  <p className="text-start">ขนาดที่ดิน (ตร.ว.)</p>
                  <input type="number" className="form-control float-start" />
                </div>
              </div>

              {/* จำนวนห้อง */}
              <div className="row m-top-34 ms-1 g-2">
                <div className="col-12 col-md-4 col-lg-4">
                  <p className="text-start">จำนวนห้องนอน*</p>
                  <input type="number" className="form-control float-start" />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <p className="text-start">จำนวนห้องน้ำ*</p>
                  <input type="number" className="form-control float-start" />
                </div>
                <div className="col-12 col-md-4 col-lg-4">
                  <p className="text-start">จำนวนชั้น*</p>
                  <input type="number" className="form-control float-start" />
                </div>
              </div>

              {/* ราคาขาย */}
              <div className="row mt-4">
                <p className="text-start">ราคาขาย*</p>
              </div>
              <div className="row ms-1">
                {selectObjective === "rent" ? (
                  <input
                    type="number"
                    className="form-control"
                    placeholder="฿"
                    disabled
                  />
                ) : (
                  <input
                    type="number"
                    className="form-control"
                    placeholder="฿"
                  />
                )}
              </div>

              {/* ราคาเช่า */}
              <div className="row mt-4">
                <p className="text-start">ราคาเช่า (ต่อเดือน)*</p>
              </div>
              <div className="row ms-1">
                {selectObjective === "rent" ? (
                    <input
                      type="number"
                      className="form-control"
                      placeholder="฿"
                    />
                  ) : (
                    <input
                      type="number"
                      className="form-control"
                      placeholder="฿"
                      disabled
                    />
                  )}
              </div>

              {/* ข้อมูลติดต่อเพิ่มเติม */}
              <div className="row mt-5">
                <div className="col-12">
                  <p className="text-start font-24">ข้อมูลติดต่อเพิ่มเติม</p>
                </div>
              </div>
              <div className="row mt-4">
                <button className="col-4 btn btn-outline-primary ms-2">
                  อัดโหลดภาพ QR code Line
                </button>
              </div>


              <div className="row mt-5 mb-5 float-end">
                <Link to="/post-property2" class="btn-blue btn-lg" style={{width: "10rem"}} tabindex="-1" role="button" aria-disabled="true">ถัดไป</Link>
              </div>

            </form>
          </div>
        </div>
      </section>
      <div className="mt-5">
        <Footer />
      </div>
    </>
  );
}

export default PostPropertyPage;
