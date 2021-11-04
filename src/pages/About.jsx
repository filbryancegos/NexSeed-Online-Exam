import React from 'react'
import styled from 'styled-components'
import HomeBg from '../images/home.jpg'
import Title from '../components/Title'
import Image from '../images/Takahara.jpg'
import '../css/About.css'


const About = () => {
	const title = "About Us"
	return (
		<HeroContainer className="h-min-screen text-left">
			<Title title={title} />
			<div className="px-6">
				<div className="mt-4">
					<Box className="sm:ml-24 mt-24">
						<div className="flex flex-col sm:flex-row">
							<img className="float-image shadow-xl" src={Image} alt="" />
							<div className="sm:-ml-12 mt-8 sm:mt-0">
								<h1 className="text-3xl font-bold text-black">Lorem Ipsum</h1>
								<p className="mt-6">
									Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem sapiente illo culpa fuga eligendi debitis esse quae velit iusto nihil quisquam quasi laudantium, veritatis ex natus tempore veniam sequi? Consectetur?
								</p>
								<p className="mt-8">
									Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt eius quas dolore vero alias iusto sapiente, vitae commodi voluptate eaque temporibus enim ducimus autem neque reprehenderit tempora dolor cum. Ipsa.
								</p>

							</div>
						</div>

						<div className="sm:-mt-16 mt-3 sm:mt-0">
							<p><span className="text-3xl font-bold">Lorem ipsum dolor</span> sit amet consectetur adipisicing elit. Nam saepe fugit odit fugiat neque reprehenderit, ea inventore nemo magni, laboriosam architecto eius amet, veniam quam doloremque facilis autem quisquam accusamus?</p>
							<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt ullam magnam maxime minima aliquam? Soluta porro itaque perferendis provident cumque placeat sit voluptates minima voluptate similique. Unde labore tempore nesciunt.</p>
						</div>
					</Box>
				</div>
				
			</div>
		</HeroContainer>
	)
}

export default About


const HeroContainer = styled.div`
background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
url(${HomeBg});
min-height: 100vh;
backround-position: center;
background-size: cover;
`;

const Box = styled.div`
background: #85c3f6;
padding: 20px;
`;