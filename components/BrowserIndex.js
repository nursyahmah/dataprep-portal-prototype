import React from "react";

const BrowserIndex = () => {
  return (
    <>
      <nav className="navbar navbar-light bg-light">
        <div className="container-fluid p-0">
          <a className="navbar-brand">
            <img src="/logo-dataprepholdings.png" alt="dataprep logo" height="45" />
          </a>
          <a className="navbar-brand" href="#"> HOME </a>
          <a className="navbar-brand" href="#"> ABOUT US </a>
          <a className="navbar-brand" href="#"> INVESTOR RELATIONS </a>
          <a className="navbar-brand" href="#"> OUR SOLUTIONS </a>
          <a className="navbar-brand" href="#"> PRESS ROOM </a>
          <a className="navbar-brand" href="#"> CAREER </a>
          <a className="navbar-brand" href="#"> CONTACT US </a>
        </div>
      </nav>
      <div className="align-items-center" style={{ background: "#e3e3e3", display: "flex" }} >
        <div className="col-6" style={{ paddingLeft: "80px" }}>
          <h2 className="welcome">WELCOME To </h2>
          <h2 className="mb-4 welcome">Dataprep Bhd</h2>
          <p style={{ fontSize: 20, fontWeight: 300 }}> Dataprep Group offers Consulting & Information Technology Services to governments & industries including telecommunications, financial services, products & SMEs. </p>
          <a href="" className="btn btn-dark mt-2"> LEARN MORE </a>
        </div>
        <img src="/images/server-room.jpg" alt="server-room" className="col p-0" />
      </div>
      <div className="row align-items-center" style={{ height: "140px" }}>
        <center style={{ fontSize: 20, fontWeight: "bold" }}>
          "CUSTOMER SATISFACTION IN EVERY DECISION"
        </center>
      </div>

      <div className="row pb-5">
        <h4 className="pt-3 pb-3 border-top border-bottom" style={{ paddingLeft: "80px" }}>
          IT SOLUTIONS & SERVICES
        </h4>
      </div>

      <div className="row justify-content-center mb-5">
        <div className="card p-0 border-0 mr-5" style={{ width: "15rem"}}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-server fa-3x"></i>
          </div>
          <div className="card-body p-0 d-flex justify-content-center">
            <center className="card-title">Enterprise Servers, Storage Consolidation and Virtualization</center>
          </div>
        </div>

        <div className="card p-0 border-0 mr-5" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-cloud fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <center className="card-title">Cloud Computing Enablement</center>
          </div>
        </div>

        <div className="card p-0 border-0 mr-5" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-database fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <center className="card-title">Data Center</center>
          </div>
        </div>

        <div className="card p-0 border-0" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-network-wired fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <center className="card-title">Network Integration</center>
          </div>
        </div>
      </div>
      <div className="row justify-content-center mb-5">
        <div className="card p-0 border-0 mr-5" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-shield-alt fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <center className="card-title">ICT Security Solutions</center>
          </div>
        </div>

        <div className="card p-0 border-0 mr-5" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-sync-alt fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <center className="card-title">Product Life Cycle Management(PLCM)</center>
          </div>
        </div>

        <div className="card p-0 border-0 mr-5" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-hdd fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <center className="card-title">Customer Premise Equipment(CPE)</center>
          </div>
        </div>

        <div className="card p-0 border-0" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-users-cog fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <center className="card-title">ICT Outsourcing Services</center>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="card p-0 border-0 mr-5" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-tools fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <center className="card-title">Multi-Vendor Support</center>
          </div>
        </div>

        <div className="card p-0 border-0 mr-5" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-cogs fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <center className="card-title">ICT Service Management</center>
          </div>
        </div>

        <div className="card p-0 border-0 mr-5" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-headset fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <center className="card-title">ICT Service Desk</center>
          </div>
        </div>

        <div className="card p-0 border-0" style={{ width: "15rem" }}>
          <div className="card-img-top d-flex justify-content-center pb-4">
            <i className="fas fa-money-check-alt fa-3x"></i>
          </div>
          <div className="card-body p-0">
            <center className="card-title">Payment Solutions and Services(PSS)</center>
          </div>
        </div>
      </div>
    </>
  );
};
export default BrowserIndex