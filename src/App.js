import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Container } from 'react-bootstrap';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import EditContact from "./components/EditContact";
import { ContextProvider } from "./Context";
import DisplayContacts from "./components/DisplayContacts";
import AddContact from "./components/AddContact";

function App() {
	return (
		<>
			<ContextProvider>
				<Routes>
					<Route path="/" element={<Home />} exact />
					<Route path="/add" element={<AddContact />} eact />
					<Route path="/edit/:id" element={<EditContact />} />
					<Route path="/display" element={<DisplayContacts />} />
				</Routes>
			</ContextProvider>
		</>
	);
}

export default App;
