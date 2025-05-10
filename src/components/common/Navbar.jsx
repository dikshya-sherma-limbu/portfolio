import React from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  return (
    <div className="m-4 flex flex-col md:flex-row bg-dark-secondary rounded-xl font-bold text-4xl text-primary-text p-12 gap-4 justify-between">
      <div>Dikshya</div>
      <div className="flex justify-around gap-4">
        <Link to="/about">About</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </div>
  );
};
