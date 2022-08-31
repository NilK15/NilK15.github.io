import IProject from "../types/IProject"
import axios from 'axios';


export const ProjectCard = (props: IProject) => {
    return(
            <div className="Card flex w-full h-4/5 lg:w-5/12 lg:h-full border border-orange-800 bg-orange-900  rounded-xl shadow-xl shadow-slate-900 overflow-hidden cursor-pointer whitespace-nowrap text-xl" 
            onClick={()=>{window.open(props.gitUrl)}}>

                <div className="flex-col w-full h-full">

                    <div className="flex h-1/2 items-center justify-center px-2 text-brown-500 ">
                        <div className="flex-col">
                            <div className="p-5" >Project Name: {props.projectName}</div>
                            <div className="p-5" >Project Contributors: {props.author}</div>
                            <div className="p-5" >Project Stack: {props.projectStack}</div>
                        </div>

                    </div>
                    <div className=" h-full text-brown-900 my-20 pl-2 overflow-auto whitespace-normal bg-orange-300 italic rounded-xl shadow-xl shadow-slate-800 border border-slate-900">
                        <label className="label pl-2">Brief Description:</label>
                        <div className="pl-10 pt-2 text-4xl">{props.description}</div>
                    </div>


                </div>

            </div>
    )
}