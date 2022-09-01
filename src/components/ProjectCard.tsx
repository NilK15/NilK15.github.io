import IProject from "../types/IProject"
import axios from 'axios';

export const ProjectCard = (props: IProject) => {
    return(
            <div className="ProjectCard flex w-full h-4/5 lg:w-5/12 lg:h-full hover:-translate-y-2 duration-200 hover:bg-orange-800 hover:border-2 hover:border-orange-200  border-black bg-orange-900  rounded-xl shadow-xl shadow-slate-900 overflow-hidden cursor-pointer whitespace-nowrap text-xl" 
            onClick={()=>{window.open(props.gitUrl)}}>
                <div className="ProjectInfoDescContainer flex-col w-full h-full " >
                    <div className="ProjectInformation flex h-1/2 items-center justify-center px-2 text-brown-300 ">
                        <div>
                            <div className="p-5" >Project Name: {props.projectName}</div>
                            <div className="p-5" >Project Contributors: {props.author}</div>
                            <div className="p-5" >Project Stack: {props.projectStack}</div>
                        </div>
                    </div>
                    <div className="ProjectDescription text-brown-900 h-1/3 mt-24 mx-4 whitespace-normal bg-orange-300 italic rounded-xl shadow-lg shadow-slate-800 border border-slate-900">
                        <label className="label pl-2">Brief Description:</label>
                        <div className=" text-brown-900 pl-10 pt-2 text-4xl">{props.description}</div>
                    </div>
                </div>
            </div>
    )
}