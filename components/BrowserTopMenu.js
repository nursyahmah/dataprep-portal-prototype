import React from 'react'

const BrowserTopMenu = () => {
    return (
<>
    <nav className="navbar pt-0" style={{ position:"sticky", top: 0, zIndex:"999", background:"#674ea7" }}>
          {/* Menu */}
        <div className="p-0" style={{ paddingLeft: "30px" }}>
          {/* <a className="navbar-brand">
            <img src="/logo-dataprepholdings.png" alt="dataprep logo" height="45" />
          </a> */}
          <a className="navbar-brand mr-0" href="/"> Insights Portal |</a>
          <a className="navbar-brand mr-0" href="/"> Merchant Center |</a>
          <a className="navbar-brand mr-0" href=""> Blog |</a>
          <a className="navbar-brand mr-0" href="/about_us"> About Us |</a>
          <a className="navbar-brand mr-0" href="#"> FAQ </a>
        </div>
        <div className="container-fluid p-0">
          <a className="navbar-brand">
            <img src="/logo-dataprepholdings.png" alt="dataprep logo" height="45" />
          </a>
          <a className="navbar-brand" href="/"> Browse by Category </a>
          <input/>
          <a className="navbar-brand" href=""> 100VPoints </a>
          <a className="btn btn-sm" href="#"> Earn More </a>
          <div className="dropdown">
          <button className="dropbtn">Dropdown</button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
        </div>
        </div>
    </nav>



</>
    )
}

export default BrowserTopMenu
