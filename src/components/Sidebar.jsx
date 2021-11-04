import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo  from '../images/logo1.png'
import  '../css/Sidebar.css'

const Sidebar = ({toggle}) => {
	return (
		<div className={`px-6 sideBarContainer ${toggle ? 'active': ''}`}>
			<div className="flex justify-start py-4">
				<img className="text-center" src={Logo} width="200" alt="" />
			</div>
			<ul className="text-black w-full">
					<li className="flex py-4">
						<NavLink to='/' className="uppercase nav-item w-full text-left font-bold" exact={true}>
							Home
						</ NavLink>
					</li>
					<li className="flex py-4">
						<NavLink to='/services' className="uppercase nav-item w-full text-left font-bold">
							Services Offered
						</ NavLink>
					</li>
					<li className="flex py-4">
						<NavLink to='/about' className="uppercase nav-item w-full text-left font-bold">
							About Us
						</ NavLink>
					</li>
					<li className="flex py-4">
						<NavLink to='/contact' className="uppercase nav-item w-full text-left font-bold">
							Contact us
						</ NavLink>
					</li>
				</ul>
		</div>
	)
}

export default Sidebar
