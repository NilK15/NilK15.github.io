import React, { useEffect, useState } from "react";
import axios from "axios";
import IProject from "../types/IProject";
import { ProjectCard } from "../components/ProjectCard";
import { stdout } from "process";

const frontEndUrl = "https://github.com/NilK15/projectmanagement-frontend";
const frontendContributors =
  "https://github.com/NilK15/projectmanagement-frontend/graphs/contributors";
const frontendDescription =
  "https://github.com/NilK15/projectmanagement-frontend#readme";

const backEndUrl = "https://github.com/NilK15/projectmanagement-backend";
const backEndContributors =
  "https://github.com/NilK15/projectmanagement-backend/graphs/contributors";
const backEndDescription =
  "https://github.com/NilK15/projectmanagement-backend#readme";

const portfolioUrl = "https://github.com/NilK15/portfolio";
const portfolioContributors =
  "https://github.com/NilK15/portfolio/graphs/contributors";
const portfolioDescription = "https://github.com/NilK15/portfolio#readme";

const frontEndProject: IProject = {
  projectName: "Project Management - Front-End",
  manager: "Sunil Khatri",
  author: "Sunil Khatri",
  gitUrl: [frontEndUrl, frontendContributors, frontendDescription],
  projectStack: "TypeScript, React, Tailwindcss, Axios",
  description: "An application that consumes a Pokemon, dog, and NASA API.",
};

const backEndProject: IProject = {
  projectName: "Project Management - Back-End",
  manager: "Sunil Khatri",
  author: "Sunil Khatri",
  gitUrl: [backEndUrl, backEndContributors, backEndDescription],
  projectStack: "JavaScript, NodeJS, ExpressJS",
  description: "Back-end routing endpoints for front-end UI",
};

const portfolio: IProject = {
  projectName: "Portfolio Website",
  manager: "Sunil Khatri",
  author: "Sunil Khatri",
  gitUrl: [portfolioUrl, portfolioContributors, portfolioDescription],
  projectStack: "TypeScript, React, Tailwindcss",
  description: "My personal portfolio",
};

let projectArray: IProject[] = [];
projectArray.push(frontEndProject);
projectArray.push(backEndProject);
projectArray.push(portfolio);

const Dashboard = () => {
  return (
    <div className="DashboardDiv flex flex-col overflow-scroll scrollbar-hide pt-4 pb-12 items-center w-full">
      <div className="DashboardContainer max-w-screen-2xl md:w-full lg:w-full flex">
        <div className="gridContainer grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-10">
          {projectArray.map((item, index) => {
            return ProjectCard(item);
          })}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
