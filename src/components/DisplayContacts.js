import React, { useContext } from "react";
import { Container, Card } from "react-bootstrap";
import Context from "../Context";
import { FaTrash, FaEdit } from "react-icons/fa";

const DisplayContacts = () => {
	const { contacts, deleteCon, editCon } = useContext(Context);

	return (
		<>
			<Container className="mx-auto w-50 mt-5 p-2 border border-dark ">
				{contacts.map((con) => (
					<Card className="m-2 " key={con.id}>
						<Card.Body>
							<Card.Text>
								<div className="row">
									<div className="col-10">
										<h5>Name: {con.name}</h5>
									</div>
									<div className="col-1">
										<span>
											<FaEdit
												style={{ color: "green", margin: 5 }}
												onClick={() => editCon(con)}
											/>
										</span>
									</div>
									<div className="col-1">
										<span>
											<FaTrash
												style={{ color: "red" }}
												onClick={() => deleteCon(con.id)}
											/>
										</span>
									</div>
								</div>
								<div className="row">
									<p>Contact: {con.mob}</p>
								</div>
							</Card.Text>
						</Card.Body>
					</Card>
				))}
			</Container>
		</>
	);
};

export default DisplayContacts;
