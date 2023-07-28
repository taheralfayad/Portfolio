import React from 'react';
import Project from './Project'
import rexsite from '../static/rexsite.png'

export default function Projects() {
  const projects = [
    { id: 1, title: 'Rexsite', description: 'This was my first ever software project. I volunteered to create ', year: '2023', image: rexsite },
    { id: 2, title: 'SlackOverflow', description: 'Description for project 2', year: '2022', image: rexsite },
    { id: 3, title: 'Scribe.py', description: 'Description for project 3', year: '2021', image: rexsite },
  ];

  return(
    <div className="p-8 font-poppins">
      <h1 className="text-4xl font-bold mb-4 text-center">Projects</h1>
      <div className="relative m-8">
        <div className="border-r-2 border-slate-400  absolute h-full top-0" style={{ left: '15px' }}></div>
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

