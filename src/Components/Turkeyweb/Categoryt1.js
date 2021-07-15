import React from 'react';
import marker from '../../images/turkey/auchentoshan/auchentoshan-proxy-logo.png';
import Box from '../Box';
import Sdata from '../Sdata';

const Categoryt1 = () => {
    return (
        <>
        <section className="turkey-bg">
        <div className="container">
          <div className="row">
          <div className="col-lg-12">
          <div className="logo"><img src={marker} alt="" width="50px"/></div>
          
          <hr className="line-white"/>

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

export default Categoryt1;

