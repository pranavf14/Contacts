import React, { useContext } from "react";
import { Container, Form, Button } from "react-bootstrap";
import Context from "../Context";

const EditContact = () => {
	const { contacts } = useContext(Context);
	console.log(contacts);
	return (
		<Container className="mx-auto mt-5 w-50 p-2 border border-dark">
			<Form>
				<Form.Group>
					<Form.Label>Name</Form.Label>
					<Form.Control type="text" placeholder="Enter Name"></Form.Control>
				</Form.Group>
				<Form.Group>
					<Form.Label className="mt-3">Mobile No.</Form.Label>
					<Form.Control
						type="number"
						placeholder="Enter Mobile No."></Form.Control>
				</Form.Group>
				<Button className=" m-4 " variant="primary" type="submit">
					Update
				</Button>
				<a href="/" className=" m-4 btn btn-danger " variant="danger">
					Cancel
				</a>
			</Form>
		</Container>
	);
};

export default EditContact;
