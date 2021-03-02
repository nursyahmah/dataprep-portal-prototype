import React from "react";

const BrowserIndex = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid p-0">
          <a className="navbar-brand">
            <img
              src="/logo-dataprepholdings.png"
              alt="dataprep logo"
              height="45"
            />
          </a>
          <a className="navbar-brand" href="#">
            HOME
          </a>
          <a className="navbar-brand" href="#">
            ABOUT US
          </a>
          <a className="navbar-brand" href="#">
            INVESTOR RELATIONS
          </a>
          <a className="navbar-brand" href="#">
            OUR SOLUTIONS
          </a>
          <a className="navbar-brand" href="#">
            PRESS ROOM
          </a>
          <a className="navbar-brand" href="#">
            CAREER
          </a>
          <a className="navbar-brand" href="#">
            CONTACT US
          </a>
        </div>
      </nav>
      <div
        className="align-items-center"
        style={{ background: "#e3e3e3", display: "flex" }}
      >
        <div className="col-6" style={{ paddingLeft: "80px" }}>
          <h2 className="welcome">WELCOME To </h2>
          <h2 className="mb-4 welcome">Dataprep Bhd</h2>
          <p style={{ fontSize: 20, fontWeight: 300 }}>
            Dataprep Group offers Consulting & Information Technology Services
            to governments & industries including telecommunications, financial
            services, products & SMEs.
          </p>
          <a href="" className="btn btn-dark mt-2">
            LEARN MORE
          </a>
        </div>
        <img
          src="/images/server-room.jpg"
          alt="server-room"
          className="col p-0"
        />
      </div>
      <div className="row align-items-center" style={{ height: "140px" }}>
        <center style={{ fontSize: 20, fontWeight: "bold" }}>
          "CUSTOMER SATISFACTION IN EVERY DECISION"
        </center>
      </div>

      <div className="row">
        <h5 className="pt-3 pb-3" style={{ paddingLeft: "80px" }}>
          IT SOLUTIONS & SERVICES
        </h5>
      </div>

      <div className="row" style={{ paddingLeft: "80px" }}>
        <div className="card p-0 border-0" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-server fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default BrowserIndex