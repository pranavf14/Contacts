import React, { useContext } from "react";

import Context from "../Context";
import NavBar from "../components/NavBar";
import AddContact from "./AddContact";
import DisplayContacts from "./DisplayContacts";

const Home = () => {
	const { contacts } = useContext(Context);

	return (
		<>
			<NavBar />

			<AddContact />

			{contacts.length > 0 ? (
				<DisplayContacts />
			) : (
				<h2 className="text-center pt-4">No Contacts</h2>
			)}
		</>
	);
};

export default Home;
