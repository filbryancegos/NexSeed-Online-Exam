import React, {useState,useRef, useEffect} from 'react'
import { NavLink, Link } from 'react-router-dom'
import Logo from '../images/logo1.png'
import '../css/Nav.css'
import Sidebar from './Sidebar'
import { FiAlignCenter, FiX  } from "react-icons/fi"; 

const Nav = () => {
	const [toggle, setToggle] = useState(false)
	const ref = useRef()

	useEffect(() => {
		const checkIfClickOutside = (e) => {
			if (toggle && ref.current && !ref.current.contains(e.target)) {
				setToggle(false)
			}
		}

		const checkWindow = (e) => {
			if (window.innerWidth > 767) {
				setToggle(false)
			}
		}
		document.addEventListener('mousedown',checkIfClickOutside )
		window.addEventListener('resize',checkWindow )

		return () => {
			document.removeEventListener('mousedown',checkIfClickOutside )
			window.removeEventListener('resize',checkWindow )
		}
	}, [toggle])

	return (
		<>
			<div className="bg-white py-6 shadow-sm">

				{!toggle ? (
					<div onClick={() => setToggle(!toggle)} className="cursor-pointer flex justify-end items-center sm:hidden pr-6">
					<FiAlignCenter className="text-3xl" />
				</div>
				):(
					<div ref={ref} onClick={() => setToggle(!toggle)} className="cursor-pointer flex justify-end items-center sm:hidden pr-6">
					<FiX className="text-3xl" />
				</div>
				)
				
				}
				
				<div className="grid-cols-1 sm:grid-cols-2  hidden sm:grid">
					<div className="pl-12">
						<div className="mb-4">
							<img src={Logo} alt="company logo" width="200" className="pt-6" />
						</div>
						<ul className="flex space-x-4 text-black">
							<li className="flex items-center">
								<NavLink to='/' className="uppercase nav-item font-bold" exact={true}>
									Home
								</ NavLink>
							</li>
							<li className="flex items-center">
								<NavLink to='/services' className="uppercase nav-item font-bold">
									Services Offered
								</ NavLink>
							</li>
							<li className="flex items-center">
								<NavLink to='/about' className="uppercase nav-item font-bold">
									About Us
								</ NavLink>
							</li>
							<li className="flex items-center">
								<NavLink to='/contact' className="uppercase nav-item font-bold">
									Contact us
								</ NavLink>
							</li>
						</ul>
					</div>

					<div className="flex justify-end items-end">
					<Link to="book">
						<button className="title-book hover:bg-blue-500 hover:text-white px-6 py-2 text-black uppercase font-bold"> book a schedule</button>
					</Link>

					</div>
					
				</div>
			</div>

			<Sidebar toggle={toggle} />
		
		</>
	)
}

export default Nav
