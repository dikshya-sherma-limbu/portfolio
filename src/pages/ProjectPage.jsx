import React from "react";
import { Navbar } from "../components/common/Navbar";
export const ProjectPage = () => {
  return (
    <div>
      <Navbar />
      <h1 className="text-4xl font-bold text-primary-text">Projects</h1>
      <p className="text-primary-text">
        Here are some of the projects I have worked on:
      </p>
      <ul className="list-disc pl-5 text-primary-text">
        <li>Project 1: A web application for managing tasks.</li>
        <li>Project 2: A mobile app for tracking fitness activities.</li>
        <li>Project 3: An open-source library for data visualization.</li>
      </ul>
    </div>
  );
};
