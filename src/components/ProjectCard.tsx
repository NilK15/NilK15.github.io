import IProject from "../types/IProject"
import axios from 'axios';


export const ProjectCard = (props: IProject) => {
    return(
            <div className="Card flex items-center w-5/12 border border-blue-300 bg-green-300 rounded-xl shadow-xl shadow-slate-900 overflow-hidden cursor-pointer whitespace-nowrap text-xl" 
            onClick={()=>{window.open(props.gitUrl)}}>
                <div className="flex-col w-full">
                    <div className="m-5" >Project Name: {props.projectName}</div>
                    <div className="m-5" >Project Contributors: {props.author}</div>
                    <div className="m-5" >Project Stack: {props.projectStack}</div>
                    <div className=" w-full rounded shadow-xl shadow-slate-800 whitespace-pre-wrap border border-slate-900 bg-white" >Brief Description: {props.description}</div>
                </div>
            </div>
    )
}