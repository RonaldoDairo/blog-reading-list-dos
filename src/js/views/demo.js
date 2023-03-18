import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";

export const Demo = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			<form>	
					<div class="mb-3">
						<label for="full_name" class="form-label">Full name</label>
						<input type="text" class="form-control" id="full_name" aria-describedby="emailHelp"/>
					</div>
					<div class="mb-3">
						<label for="exampleInputEmail1" class="form-label">Email address</label>
						<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="nameHelp"/>
					</div>
					<div class="mb-3">
						<label for="agenda_slug" class="form-label">Agenda Slug</label>
						<input type="text" class="form-control" id="agenda_slug" aria-describedby="agendalHelp"/>
					</div>
					<div class="mb-3">
						<label for="address" class="form-label">Adress</label>
						<input type="text" class="form-control" id="address" aria-describedby="addresslHelp"/>
					</div>
					<div class="mb-3">
						<label for="phone" class="form-label">phone</label>
						<input type="text" class="form-control" id="phone" aria-describedby="phonelHelp"/>
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
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
