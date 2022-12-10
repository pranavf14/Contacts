import React, { useContext, useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
// import { v4 as uuidv4 } from "uuid";
import Context from "../Context";

const AddContact = () => {
	const [name, setName] = useState("");
	const [mob, setMob] = useState("");

	const { addNew, editContact, updateCon } = useContext(Context);

	useEffect(() => {
		if (editContact.edit === true) {
			setName(editContact.item.name);
			setMob(editContact.item.mob);
		}
	}, [editContact]);

	const formsubmit = (e) => {
		e.preventDefault();
		// const id = uuidv4();
		// console.log(id);
		const newCon = { name, mob };

		if (editContact.edit) {
			updateCon(editContact.item.id, newCon);
		} else {
			addNew(newCon);
		}

		setMob("");
		setName("");
	};

	return (
		<>
			<Container className="mx-auto mt-5 w-50 p-2 border border-dark">
				<Form onSubmit={formsubmit}>
					<Form.Group>
						<Form.Label>Name</Form.Label>
						<Form.Control
							type="text"
							placeholder="Enter Name"
							value={name}
							required
							onChange={(e) => setName(e.target.value)}></Form.Control>
					</Form.Group>
					<Form.Group>
						<Form.Label className="mt-3">Mobile No.</Form.Label>
						<Form.Control
							type="number"
							placeholder="Enter Mobile No."
							value={mob}
							required
							onChange={(e) => setMob(e.target.value)}></Form.Control>
					</Form.Group>
					<div className="text-center">
						<Button
							className="  my-4 ml-2 col-4  text-center "
							variant="primary"
							type="submit">
							{editContact.edit ? <>Update Contact</> : <>Add Contact</>}
						</Button>
					</div>
				</Form>
			</Container>
		</>
	);
};

export default AddContact;
