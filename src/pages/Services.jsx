import React from 'react'
import styled from 'styled-components'
import HomeBg from '../images/home.png'
import Title from '../components/Title'
import Cards from '../components/Cards'


const Services = () => {
	const title = "services offered"
	const num1 = '1'
	const num2 = '2'
	const num3 = '3'
	return (
		<HeroContainer className="h-min-screen text-left">
			<Title title={title} />
			<div className="px-12">
				<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-4">
					<Cards num={num1} />
					<Cards num={num2} />
					<Cards num={num3} />
				</div>
			</div>
		
		</HeroContainer>
	)
}

export default Services


const HeroContainer = styled.div`
background: url(${HomeBg});
min-height: 100vh;
backround-position: center;
background-size: cover;
`;