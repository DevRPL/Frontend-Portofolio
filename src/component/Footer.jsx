import React from "react";
import { MDBContainer, MDBFooter, MDBIcon, MDBRow, MDBCol } from "mdbreact";

const Footer = () => {
  return (
    <MDBFooter color="primary-color-dark">
      <MDBContainer fluid className="text-center p-4">
        <MDBRow>
          <MDBCol md="4">
            <h4 className="title pt-3 font-weight-bold">CV</h4>
            <div className="pt-5">
                <button title="Download Certificate" className="btn-white btn-outline-white btn Ripple-parent" disabled>Download CV</button>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <h4 className="title pt-3 font-weight-bold">GITHUB</h4>
            <div className="pt-5">
                <button title="Download Certificate" className="btn-white btn-outline-white btn Ripple-parent" disabled>Github</button>
            </div>
          </MDBCol>
          <MDBCol md="4">
            <h4 className="title pt-3 font-weight-bold">CERTIFICATE</h4>
            <div className="pt-5">
                <button  title="Download Certificate" className="btn-white btn-outline-white btn Ripple-parent" disabled>Download Certificate</button>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>  
      
      <div className="pt-4"></div>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          © 2014 - { new Date().getFullYear() } Made with &hearts; using  <MDBIcon fab icon="laravel" /> <MDBIcon fab icon="react" /> 
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default Footer;