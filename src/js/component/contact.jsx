import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { deleteContact } from "../service";


export const Contact = ({ contact, getData })=>{

    
const {store, actions} = useContext(Context);
const navigate  = useNavigate();
const editContact = ()=>{
    actions.modifyContact(contact);
    navigate('/form/edit');
}
const deleteOneContact =async ()=>{
    await deleteContact(contact.id)
    getData()
}


        return(
            <div className="card" >
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card" alt="..."/>
            <div className="body">
            <h1 className="card-title text-start">{contact.full_name} </h1>
            <p className="card-text text-start ">{contact.address} </p>
            <p className="card-text text-start ">{contact.phone} </p>
            <p className="card-text text-start ">{contact.email} </p>
            <p onClick={editContact}>editar</p>
            <p onClick={deleteOneContact}>delete</p>
            </div>
        </div>	

        )


}