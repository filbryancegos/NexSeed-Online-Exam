import React, { useState } from 'react'

const Form = () => {
	const initialState = {
		name: '',
		email: '',
		nationality: '',
		phone: '',
		subject: '',
		message: ''
	}

	const [form, setForm] = useState(initialState)
	const [error, setError] = useState('')
	const [sucess, setSucess] = useState('')

	const { name, email, nationality, phone, subject, message} = form;

	const handleChange = (e) => {
		const {name, value } = e.target
		setForm({
			...form,
			[name]: value
		})
	}


	const handleSubmit = (e) => {
		e.preventDefault()
		const values = [name, email, nationality, phone, subject, message]
		let errMsg = '';
		let successMsg = ''

		console.log(values);

		const allFieldsFilled = values.every(field => {
			const value = `${field}`.trim();
			return value !== '' && value !== '0';
		})

		if (allFieldsFilled) {
			successMsg = "Success";
			clearFields()
		} else {
			errMsg = "please input out all the fields"
		}
		setError(errMsg)
		setSucess(successMsg)

		setTimeout(() => {
			setSucess('')
		}, 3000)
	}

	const clearFields = () => {
		setForm({
			name: '',
			email: '',
			nationality: '',
			phone: '',
			subject: '',
			message: ''
		})
	}
	return (
		<div className="p-4 form-wrap shadow-md">
			{sucess && <p className="text-green-500 text-base font-bold mb-2">{sucess}</p>}
			{error && <p className="text-red-500 text-base font-bold mb-2">{error}</p>}
			<form onSubmit={handleSubmit}>
				<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2">
					<div className="col-span-1">
						<div>
							<input
							type="text" 
							name="name" 
							value={form.name} 
							onChange={handleChange}
							className="mt-1 block w-full" placeholder="Name" />
						</div>
						<div>
							<input type="email" 
							name="email" 
							value={form.email} 
							onChange={handleChange}
							className="mt-1 block w-full" placeholder="Email" />
						</div>
					</div>
					<div className="col-span-1">
						<div>
							<input type="text" 
						
							name="nationality" 
							value={form.nationality} 
							onChange={handleChange} 
							className="mt-1 block w-full" placeholder="Nationality" />
						</div>
						<div>
							<input type="text" 
								name="phone" 
								value={form.phone} 
								onChange={handleChange} 
							className="mt-1 block w-full" placeholder="Phone" />
						</div>
					</div>
					<div className="col-span-1 sm:col-span-2">
						<div>
							<input type="text" 
								name="subject" 
								value={form.subject} 
								onChange={handleChange} 
							className="mt-1 block w-full" placeholder="Subject" />
						</div>
					</div>

					<div className="col-span-1 sm:col-span-2 mt-1">
						<textarea
				
						value={form.message} 
						onChange={handleChange} 
						name="message" id="" cols="30" className="block w-full" rows="10" placeholder="Message"></textarea>
					</div>

				</div>
				<button type="submit" className="hover:bg-blue-900 bg-blue-700 px-6 mt-4 py-1 text-white rounded-lg shadow-md uppercase cursor-pointer">Submit</button>
			</form>
		</div>
	)
}

export default Form
