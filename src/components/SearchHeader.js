import { useEffect, useState } from "react";
import { useSearch } from "../context/SearchContext";

function SearchHeader({ idParam }) {
  // เก็บค่า id ของจังหวัด อำเภอ ตำบล ที่เลือก
  const [selectProvince, setSelectProvince] = useState("");
  const [selectAmphure, setSelectAmphure] = useState("");
  const [selectTambon, setSelectTambon] = useState("");
  // เก็บอำเภอ ที่ filter
  const [amphureInProvince, setAmphureInProvince] = useState([]);
  // เก็บตำบล ที่ filter
  const [tambonInAmphure, setTambonInAmphure] = useState([]);
  const [statusPage, setStatusPage] = useState("");

  const { province, amphure, tambon } = useSearch();

  useEffect(() => {
    const handleStatusPage = (idParam) => {
      if (idParam === "total") {
        setStatusPage("อสังหาริมทรัพย์ใหม่ล่าสุด")
      } else if(idParam === "sale") {
        setStatusPage("อสังหาริมทรัพย์สำหรับขาย")
      } else if(idParam === "rent") {
        setStatusPage("อสังหาริมทรัพย์ให้เช่า")
      }
    }
  
    handleStatusPage(idParam)
  }, [])


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

  return (
    <>
      <div className="container-fluid navbar-color">
        <div className="row">
          <div className="col-12">
            <div className="container" style={{ width: "82%" }}>
              <p className="float-start mt-3 mb-3">
                <i className="fa-solid fa-angle-right me-2" />
                {statusPage}
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
            <div className="container" style={{ width: "82%" }}>
              <p className="float-start mt-3 mb-1">
                <i className="fa-solid fa-filter me-2" />
                ตัวกรอง
              </p>
            </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ width: "82%" }}>
          <form>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-6 g-2 mb-2">
              <div className="col">
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    style={{ width: "50%" }}
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

                    {/* วิธีที่ 2 */}
                    {/* <option selected>เลือกจังหวัด</option> */}
                    {/* {province?.map((el, idx) => (
                      <option key={idx} value={el.id}>
                        {el.nameTh}
                      </option>
                    ))} */}
                  </select>
                </div>
              </div>

              {/* อำเภอ */}
              <div className="col">
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
              <div className="col">
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

              {/* ที่อยู่อาศัย */}
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  {/* ค่าที่เรียกจะไปเก็บไว้ใน state  */}
                  <option selected>ประเภทที่อยู่อาศัย</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              {/* เขิงพาณิชย์ */}
              <div className="col">
                <select
                  className="form-select"
                  aria-label="Default select example"
                >
                  {/* ค่าที่เรียกจะไปเก็บไว้ใน state  */}
                  <option selected>ประเภทเชิงพาณิชย์</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>
              </div>
              {/* ราคา */}
              <div className="dropdown  col">
                <select
                  className="form-select dropdown-toggle"
                  aria-label="Default select example"
                >
                  <option selected>ไม่จำกัดราคา</option>
                  <option value="1">น้อยกว่า 1 ล้าน</option>
                  <option value="2">1 ล้าน - 2 ล้าน</option>
                  <option value="3">2 ล้าน - 3 ล้าน</option>
                  <option value="4">3 ล้าน - 5 ล้าน</option>
                  <option value="5">5 ล้าน - 10 ล้าน</option>
                  <option value="6">10 ล้าน - 15 ล้าน</option>
                  <option value="7">15 ล้าน - 20 ล้าน</option>
                  <option value="8">20 ล้าน - 30 ล้าน</option>
                  <option value="9">30 ล้าน - 50 ล้าน</option>
                  <option value="10">มากกว่า 50 ล้าน</option>
                </select>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 mb-3">
                <button className="search-btn-blue" type="submit">
                  ค้นหา
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default SearchHeader;
