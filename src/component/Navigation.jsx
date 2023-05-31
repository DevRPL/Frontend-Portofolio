import React, { Component } from "react";
import { MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBContainer,
	MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBFormInline, MDBIcon } from "mdbreact";
class Navigation extends Component {
	state = {
		isOpen: false
	}

	toggleCollapse = () => {
		this.setState({ isOpen: !this.state.isOpen });
	}

	isActive = (props) => {
		const location = window.location.pathname;
		if (location === props) {
			return location ? true : false;
		}
	}

	render() {
		return (
			<header>
				<MDBNavbar color="primary-color-dark" dark expand="lg">
					<MDBContainer>
						<MDBNavbarBrand>
						<MDBNavbarBrand href='/' className="white-text"><strong className="white-text">Portofolio</strong></MDBNavbarBrand>
						</MDBNavbarBrand>
						<MDBNavbarToggler onClick={this.toggleCollapse} />
						<MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
						<MDBNavbarNav right>
							<MDBNavItem className="ml-2" active={this.isActive('/')}>
								<MDBNavLink to="/">Home</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem className="ml-2" active={this.isActive('/about')}>
								<MDBNavLink to="/about">About</MDBNavLink>
							</MDBNavItem> 
							<MDBNavItem className="ml-2" active={this.isActive('/skill')}>
								<MDBNavLink to="/skill">Skill</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem className="ml-2" active={this.isActive('/portfolio')}>
								<MDBNavLink to="/portfolio">Portfolio</MDBNavLink>
							</MDBNavItem>
							<MDBNavItem className="ml-2" active={this.isActive('/content')}>
								<MDBNavLink to="/content">Content</MDBNavLink>
							</MDBNavItem>
							{/* <MDBNavItem className="ml-2" active={this.isActive('/feedback')}>
								<MDBNavLink to="/feedback">Feedback</MDBNavLink>
							</MDBNavItem> */}
							<MDBNavItem className="ml-2">
								<MDBFormInline>
									<div className="md-form my-1">
										<div className="mr-sm-2">
											{this.props.children}
										</div>
									</div>
								</MDBFormInline>
							</MDBNavItem>
						</MDBNavbarNav>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
			</header>
			);
		}
	}

export default Navigation;