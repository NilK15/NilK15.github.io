import IProject from "../types/IProject";

export const ProjectCardTwo = (props: IProject) => {
  return (
    <div
      className="ProjectCard flex mx-5 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-400 duration-200 h-72 bg-black border-2 border-pink-400 shadow-lg shadow-purple-400  rounded-xl  overflow-hidden cursor-pointer whitespace-nowrap text-xl"
      onClick={() => {
        window.open(props.gitUrl[0]);
      }}
    >
      <div className="ProjectInfoDescContainer flex flex-col w-full justify-center cursor-pointer ">
        <div className="ProjectInformation w-full flex flex-col font-serif items-center justify-around px-2 text-white hover:text-neon-teal">
          <div className=" mb-4 ">
            <div className="mb-2 text-center cursor-pointer">
              {props.projectName}
            </div>
          </div>
          <div className="ProjectDescription flex flex-col w-full text-sm hover:text-purple-400 duration-200 font-serif text-white  mx-2 whitespace-normal bg-myblack-gray rounded-xl shadow-md shadow-neon-teal border border-neon-aqua">
            <label className="text-slate-300 label pl-2 font mt-2 ml-5 ">
              Project Contributors:
            </label>
            <div className="text-center mb-2 ">{props.author}</div>
            <label className="text-slate-300 label pl-2 font mt-2 ml-5 ">
              Project Stack:
            </label>
            <div className="text-center ml-5 mb-2 ">{props.projectStack}</div>
            <label className="text-slate-300 label pl-2 font mt-2 ml-5 ">
              Brief Description:
            </label>
            <div className="text-center p-2 pt-2 mb-2 r">
              {props.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
