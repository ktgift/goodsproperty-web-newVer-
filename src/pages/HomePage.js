import { useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Headers from "../components/Header";
import SearchDiv from "../components/SearchDiv";
import SmallCard from "../components/SmallCard";

function HomePage() {

  return (
    <>
      <Headers />
      <SearchDiv />
      {/* new post div */}
      <section className="container-fluid bg-gray-container mt-container">
        <div className="container" style={{ width: "70%" }}>
          <div className="row justify-content-center">
            <div className="col-6 mt-5 mb-3">
              <h2 className="text-start text-black">ประกาศใหม่ล่าสุด</h2>
            </div>
            <div className="col-6 mt-5 mb-3">
              {/* <button className="float-end btn btn-form-outline font-body text-orange" onClick={() => setTotal("total")}>
                รายละเอียดเพิ่มเติม <i className="fa-solid fa-angle-right" />
              </button> */}
              <Link className="float-end font-body text-orange" to="/newtotal/total">
                รายละเอียดเพิ่มเติม <i className="fa-solid fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* card total */}
        <div className="row justify-content-center">
          <div className="container" style={{ width: "70%" }}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2 mb-5">
              <div className="col">
                <SmallCard />
              </div>
              <div className="col">
                <SmallCard />
              </div>
              <div className="col">
                <SmallCard />
              </div>
              <div className="col">
                <SmallCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* sale post div */}
      <section className="container-fluid">
        <div className="container" style={{ width: "70%" }}>
          <div className="row justify-content-center">
            <div className="col-6 mt-5 mb-5 ">
              <h2 className="text-start text-black">ประกาศขาย</h2>
            </div>
            <div className="col-6 mt-5 mb-5">
              <Link className="float-end font-body text-orange" to="/sale/sale">
                รายละเอียดเพิ่มเติม <i className="fa-solid fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* card sale */}
        <div className="row justify-content-center">
          <div className="container" style={{ width: "70%" }}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2 mb-5">
              <div className="col">
                <SmallCard />
              </div>
              <div className="col">
                <SmallCard />
              </div>
              <div className="col">
                <SmallCard />
              </div>
              <div className="col">
                <SmallCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* rent post div */}
      <section className="container-fluid bg-gray-container">
        <div className="container" style={{ width: "70%" }}>
          <div className="row justify-content-center">
            <div className="col-6 mt-5 mb-5 ">
              <h2 className="text-start text-black">ประกาศให้เช่า</h2>
            </div>
            <div className="col-6 mt-5 mb-5">
              <Link className="float-end font-body text-orange" to="/rent/rent">
                รายละเอียดเพิ่มเติม <i className="fa-solid fa-angle-right" />
              </Link>
            </div>
          </div>
        </div>

        {/* card rent */}
        <div className="row justify-content-center">
          <div className="container" style={{ width: "70%", marginBottom: "10rem" }}>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-2 mb-5">
              <div className="col">
                <SmallCard />
              </div>
              <div className="col">
                <SmallCard />
              </div>
              <div className="col">
                <SmallCard />
              </div>
              <div className="col">
                <SmallCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default HomePage;
