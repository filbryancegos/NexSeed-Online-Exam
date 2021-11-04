import React from 'react'
import styled from 'styled-components'
import HomeBg from '../images/home.jpg'
import {Carousel} from '3d-react-carousal'
import Title from '../components/Title'
import ImageOne from '../images/1.jpg'
import ImageTwo from '../images/3.jpg'
import ImageThree from '../images/5.jpg'

const Home = () => {
	const title = 'Home'
	let slides = [
		<img src={ImageOne} alt="1" />,
		<img src={ImageTwo} alt="2" />,
		<img src={ImageThree} alt="3" />
	]

	return (
		<HeroContainer className="h-min-screen text-left">
			<div>
				<Title title={title} />
				<div className="mt-8 px-16">
					<div className="mt-8">
						<Carousel slides={slides} />
					</div>
					<HeroDesc className="p-4 mt-12 opacity-80">
						<div className="mb-8 p-4">
							<HeroText className="p-2">
								<h1 className="text-5xl text-black font-bold">
									Lorem <br /> ipsum
								</h1>
							</HeroText>
							<p className="-mx-3.5">
								Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam dolore quis magni exercitationem cumque repellendus molestias? Ipsa dolore necessitatibus, quo incidunt dolores assumenda exercitationem cum dicta explicabo id soluta provident.
							</p>
							<p>
								Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo dolor libero natus voluptas rem minus aliquid explicabo? Itaque placeat recusandae laboriosam aspernatur iure, assumenda neque. Perspiciatis doloremque architecto maiores voluptatibus?
							</p>
						</div>
					</HeroDesc>
				</div>
			</div>
		</HeroContainer>
	)
}

export default Home



const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
url(${HomeBg});
min-height: 100vh;
backround-position: center;
background-size: cover;
`;


const HeroDesc =  styled.div`
	background-color: #89bbe0;
`;

const HeroText = styled.div`
	width: 200px;
	position: relative;
	top: -50px;
	left: -50px;
	float: left;
	background-color: #57a6e1;
	opacity: 0.9
`;
