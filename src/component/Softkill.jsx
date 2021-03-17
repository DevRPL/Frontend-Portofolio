import React from "react";
import {  MDBRow, MDBCol, MDBIcon, MDBContainer } from "mdbreact";

const Softkill = () => {
  return (
    <div className="text-center mt-5" style={{ padding: '50px' }}>
		<MDBContainer>
			<MDBRow>
				<MDBCol md="4" className="md-0 mb-5">
					<MDBRow>
						<MDBCol lg="2" md="3" size="2">
							<MDBIcon icon="laptop-code" size="2x" className="blue-text" />
						</MDBCol>
						<MDBCol lg="10" md="9" size="10">
						<p className="grey-text">
							Belajar bahasa pemrograman hanya dengan otodidak.
						</p>
						</MDBCol>
					</MDBRow>
				</MDBCol>
				<MDBCol md="4" className="md-0 mb-5">
					<MDBRow>
						<MDBCol lg="2" md="3" size="2">
							<MDBIcon icon="user-circle" size="2x" className="blue-text" />
						</MDBCol>
						<MDBCol lg="10" md="9" size="10">
						<p className="grey-text">
							Semangat dan pantang menyerah.
						</p>
						</MDBCol>
					</MDBRow>
				</MDBCol>
				<MDBCol md="4" className="md-0 mb-5">
					<MDBRow>
						<MDBCol lg="2" md="3" size="2">
							<MDBIcon icon="mug-hot" size="2x" className="blue-text" />
						</MDBCol>
						<MDBCol lg="10" md="9" size="10">
						<p className="grey-text">
							Mampu bekerja sama sebagai team maupun individu.
						</p>
						</MDBCol>
					</MDBRow>
				</MDBCol>
			</MDBRow>
		</MDBContainer>
    </div>
  );
}

export default Softkill;