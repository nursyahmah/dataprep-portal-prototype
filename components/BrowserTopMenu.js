import React from 'react'

const BrowserTopMenu = () => {
    return (
<>
    <nav className="navbar navbar-light bg-light" style={{ position:"sticky", top: 0, zIndex:"999",background:"#674ea7" }}>
          {/* Menu */}
        <div className="container-fluid p-0">
          <a className="navbar-brand">
            <img src="/logo-dataprepholdings.png" alt="dataprep logo" height="45" />
          </a>
          <a className="navbar-brand" href="/"> HOME </a>
          <a className="navbar-brand" href="/about_us"> ABOUT US </a>
          <a className="navbar-brand" href="/investor_relations"> INVESTOR RELATIONS </a>
          <a className="navbar-brand" href="#"> OUR SOLUTIONS </a>
          <a className="navbar-brand" href="#"> PRESS ROOM </a>
          <a className="navbar-brand" href="#"> CAREER </a>
          <a className="navbar-brand" href="#"> CONTACT US </a>
        </div>
    </nav>

</>
    )
}

export default BrowserTopMenu
