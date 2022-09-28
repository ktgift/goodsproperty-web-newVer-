function SelectProvince() {
    return (
        <>
         <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2 mb-5">
              <div className="col">
                <div className="input-group mb-3">
                  <select
                    className="form-select"
                    style={{ width: "50%" }}
                    id="inputGroupSelect02"
                  >
                    <option selected>เลือกตำแหน่งที่ตั้ง</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                  {/* <label
                    className="input-group-text bg-light "
                    htmlFor="inputGroupSelect02"
                  >
                    <i className="fa-solid fa-location-dot" />
                  </label> */}
                </div>
              </div>
            </div>
        </>
    )
}

export default SelectProvince;