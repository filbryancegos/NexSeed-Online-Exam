import React from 'react'
import styled from 'styled-components'
import HomeBg from '../images/home.jpg'
import Title from '../components/Title'
import { FaMapMarkerAlt, FaVoicemail, FaBlenderPhone } from "react-icons/fa";
import Form from '../components/Form'

const Contact = () => {
	const title = 'Contact Us'
	return (
		<HeroContainer className="h-min-screen text-left">
			<Title title={title}/>
			<div className="flex items-center h-screen w-full">
				<div className="grid grid-cols-1 sm:grid-cols-2 items-center gap-6 px-12 h-full w-full">
					<div>
						<div className="flex space-x-4 items-center mb-4">
							<span className="bg-white p-2 rounded-full">
								<FaMapMarkerAlt className="text-lg text-black" />
							</span>
							<div className="text-white">12F, 2Quad Bldg, Cebu Business Park<br/>Cebu City, Cebu Philippines</div>
						</div>
						<div className="flex space-x-4 items-center mb-4">
							<span className="bg-white p-2 rounded-full">
								<FaVoicemail className="text-lg text-black" />
							</span>
							<div className="text-white"><a mailto="email@emailname.com">email@emailname.com</a></div>
						</div>
						<div className="flex space-x-4 items-center mb-4">
							<span className="bg-white p-2 rounded-full">
								<FaBlenderPhone className="text-lg text-black" />
							</span>
							<div className="text-white"><span>(032) 987 6541</span><br /> <span>+63 098 765 4321</span></div>
						</div>
					</div>
					<Form />
				</div>
			</div>
		</HeroContainer>
	)
}

export default Contact

const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
url(${HomeBg});
min-height: 100vh;
backround-position: center;
background-size: cover;
`;

