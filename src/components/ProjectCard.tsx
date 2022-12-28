import IProject from "../types/IProject";

export const ProjectCard = (props: IProject) => {
  return (
    <div
      className="ProjectCard flex mx-5 hover:-translate-y-2 duration-200 h-72 bg-purple-400 border-2 border-neon-blue  rounded-xl  overflow-hidden cursor-pointer whitespace-nowrap text-xl"
      onClick={() => {
        window.open(props.gitUrl[0]);
      }}
    >
      <div className="ProjectInfoDescContainer flex flex-col w-full justify-center cursor-pointer ">
        <div className="ProjectInformation w-full flex flex-col font-serif items-center justify-around px-2 text-white ">
          <div className="ProjectDescription flex flex-col w-full text-sm italic hover:opacity-80 duration-200 font-serif text-white mx-2 whitespace-normal bg-neon-darkblue rounded-xl shadow-md shadow-slate-800 border border-neon-teal">
            <label className="label pl-2 mt-2 ml-5 cursor-pointer ">
              Project Name:
            </label>
            <div className=" mb-2 text-center cursor-pointer">
              {props.projectName}
            </div>
          </div>
          <div
            className="ProjectContributors flex flex-col w-full text-sm italic hover:opacity-80 duration-200 font-serif text-white mx-2 whitespace-normal bg-neon-darkblue rounded-xl shadow-md shadow-slate-800 border border-neon-teal"
            onClick={() => {
              window.open(props.gitUrl[1]);
            }}
          >
            <label className="label pl-2 font mt-2 ml-5 ">
              Project Contributors:
            </label>
            <div className=" text-center mb-2 ">{props.author}</div>
          </div>
          <div className="ProjectStack flex flex-col w-full text-sm italic hover:opacity-80 duration-200 font-serif text-white mx-2 whitespace-normal bg-neon-darkblue rounded-xl shadow-md shadow-slate-800 border border-neon-teal">
            <label className="label pl-2 font mt-2 ml-5 ">Project Stack:</label>
            <div className=" text-center ml-5 mb-2 ">{props.projectStack}</div>
          </div>
          <div
            className="ProjectDescription flex flex-col w-full text-sm italic hover:opacity-80 duration-200 font-serif text-white mx-2 whitespace-normal bg-neon-darkblue rounded-xl shadow-md shadow-slate-800 border border-neon-teal"
            onClick={() => {
              window.open(props.gitUrl[2]);
            }}
          >
            <label className="label pl-2 font mt-2 ml-5 ">
              Brief Description:
            </label>
            <div className=" text-white text-center p-2 pt-2 mb-2 r">
              {props.description}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
