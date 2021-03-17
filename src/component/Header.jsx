import { MDBMask, MDBView } from 'mdbreact';
import React from 'react';

const Header = (props) => {
    return(
        <MDBView src="https://c.pxhere.com/photos/88/53/desktop_pen_writing_handwriting_computer_notebook_hands_desk-106505.jpg!d">
              <MDBMask overlay="indigo-slight" className="flex-center flex-column text-white text-center">
                <h2 className="h2-responsive">{props.title}</h2>
            </MDBMask>
        </MDBView>
    )
}

export default Header;