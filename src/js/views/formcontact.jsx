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
	const {store} = useContext(Context);
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
						<input type="text" class="form-control" id="full_name" name="full_name" aria-describedby="emailHelp" defaultValue={contact.full_name} maxLength={40} required/>
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" name="email" aria-describedby="nameHelp" defaultValue={contact.email} maxLength={40} required/>
					</div>
					<div class="mb-3">
						<label for="address" class="form-label">Address</label>
						<input type="text" class="form-control" id="address" name="address" aria-describedby="addresslHelp" defaultValue={contact.address} maxLength={40} required/>
					</div>
					<div class="mb-3">
						<label for="phone" class="form-label">Phone</label>
						<input type="text" class="form-control" id="phone" name="phone" aria-describedby="phonelHelp" defaultValue={contact.phone} maxLength={9} required />
					</div>
					<button type="submit" class="btn btn-primary">Submit</button>
			</form>
				<br/>
				<br/>
				<br/>
			<Link to="/">
				<button className="btn btn-primary">HOME</button>
			</Link>
		</div>
	);
};
