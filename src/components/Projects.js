import React from 'react';
import Project from './Project'
import rexsiteVid from '../static/rexsite.webm'
import slackOverflowVid from '../static/slackOverflow.webm'
import rexsitePic from '../static/rexsite.png'

export default function Projects() {
  const projects = [
    { id: 1, title: 'Rexsite', description: 'This was my first ever software project. I volunteered to create ', year: '2023', video: rexsiteVid, image: rexsitePic, link: "https://github.com/taheralfayad/tennis-rez" },
    { id: 2, title: 'Slack Overflow', description: 'Description for project 2', year: '2022', video: slackOverflowVid },
    { id: 3, title: 'Scribe.py', description: 'Description for project 3', year: '2021', video: rexsiteVid },
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

