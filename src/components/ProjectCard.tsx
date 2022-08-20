import IProject from "../types/IProject"
import axios from 'axios';


export const ProjectCard = (props: IProject) => {
    return(
            <div className="Card flex items-center w-5/12 h-72 border border-blue-300 bg-green-300 rounded-xl shadow-xl shadow-slate-900 overflow-hidden cursor-pointer whitespace-nowrap text-xl" 
            onClick={()=>{window.open(props.gitUrl)}}>
                <div className="flex-col w-full ">
                    <div className="p-5" >Project Name: {props.projectName}</div>
                    <div className="p-5" >Project Contributors: {props.author}</div>
                    <div className="p-5" >Project Stack: {props.projectStack}</div>
                    <div className="pl-2 h-20 w-auto overflow-auto whitespace-normal bg-slate-400 italic text-white rounded-xl shadow-xl shadow-slate-800 border border-slate-900" >Brief Description: {props.description}</div>
                </div>
            </div>
    )
}