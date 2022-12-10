import { createContext, useState, useEffect } from "react";

const Context = createContext();

export const ContextProvider = ({ children }) => {
	const [contacts, setContacts] = useState([]);
	const [editContact, setEditContact] = useState({ item: {}, edit: false });

	useEffect(() => {
		fetchContacts();
	}, []);

	const fetchContacts = async () => {
		const response = await fetch("/Contacts");

		const data = await response.json();
		setContacts(data);
	};

	const addNew = async (con) => {
		const response = await fetch("/Contacts", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(con),
		});

		const data = await response.json();

		setContacts([...contacts, data]);
	};

	const deleteCon = async (id) => {
		await fetch(`/Contacts/${id}`, { method: "DELETE" });
		setContacts(contacts.filter((con) => con.id !== id));
	};

	const updateCon = async (id, updCon) => {
		const response = await fetch(`/Contacts/${id}`, {
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(updCon),
		});

		const data = await response.json();
		console.log(data);

		setContacts(
			contacts.map((item) => (item.id === id ? { ...item, ...data } : item))
		);

		setEditContact({ edit: false });
	};

	const editCon = (item) => {
		setEditContact({ item, edit: true });
	};

	return (
		<Context.Provider
			value={{
				contacts,
				editContact,
				addNew,
				deleteCon,
				editCon,
				updateCon,
			}}>
			{children}
		</Context.Provider>
	);
};

export default Context;
