import React, {useState} from 'react'
import styled from 'styled-components'
import HomeBg from '../images/home.jpg'
import Title from '../components/Title'
import TimePicker from 'react-time-picker'

const Book = () => {
	const title = "Book a Schedule"
	const today = new Date();
	const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
	const [value, onChange] = useState(time)
	return (
		<HeroContainer className="h-min-screen text-left">
			<Title title={title} />
			<div className=" mt-8 px-16">
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
					<ColOne className=" p-4 w-full md:w-3/4">
						<div>
							<h1 className="text-black text-3xl uppercase font-bold">Day</h1>
							<div className="p-4 mt-4">
								<div className="flex justify-between flex-wrap">
									<div>
										<div>
											<label className="inline-flex items-center">
												<input type="checkbox"/>
												<span className="ml-2 uppercase font-bold">Monday</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input type="checkbox"/>
												<span className="ml-2 uppercase font-bold">Tuesday</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input type="checkbox"/>
												<span className="ml-2 uppercase font-bold">WednesDay</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input type="checkbox"/>
												<span className="ml-2 uppercase font-bold">Thursday</span>
											</label>
										</div>
									</div>
									<div>
										<div>
											<label className="inline-flex items-center">
												<input type="checkbox"/>
												<span className="ml-2 uppercase font-bold">Friday</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input type="checkbox"/>
												<span className="ml-2 uppercase font-bold">Saturday</span>
											</label>
										</div>
										<div>
											<label className="inline-flex items-center">
												<input type="checkbox"/>
												<span className="ml-2 uppercase font-bold">Sunday</span>
											</label>
										</div>
									</div>		
								</div>
							</div>
						</div>

						<div className="mt-5">
							<h1 className="text-black text-3xl uppercase font-bold">time</h1>
							<div className="px-4 mt-4">
								<TimePicker onChange={onChange} value={value} />
							</div>
						</div>
						
					</ColOne>

					<div className="w-full flex justify-end">
						<ColTwo className="p-6 w-full sm:w-1/2 mr-0">
							<div>
								<h1 className="text-black text-3xl capitalize font-bold text-center">Choose your own Schedule</h1>
								<p className="mt-4">
									Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla cupiditate amet, illum similique odio officiis illo dolorum non quis fugit, molestiae optio expedita eius sunt numquam iure repudiandae consequatur autem.
								</p>
							</div>
						</ColTwo>
					</div>


				</div>
				
			</div>

		</HeroContainer>
	)
}

export default Book
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

const ColOne = styled.div`
background: #e6e1c1
`;

const ColTwo = styled.div`
background: #bad5e8
`;