import React from 'react';
import marker from '../../images/turkey/jim-beam/JB-proxy-logo.png';
import Box from '../BoxBlack';
import Sdata from '../Sdata';

const Categoryt2 = () => {
    return (
        <>
        <section className="turkey-bg-cat2">
        <div className="container">
          <div className="row">
          <div className="col-lg-12">
          <div className="logo"><img src={marker} alt="" width="100px"/></div>
          
          <hr className="line-black" />

          <div className="row">

          {
                    Sdata.map((val,ind)=> {
                        return <Box key={ind}
                        imgsrc={val.imgsrc}
                        title={val.title}
                        description={val.description}
                        link={val.link}
                        />
                    })
                }

         

          </div>

          
          </div>
          
          
          
          </div>
          </div>
          </section>
        </>
    );
};

export default Categoryt2;

