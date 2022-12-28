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
  manager: "Sunil",
  author: "Sunil",
  gitUrl: [frontEndUrl, frontendContributors, frontendDescription],
  projectStack: "TypeScript, React, Tailwindcss, Axios",
  description: "UI to interact with the database holding projects",
};

const backEndProject: IProject = {
  projectName: "Project Management - Back-End",
  manager: "Sunil",
  author: "Sunil",
  gitUrl: [backEndUrl, backEndContributors, backEndDescription],
  projectStack: "JavaScript, NodeJS, ExpressJS, Axios",
  description:
    "Back-end consisting of endpoints to provide info to the front-end UI",
};

const portfolio: IProject = {
  projectName: "Portfolio Website",
  manager: "Sunil",
  author: "Sunil",
  gitUrl: [portfolioUrl, portfolioContributors, portfolioDescription],
  projectStack: "TypeScript, React, Tailwindcss",
  description:
    "Shows various projects for public viewing as well as some info about me",
};

let projectArray: IProject[] = [];
projectArray.push(frontEndProject);
projectArray.push(backEndProject);
projectArray.push(portfolio);

const Dashboard = () => {
  return (
    <div className="DashboardDiv flex justify-center w-full">
      <div className="DashboardContainer max-w-screen-2xl flex">
        <div className=" grid grid-cols-3 w-full gap-5">
          {projectArray.map((item, index) => {
            return ProjectCard(item);
          })}
        </div>
      </div>
    </div>
  );
};
export default Dashboard;
