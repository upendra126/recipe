import React from 'react'

const Box = (props) => {
    return (
        <>
       

       {/* <div className="col-lg-4">
          <div className="box">
          <div id="background-video" style={{background: 'url("https://cdn.pixabay.com/photo/2018/07/20/22/43/adler-3551609_960_720.jpg") top center no-repeat',backgroundSize: 'cover'}}>
          <iframe id="video" width="100%" height="315" src={props.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <div className="play-btn">Play Button</div>
          </div>
          <h2 className="title">{props.title}</h2>
          <p className="description">{props.description}</p>
          </div>
          </div>
               */}


              <div className="col-lg-4">
          <div className="box">
          <iframe id="video" width="100%" height="315" src={props.link} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          <h2 className="title">{props.title}</h2>
          <p className="description">{props.description}</p>
          </div>
          </div>
             
            
        </>
    )
}

export default Box
