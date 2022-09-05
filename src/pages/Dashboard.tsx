import React, { useEffect, useState } from 'react';
import axios from 'axios';
import IProject from '../types/IProject';
import {ProjectCard} from '../components/ProjectCard';
import { stdout } from 'process';

const frontEndUrl = "https://github.com/NilK15/projectmanagement-frontend"
const frontendContributors = "https://github.com/NilK15/projectmanagement-frontend/graphs/contributors"
const frontendDescription = "https://github.com/NilK15/projectmanagement-frontend#readme"

const backEndUrl = "https://github.com/NilK15/projectmanagement-backend"
const backEndContributors = "https://github.com/NilK15/projectmanagement-backend/graphs/contributors"
const backEndDescription = "https://github.com/NilK15/projectmanagement-backend#readme"

const portfolioUrl = "https://github.com/NilK15/portfolio"
const portfolioContributors = "https://github.com/NilK15/portfolio/graphs/contributors"
const portfolioDescription = "https://github.com/NilK15/portfolio#readme"

const frontEndProject: IProject = {
    projectName: "Project Management - Front-End",
    manager: "Sunil",
    author: "Sunil, Clint",
    gitUrl: [frontEndUrl, frontendContributors, frontendDescription],
    projectStack: "TypeScript, React, Tailwindcss, Axios",
    description: "UI to interact with the database holding projects"
}

const backEndProject: IProject = {
    projectName: "Project Management - Back-End",
    manager: "Sunil",
    author: "Sunil, Clint",
    gitUrl: [backEndUrl, backEndContributors, backEndDescription],
    projectStack: "JavaScript, NodeJS, ExpressJS, Axios",
    description: "Back-end consisting of endpoints to provide info to the front-end UI"
}

const portfolio: IProject = {
    projectName: "Portfolio Website",
    manager: "Sunil",
    author: "Sunil",
    gitUrl: [portfolioUrl, portfolioContributors, portfolioDescription],
    projectStack: "TypeScript, React, Tailwindcss",
    description: "Presentable UI to see an overview for projects as well as direct links to them"
}

let projectArray: IProject[] = [];
projectArray.push(frontEndProject)
projectArray.push(backEndProject)
projectArray.push(portfolio)

const Dashboard = () => {
	const [data, setData] = useState([]);
	const [loaded, setLoaded] = useState(false);
	const [error, setError] = useState("");

	// const getProjectsOnLoad = async () => {

	// 	try {
	// 		const {data: response} = await axios.get('api/projects');
	// 		response.forEach(project => {
	// 			projectArray.push(project);
	// 		});
	// 		setData(projectArray)
	// 	} catch (error) {
	// 		console.log(error)
	// 	}
	// }
	
	// useEffect(()=>{

	// // Loads the projects from SQL lite using Axios GET call to projectArray
	// getProjectsOnLoad();

	// },[projectArray])

	return (
		<div className='DashboardContainer flex h-screen'>
			<div className=' flex flex-wrap w-full justify-evenly h-5/6 gap-5'>
			{ projectArray.map((item,index)=> {return ProjectCard(item)})}
			</div>
		</div>
	);
}
export default Dashboard;
