import { MDBContainer } from 'mdbreact';
import React from 'react';

const Header = (props) => {
    return(
        <MDBContainer className="d-flex vh-100">
            <div className="d-flex w-100 justify-content-center align-self-center">
                <section className="text-center">
                    <h2 className="h2-responsive">{props.title}</h2>
                </section>
            </div>
        </MDBContainer>
    )
}
export default Header;



