

//const URL = "https://assets.breatheco.de/apis/fake/contact/agenda/Dairo"
const URL = "https://assets.breatheco.de/apis/fake/contact/"
const HEADERS = {"Content-Type": "application/json"}
export const getAllContacts = async() => {
    try{
        const resp = await fetch(`${URL}agenda/Dairo`);
        console.log("la res ",resp)
          return await resp.json();
        
    }catch(err){
            console.log('ERROR in Get All Contacts',err)
        }  
}


export const createNewContact = async(newContact)=> {
    try{
        console.log("in create contact", newContact);
        const response = await fetch(URL,{method: "POST",
        body: JSON.stringify(newContact),
        headers: HEADERS 
        });
        return await response.json();
    }catch(err){
        console.log('ERROR in Create new contact',err)
    }

}
export const editContact = async (contact)=>{
    try{
        console.log("ediittt", contact)
        const res = await fetch(`${URL}${contact.id}`, {
            method: "PUT",
            body: JSON.stringify(contact),
            headers: HEADERS, 
            redirect: "follow"
        })
        return await res.json();
    }catch(err){
        console.log('ERROR in Edit contact',err)
    }
}
export const deleteContact = async (contact_id)=>{
    try{
        console.log('Delete', contact_id)
        const res = await fetch(`${URL}${contact_id}`, {
            method: "DELETE",
            headers: HEADERS, 
            redirect: "follow"
        })
        return await res.json();
    }catch(err){
        console.log('ERROR in Delete contact',err)
    }
}
