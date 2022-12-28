import React, { useEffect, useState } from "react";
import axios from "axios";
import IProject from "../types/IProject";
import { ProjectCardTwo } from "../components/ProjectCardTwo";
import { stdout } from "process";

const apiURL = "http://nilk15.github.io/react-multi-api-fetcher";

const youtubeURL = "http://nilk15.github.io/youtube-design-html-css-only";

const apiProject: IProject = {
  projectName: "Multi API Fetcher (Pokemon, Dogs, Nasa)",
  manager: "Sunil Khatri",
  author: "Sunil Khatri",
  gitUrl: [apiURL, apiURL, apiURL],
  projectStack: "Javascript, HTML, CSS",
  description: "An application that consumes a Pokemon, dog, and NASA API.",
};

const youtubeProject: IProject = {
  projectName: "Youtube Design Imitation",
  manager: "Sunil Khatri",
  author: "Sunil Khatri",
  gitUrl: [youtubeURL, youtubeURL, youtubeURL],
  projectStack: "HTML, CSS",
  description: "A static, responsive imitation of YouTube",
};

let projectArray: IProject[] = [];
projectArray.push(apiProject);
projectArray.push(youtubeProject);

const Dashboard = () => {
  return (
    <div className="DashboardDiv flex flex-col items-center w-full h-96">
      <div className="DashboardContainer max-w-screen-2xl flex">
        <div className="gridContainer grid grid-cols-2 w-full gap-10">
          {projectArray.map((item, index) => {
            return ProjectCardTwo(item);
          })}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
