import React from "react";

const Header = () => {
    return (
      // Navigation Bar
      <nav className="navbar navbar-inverse">
            <div className="container-fluid">

           {/*<!-- nav - toggle collapse for mobile --> */}     
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="/index">About Me</a>
          </div>
  
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active">
                <a href="/portfolio"
                  >My Work <span className="sr-only">(current)</span></a
                >
              </li>
              <li>
                <a href="/contact">Say Hello!</a>
              </li>
              <li>
                <a href="/socials">Let's Connect on Socials</a>
              </li>  
            </ul>
          </div>
          {/* <!-- /.navbar-collapse location end --> */}
        </div>
        {/* <!-- /.container-fluid location end --> */}
      </nav>
    )
  }
  
  export default Header