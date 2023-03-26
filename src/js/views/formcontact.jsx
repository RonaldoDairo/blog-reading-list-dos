import React, { useState, useContext, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { createNewContact, editContact } from "../service";
import { Context } from "../store/appContext";
import "../../styles/demo.css";
const initialState = 
    {
        "agenda_slug": "Dairo",
        "full_name": "",
        "email": "",
        "phone": "",
        "address": "",
    }

export	const FormContact = () => {
	const {store, actions} = useContext(Context);
	const [contact , setContact] = useState(initialState);
	const { type } = useParams();
	const navigate = useNavigate()
	useEffect(()=>{
		if(type === 'edit'){
			setContact(store.contact)
		}
	},[])
	const handelChange = ({target})=>{
		setContact({...contact, [target.name] : target.value})
	}
	const handelSubmit = async (e)=>{
		e.preventDefault();
		type === 'edit' ? await editContact(contact) : await createNewContact(contact);
		navigate('/');
	}



	return (
		<div className="container">
			<form onChange={handelChange} onSubmit={handelSubmit}>	
					<div class="mb-3">
						<label for="full_name" class="form-label">Full name</label>
						<input type="text" class="form-control" id="full_name" name="full_name" aria-describedby="emailHelp" defaultValue={contact.full_name}/>
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="nameHelp" defaultValue={contact.email}/>
					</div>
					<div class="mb-3">
						<label for="address" class="form-label">Address</label>
						<input type="text" class="form-control" id="address" name="address" aria-describedby="addresslHelp" defaultValue={contact.address}/>
					</div>
					<div class="mb-3">
						<label for="phone" class="form-label">phone</label>
						<input type="text" class="form-control" id="phone" name="phone" aria-describedby="phonelHelp" defaultValue={contact.phone}/>
					</div>
					
					<button type="submit" class="btn btn-primary">Submit</button>
			</form>
				<br/>
				<br/>
				<br/>
			{/* <ul className="list-group">
				{store.demo.map((item, index) => {
					return (
						<li
							key={index}
							className="list-group-item d-flex justify-content-between"
							style={{ background: item.background }}>
							<Link to={"/single/" + index}>
								<span>Link to: {item.title}</span>
							</Link>
							{// Conditional render example
							// Check to see if the background is orange, if so, display the message
							item.background === "orange" ? (
								<p style={{ color: item.initial }}>
									Check store/flux.js scroll to the actions to see the code
								</p>
							) : null}
							<button className="btn btn-success" onClick={() => actions.changeColor(index, "orange")}>
								Change Color
							</button>
						</li>
					);
				})}
			</ul>
			<br /> */}
			<Link to="/">
				<button className="btn btn-primary">HOME</button>
			</Link>
		</div>
	);
};
