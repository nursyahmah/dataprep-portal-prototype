import { BrowserView, MobileView, isBrowser, isMobile } from "react-device-detect";
import Head from 'next/head';
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import BrowserIndex from '../components/BrowserIndex';
import MobileIndex from '../components/MobileIndex';



const Home = () => {

return (
  <>
    <Head>
      <title>Dataprep Holdings Bhd</title>
      <link rel="icon" href="/favicon.ico" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossOrigin="anonymous" />
      <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css?family=Lato:300,400,400italic,600,700|Raleway:300,400,500,600,700|Crete+Round:400italic" rel="stylesheet" type="text/css"/>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.bundle.min.js" integrity="sha384-b5kHyXgcpbZJO/tY9Ul7kGkf1S0CWuKcCD38l8YkeH8z8QjE0GmW1gYU5S9FOnJ0" crossOrigin="anonymous" ></script>
      <meta name="viewport" content="width=device-width, initial-scale=1" ></meta>
    </Head>
    <BrowserView>
      <BrowserIndex/>
    </BrowserView>
    <MobileView>
        <MobileIndex/>
    </MobileView>
    
    <style jsx>{`
    .welcome{
      font-size: 40px;
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
      .active{
        background-color:#000;
        color:white;
      }
      .navbar{
        background-color: #FFF;
      }
      .navbar a{
        font-size: 14px!important;
        font-weight: 300;
      }
    `}</style>
  </>
);
}

export default Home
