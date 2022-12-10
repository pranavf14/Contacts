import React from "react";
import { Container, Navbar } from "react-bootstrap";

const NavBar = () => {
	return (
		<Navbar bg="success ">
			<Container>
				<Navbar.Brand className="fs-2  font-monospace text-center">
					Contacts
				</Navbar.Brand>
				{/* <Nav.Link className="btn btn-warning p-2" href="/display">
					Add Contact
				</Nav.Link> */}
			</Container>
		</Navbar>
	);
};

export default NavBar;
