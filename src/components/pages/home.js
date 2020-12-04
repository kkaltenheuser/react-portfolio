import React from "react";
import headshot from ""

function homePage() {

    return (
        <main class="container-fluid">
        <div class="row m-0 mt-4">

            <div class="col-sm-1"></div>

            <div class="col-sm-10">
            <div class="row">
                <div class="col-2 col-sm-1"></div>
                <div class="col-10 col-sm-6 col-md-5">
                <img
                    src={headshot}
                    alt="headshot"
                    width="200px"
                />
                </div>
                <div class="col-3 col-sm-1"></div>
                <div id="title" class="col-9 col-sm-4 col-md-5" >
                    <div class="row">
                        <h1>About</h1>
                    </div>
                    <div class="row">
                        <h1>Hi, Hello, Howdy!</h1>
                    </div>
                </div>
            </div>
            <div class="row mt-4 pt-4">
                <p>
                Upon graduating in May 2016, Karen "Ren" Kaltenheuser began travelling and consulting globally for a number of established brands, non-profits and NGO's. They have done work in art direction, branding, design, illustration. Currently, they are pursuing a Web Development Intensive at Columbia University while residing in NYC. 
                </p>
                <p>
                They are currently seeking a career in front-end web development where they seek to combine their academic interests and creative pursuits through the unification of technology.
                </p>
            </div>
            </div>

            <div class="col-sm-1"></div>
        </div>
        </main>
    )
}

export default homePage