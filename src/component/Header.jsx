import { MDBMask, MDBView } from 'mdbreact';
import React from 'react';

const Header = (props) => {
    return(
        <MDBView src="assets/header.jpg">
              <MDBMask overlay="indigo-slight" className="flex-center flex-column text-white text-center">
                <h2 className="h2-responsive">{props.title}</h2>
            </MDBMask>
        </MDBView>
    )
}

export default Header;