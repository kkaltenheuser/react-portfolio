import React from "react"

function Contact() {
     
    return (
        <main class="row">
            <div class="container col-12 m-0 ml-4 mt-4">
                <div class="row">
                    <div class="col-1"></div>
                    <div class="row col-10">
                        <h1>Contact Me</h1>
                        <form class="mt-4 pt-4" >
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input
                                type="email"
                                class="form-control"
                                id="name"
                                />
                            </div>
                            <form class="mt-4 pt-4" >
                            <div class="form-group">
                                <label for="pronouns"> Pronouns </label>
                                <input
                                type="text"
                                class="form-control"
                                id="name"
                                />
                            </div>
                            <div class="form-group">
                                <label for="email">Email address</label>
                                <input
                                type="email"
                                class="form-control"
                                id="email"
                                placeholder="yourname@example.com"
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleFormControlTextarea1">Say Howdy!</label>
                                <textarea
                                class="form-control"
                                id="exampleFormControlTextarea1"
                                rows="3"
                                ></textarea>
                            </div>
                            <button type="submit">Submit</button>
                        </form>
                        <br /><br />
                        <p>
                        <i class="fas fa-phone"></i> +1 515.451.1057
                        </p>
                        &nbsp;&nbsp;&nbsp;&nbsp;
                        <p>
                        <i class="fas fa-envelope-square"></i> karenkaltenheuser@gmail.com
                        </p>
                    </div>
                    <div class="col-1"></div>
                </div>
            </div>
        </main>
    )
}

export default Contact