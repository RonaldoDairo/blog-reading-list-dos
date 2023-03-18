import React,{ useState,useEffect } from "react";
import "../../styles/home.css";
import { getTodoList } from "../services/services.js";


export const Home = () => {
	const [list, setList] = useState([])
	const [load,setload] = useState (false)
	const getPeople = async()=>{
			setload(true)
			const datePeople = await getTodoList()
			console.log(datePeople[0].agenda_slug)
			setList(datePeople)
			setload(false)
	} 
	
	useEffect(() => {
	getPeople()
  	}, []);

return (
	<div className="text-center mt-5">
		<h1>Hello People</h1>
		{load ? <div class="d-flex justify-content-center">
			<div class="spinner-border" role="status">
				<span class="visually-hidden">Loading...</span>
			</div>
			</div> : null}
		{list.map((element, index)=> { return(
				<div className="card" key={index}>
					<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card" alt="..."/>
					<div className="body">
					<h1 className="card-title text-start">{element.full_name}</h1>
					<p className="card-text text-start ">{element.address} </p>
					<p className="card-text text-start ">{element.phone} </p>
					<p className="card-text text-start ">{element.email} </p>
					</div>
				</div>		
				
		);		
		}) 
		}
		{list.map((element, index)=> { return(
				<div className="card" key={index}>
					<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card" alt="..."/>
					<div className="body">
					<h1 className="card-title text-start">{element.full_name}</h1>
					<p className="card-text text-start ">{element.address} </p>
					<p className="card-text text-start ">{element.phone} </p>
					<p className="card-text text-start ">{element.email} </p>
					</div>
				</div>
				
		);		
		}) 
		}
		{list.map((element, index)=> { return(
				<div className="card" key={index}>
					<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHBlb3BsZSUyMGF0JTIwd29ya3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60" className="card" alt="..."/>
					<div className="body">
					<h1 className="card-title text-start">{element.full_name}</h1>
					<p className="card-text text-start ">{element.address} </p>
					<p className="card-text text-start ">{element.phone} </p>
					<p className="card-text text-start ">{element.email} </p>
					</div>
				</div>		
				
		);		
		}) 
		}
	</div>
);
}