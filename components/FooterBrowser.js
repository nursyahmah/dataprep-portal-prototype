import React from 'react'

const FooterBrowser = () => {
    return (
        <>
        <div className="d-flex justify-content-center pt-5" style={{ background: "#e3e3e3", bottom:0, }}>
            <div className="row mr-auto ml-auto" style={{width:"85%"}}>
                <ul className="list-unstyled col-3">
                    <li className="mb-3"> <a href="#" style={{color:"inherit"}}>Home</a> </li>
                    <li className="mb-3"> <a href="#" style={{color:"inherit"}}>About Us</a> </li>
                    <li className="mb-3"> <a href="#" style={{color:"inherit"}}>Investor Relations</a> </li>
                    <li> <a href="#" style={{color:"inherit"}}>Our Solutions</a> </li>

                </ul>
                <ul className="list-unstyled col-3">
                    <li className="mb-3"> <a href="#" style={{color:"inherit"}}>Press Room</a> </li>
                    <li className="mb-3"> <a href="#" style={{color:"inherit"}}>Career</a> </li>
                    <li> <a href="#" style={{color:"inherit"}}>Contact Us</a> </li>
                </ul>

                <div className="col-3 d-flex flex-column mb-3" style={{justifyContent:"space-evenly"}}>
                    <div className="row">
                        <i className="fas fa-map-marker-alt col-1"></i>
                        <div className="col">
                            <p className="mb-0">Level 8, No. 3, Jalan Semantan,</p>
                            <p className="mb-0">Damansara Heights, 50490 Kuala Lumpur.</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <i className="fas fa-phone-alt col-1"></i>
                        <p className="mb-0 col">+603 - 7843 1600</p>
                    </div>
                </div>

                <div className="col-3">
                    <div style={{display:"flex", flexDirection:"row"}} className="mb-3">
                        <img src="/footer_cert_logo.png" alt="footer_cert_logo" height="45"/>
                        <img src="/footer_cert_logo1.png" alt="footer_cert_logo1" height="45" className="ml-2"/>
                    </div>
                    <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
                        <img src="/footer_cert_logo2.png" alt="footer_cert_logo2" height="45"/>
                        <img src="/cert_logo3.png" alt="footer_cert_logo(3)" height="45" className="pl-3"/>
                    </div>
                </div>
            </div>
        </div>
        <center className="pt-4" style={{ background:"#e3e3e3", color:"inherit" }}><small>Copyright © 2021 All Rights Reserved by Dataprep Holdings Bhd</small></center>
        </>
    )
}

export default FooterBrowser
