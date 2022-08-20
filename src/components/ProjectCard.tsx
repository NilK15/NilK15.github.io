import IProject from "../types/IProject"

export const ProjectCard = (props: IProject) => {
    return(
            <div className="Card flex items-center justify-center w-1/3 border border-blue-300 bg-green-300 rounded-xl shadow-xl shadow-slate-900 overflow-hidden cursor-pointer whitespace-nowrap text-xl" onClick={()=>{window.open(props.gitUrl)}}>
                <div className="flex-col ">
                    <div className="py-5" >Project Name: {props.projectName}</div>
                    <div className="py-5" >Project Contributors: {props.author}</div>
                    <div className="py-5" >Project Stack: {props.projectStack}</div>
                    <div className="py-5" >Brief Description: {props.description}</div>
                </div>
            </div>
    )
}