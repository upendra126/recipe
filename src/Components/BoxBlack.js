import React from 'react'

const BoxBlack = (props) => {
    return (
        <>
    

              <div className="col-lg-4">
          <div className="box">
          <iframe id="video" width="100%" height="315" src={props.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <h2 className="title-black">{props.title}</h2>
          <p className="description-black">{props.description}</p>
          </div>
          </div>
             
            
        </>
    )
}

export default BoxBlack
