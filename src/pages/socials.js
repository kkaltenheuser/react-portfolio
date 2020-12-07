import React from 'react';
import SocialPanel from "../components/SocialPanel/index.js";
import GitHub from "../images/GitHub.png";
import Instagram from "../images/Instagram.png";
import LinkedIn from "../images/LinkedIn.png"

// create state
const SocialPanels = () => {
  const socialPanels = [
    {
      name: "GitHub",
      src: GitHub,
      website: "https://github.com/kkaltenheuser"
    },
    {
      name: "LinkedIn",
      src: LinkedIn,
      website: "https://www.linkedin.com/in/karenkaltenheuser/"
    },
    {
      name: "Instagram",
      src: Instagram,
      website: "https://www.instagram.com/untitled.ren/"
    },
  ]

  return (
    <main className="container" id="main">
      <div className="container">
        <div className="row">
          <div className="col">
            <h1><center>Socials</center></h1>
          </div>
        </div>
        <div className="row">
          <center>
            <SocialPanel
              name={socialPanels[0].name}
              src={socialPanels[0].src}
              website={socialPanels[0].website}
            />
            <SocialPanel
              name={socialPanels[1].name}
              src={socialPanels[1].src}
              website={socialPanels[1].website}
                      />
            <SocialPanel
              name={socialPanels[2].name}
              src={socialPanels[2].src}
              website={socialPanels[2].website}
            />
          </center>
        </div>
    
      </div>
    </main>
  )
}

export default SocialPanels