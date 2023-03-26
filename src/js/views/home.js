import React,{ useState,useEffect, useContext } from "react";

import "../../styles/home.css";
import { getAllContacts } from "../service";
import { Context } from "../store/appContext";
import { Contact } from "../component/contact.jsx";
export const Home = () => {
	// const [list, setList] = useState([])
	const {store , actions } = useContext(Context);
	console.log( store)
	console.log(actions)

	const [load,setload] = useState (false)
	const getData = async()=>{
			// setload(true)
			const data = await getAllContacts();
			actions.addContactList(data);
			// setload(false)
	} 
	useEffect(() => {
	getData()
  	}, []);

return (
	<div className="text-center mt-5">
		<h1>Hello People</h1>
			{load ? <div class="d-flex justify-content-center">
				<div class="spinner-border" role="status">
					<span class="visually-hidden">Loading...</span>
				</div>
				</div> : null}
		{store.contactList.map((contact, index)=> { return(
			<Contact key={index.id} contact={contact} getData={getData}/>
				
		);		
		}) 
		}
		
	</div>
);
}