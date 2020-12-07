import React from "react"

function Project({ title, deployedLink, imageSource, description, technologiesUtilized, repoLink }) {

    return (
        <div class="card col-10 col-xl-4 mb-4">
            <h3 class="card-title">{title}</h3>
            <a
                target="_blank"
                href={deployedLink}
                ><img
                class="card-img-top"
                src={imageSource}
                alt="Card caption"
            /></a>
            <div class="card-body">
                <p class="card-text">
                    {description}
                </p>
    <p class="card-text"><b>Technologies Utilized: </b>{technologiesUtilized}</p>
                <a
                href={repoLink}
                class="btn btn-primary"
                target="_blank"
                >Github Repo</a
                >
            </div>
        </div>
    )
}

export default Project