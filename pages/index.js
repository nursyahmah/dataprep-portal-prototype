import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



const Home = () => {

return (
  <>
    <Head>
      <title>Dataprep Holdings Bhd</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700|Crete+Round:400italic" rel="stylesheet" type="text/css"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossorigin="anonymous" ></script>
      <meta name="viewport" content="width=device-width, initial-scale=1" ></meta>
    </Head>

    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid p-0">
        <a className="navbar-brand">
          <img src="/logo-dataprepholdings.png" alt="dataprep logo" height="50"/>
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
    <div className="align-items-center" style={{background:"#e3e3e3", display:"flex"}}>
        <div className="col-6" style={{paddingLeft:"90px"}}>
            <h1 className="welcome">WELCOME To </h1>
            <h1 className="mb-4 welcome">Dataprep Bhd</h1>
            <p style={{fontSize:24, fontWeight:300}}>Dataprep Group offers Consulting & Information Technology Services to governments & industries including telecommunications, financial services, products & SMEs.</p>
            <a href="" className="btn btn-lg btn-dark mt-4">LEARN MORE</a>
        </div>
        <img src="/images/server-room.jpg" alt="server-room" className="col p-0"/>
    </div>
    <div className="row align-items-center" style={{height:"150px"}}>
      <center style={{fontSize:30,fontWeight:"bold"}}>"CUSTOMER   SATISFACTION   IN   EVERY   DECISION"</center>
    </div>
    <hr/>
    <div className="row">
      <h5 className="pt-3 pb-3" style={{paddingLeft:"90px"}}>IT SOLUTIONS & SERVICES</h5>
    </div>

    <div className="row" style={{paddingLeft:"90px"}}>
      <div className="card p-0" style={{width: "15rem"}}>
        <div className="card-img-top d-flex justify-content-center pb-4">
          <i className="fas fa-server fa-3x"></i>
        </div>
        <div className="card-body p-0">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
    </div>
    <style jsx>{`
    .welcome{
      font-size: 50px;
    }

    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont,Lato, Roboto, Oxygen, Ubuntu,
          Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

      }
      
      * {
        box-sizing: border-box;
      }
      a{
        font-size: 16px!important;
        font-weight: 300;
      }
      .active{
        background-color:#000;
        color:white;
      }
      .navbar{
        background-color: #FFF;
      }
    `}</style>
  </>
);
}


export default Home
