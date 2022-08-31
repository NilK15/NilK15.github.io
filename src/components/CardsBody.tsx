import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IProject from '../types/IProject';



const CardsBody = () => {
	const [data, setData] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState("");

	const fetchDataGet = async () => {
		try {
			const { data: response } = await axios.get<IProject []>('/api/projects');
			setData(response);

            // for each project in response, create card
            response.forEach((project) => {
                console.log(project)
                
            });
                

		} catch (error: any) {
			setError(error.message);
		} finally {
            }
			setLoaded(true);
		}
	

	// Reads the input fields in postDiv form, and when button to post project is pressed,
	// it sends the info to the backend via post
	const fetchDataPost = async (event: any) => {
		event.preventDefault();
		// Gets the values from the input fields in the form
		let projectObject: IProject = {
			projectName: (document.getElementById("projectName") as HTMLInputElement).value,
			manager: (document.getElementById("manager") as HTMLInputElement).value,
			author: (document.getElementById("author") as HTMLInputElement).value,
			gitUrl: (document.getElementById("gitUrl") as HTMLInputElement).value,
			projectStack: (document.getElementById("projectStack") as HTMLInputElement).value,
			description: (document.getElementById("description") as HTMLInputElement).value
		}
		try {
			// axios sending key/value response (Keys provided by "API", value is derived input fields above)
			// data is destrucutred from axios's response and the data variable is renamed to response due to data already being defined above
			const { data: response } = await axios.post('/api/projects', projectObject);
			setData(response);
			setTimeout(fetchDataGet, 1500);

		} catch (error: any) {
			setError(error.message);
			console.log(error.message);
		} finally {
			setLoaded(true);
		}
	}

	const fetchDataDelete = async (id: number = 0) => {
		try {
			if (id == 0) {
				const { data: response } = await axios.delete('/api/projects');
				setData(response);
				setTimeout(fetchDataGet, 1500);
			}
			else {
				const { data: response } = await axios.delete('/api/projects/' + id);
				setData(response);
				setTimeout(fetchDataGet, 1500);
			}
		} catch (error: any) {
			setError(error.message);
		} finally {
			setLoaded(true);
		}
	}
	return (
		<div className='bodyOverview h-screen flex-col p-3 rounded-xl transition ease-in-out '>
			<div className='getDiv flex mb-10 mt-3 rounded-xl border-green-800 bg-green-400 p-6 shadow-xl shadow-gray-900'>
				<button className='getButton transition ease-in-out hover:-translate-y-1 duration-300  text-5xl w-1/2 h-84 text-green-900 shadow-xl shadow-gray-900 rounded-xl font-bold border-green-700 bg-green-200 cursor-pointer hover:bg-green-300'
					onClick={fetchDataGet}> Get Projects </button>
				<div className='dataItems w-1/2 h-80 text-5xl shadow-xl shadow-gray-900 overflow-y-auto bg-green-700 rounded-xl ml-4 '>
					<div className='flex justify-center jsonHolder'>
						<pre className='text-xl text-green-200'>{JSON.stringify(data, null, 2)}</pre>
					</div>
				</div>
			</div>
			<div className='postDiv flex mb-10 shadow-xl shadow-gray-900 mt-3 bg-purple-400 rounded-xl border-purple-700 text-purple-900 p-6'>
				<div className='buttonHolder w-1/2'>
					<button type="submit" form="postForm" className='postButton transition ease-in-out hover:-translate-y-1 duration-300 w-full h-80 text-5xl shadow-xl shadow-gray-900 font-bold  rounded-xl bg-purple-200 text-purple-900 border-purple-800 hover:bg-purple-300 cursor-pointer' > Post Project </button>
				</div>
				<div className='formContainer block text-center w-1/2 h-80 overflow-y-auto'>
					<form id="postForm" className='formClass pt-6 pl-5 w-full' onSubmit={fetchDataPost}>
						<label className='inline-block whitespace-nowrap m-1 mb-5 w-24'> Project Name: </label>
						<input className='ml-4 w-2/3 rounded-full shadow-lg shadow-gray-900 bg-purple-200' placeholder='    Enter Project Name...' type="text" id="projectName" />
						<br />
						<label className='inline-block whitespace-nowrap m-1 mb-5 w-24 text-right'> Manager: </label>
						<input className='ml-4 w-2/3 rounded-full shadow-lg shadow-gray-900 bg-purple-200 ' placeholder='    Enter Manager Name...' type="text" id="manager" />
						<br />
						<label className='inline-block whitespace-nowrap m-1 mb-5 w-24 text-right'> Author: </label>
						<input className='ml-4 w-2/3 rounded-full shadow-lg shadow-gray-900 bg-purple-200 ' placeholder='    Enter Author Name...' type="text" id="author" />
						<br />
						<label className='inline-block whitespace-nowrap m-1 mb-5 w-24 text-right'> Git URL: </label>
						<input className='ml-4 w-2/3 rounded-full shadow-lg shadow-gray-900 bg-purple-200' placeholder='    Enter Git URL...' type="text" id="gitUrl" />
						<br />
						<label className='inline-block whitespace-nowrap m-1 mb-5 w-24 text-right'> Project Stack: </label>
						<input className='ml-4 w-2/3 rounded-full shadow-lg shadow-gray-900 bg-purple-200' placeholder='    Enter Project Stack...' type="text" id="projectStack" />
						<br />
						<label className='inline-block whitespace-nowrap m-1 mb-5 w-24 text-right'> Description: </label>
						<input className='ml-4 w-2/3 rounded-full shadow-lg shadow-gray-900 bg-purple-200' placeholder='    Enter Description...' type="text" id="description" />
						<br />
					</form>
				</div>
			</div>
			<div className='deletDivSpecific shadow-xl shadow-gray-900 flex mt-3 mb-10 rounded-xl blue-900 bg-blue-400 p-6'>
				<button className='deleteButtonSpecific transition ease-in-out hover:-translate-y-1 duration-300  shadow-xl shadow-gray-900 rounded-xl font-bold border-blue-800 bg-blue-200 hover:bg-blue-300 text-blue-900 cursor-pointer w-1/2 h-80 text-5xl' onClick={() => fetchDataDelete(parseInt((document.getElementById("idNumber") as HTMLInputElement).value))}> Delete Project By ID </button>
				<div className='flex w-1/2 items-center justify-center'>
					<label className='text-blue-900 text-3xl'> Project ID: </label>
					<input placeholder='0' type="number" id="idNumber" className='ml-4 pl-3 w-16 text-center rounded-md shadow-xl shadow-gray-900 bg-blue-100 text-5xl' />
				</div>
			</div>
			<div className='deleteDiv flex shadow-xl shadow-gray-900 rounded-xl mb-10 p-6 bg-pink-400 mt-3 border-pink-900'>
				<button className='deleteButton transition ease-in-out hover:-translate-y-1 duration-300 w-full h-80 text-5xl rounded-xl shadow-xl shadow-gray-900 border-pink-900 font-bold bg-pink-200 hover:bg-pink-300 text-pink-900 cursor-pointer' onClick={() => fetchDataDelete(0)}> Delete Last Project </button> </div>
		</div >
	);
}
export default CardsBody;
