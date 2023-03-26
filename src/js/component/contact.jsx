import React, { useContext } from "react";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import { deleteContact } from "../service";
import { BsFillPencilFill } from 'react-icons/bs';
import { BsFillTrashFill } from 'react-icons/bs';


export const Contact = ({ contact, getData })=>{

    
const { actions } = useContext(Context);
const navigate  = useNavigate();
const editContact = ()=>{
    actions.modifyContact(contact);
    navigate('/form/edit');
}
        const deleteOneContact =async ()=>{
                    const isDelete = window.confirm(`¿Deseas Eliminar Esta Informacion?`)
                    if (isDelete){
                    (el =>el.index === index)
                    await deleteContact(contact.id)
                    getData();
           }
        }
        
        return(
                    <div className="card rounded-pill" >
                        <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card" alt="..."/>
                            <div className="body">
                                <h1 className="card-title text-start mt-3">{contact.full_name}
                                    <BsFillPencilFill className="iconPencil " onClick={editContact}/>&nbsp; 
                                    <BsFillTrashFill className="iconTrash "   onClick={deleteOneContact}/>
                                </h1>
                                    <p className="card-text text-start datos">{contact.address} </p>
                                    <p className="card-text text-start datos">{contact.phone} </p>
                                    <p className="card-text text-start datos">{contact.email} </p>
                            </div>
                    </div>	

        )


}