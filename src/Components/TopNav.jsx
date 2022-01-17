import React from "react";
import { NavLink } from 'react-router-dom';

let TopNav = ()=> {
    return (            		
		<nav className="navbar navbar-expand-lg navbar-dark bg-primary">
			<div className="container-fluid">
				<a href="#" className="navbar-brand">WoodBridge Public Library</a>
				<button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#collapseNav">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="collapseNav">
					<div className="navbar-nav">
						<NavLink exact to="/" className="nav-item nav-link active">Admin Page</NavLink>
						<NavLink to="/user-page" className="nav-item nav-link">User Page</NavLink>
					</div>
					<div className="navbar-nav ms-auto">
                        <NavLink to="/contact-us" className="nav-item nav-link active">Contact Us</NavLink>
					</div>					
				</div>
			</div>
		</nav>
    );
}

export default TopNav;