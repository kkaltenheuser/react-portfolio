import React from 'react';
import ProfilePhoto from "../images/ProfilePhoto.jpg"
import "../App.css";

const Index = () => {
  return (
    <div className="container">
      <div 
        className="jumbotron text-center" 
        // style="margin-bottom: 0"
      >
        <h1 className="text-center text-uppercase">Ren Kaltenheuser</h1>
        <p className="text-center font-italic">Hey, Hi, Hello!</p>
      </div>

      <div 
        className="container" 
        // style="margin-top: 30px"
      >
        <div className="row">
          <div className="col-sm-4">
            <img
              className="center-block"
              src={ProfilePhoto}
              width="200"
              height="200"
              alt="Ren surrounded by illustrative details."
            />

            <hr className="d-sm-none" />
          </div>
          <div className="col-sm-8">
            <h2 className="text-center">About Me</h2>
            <p>
            Upon graduating in May 2016, Karen "Ren" Kaltenheuser began travelling and consulting globally for a number of established brands, non-profits and NGO's. They have done work in art direction, branding, design, illustration. Currently, they are wrapping up a Web Development Intensive at Columbia University while residing in NYC. Through attending Columbia, they have fulfilled their mission to pivot their career to that of one in  front-end web development where they seek to combine their academic interests and creative pursuits through the unification of technology.
            </p>
            <br />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index