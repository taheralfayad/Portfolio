import React from 'react';
import Project from './Project'
import rexsiteVid from '../static/rexsite.webm'
import slackOverflowVid from '../static/slackOverflow.webm'
import rexsitePic from '../static/rexsite.png'

export default function Projects() {
  let rexsiteDesc = "This was my first ever website and forray into software development. I volunteered to create a tennis " + 
                    "reservation website for my previous job at the City of Maitland. The modus operandi at the office was " +
                    "to have customers call in to make their reservations with the attendant. I identified that to be a painpoint " +
                    'with all of the customers and thought to myself, "well, how hard can it be to change this?"'
  let slackOverflowDesc = ""
  const projects = [
    { id: 1, title: 'Rexsite', description: rexsiteDesc, year: '2023', video: rexsiteVid, image: rexsitePic, link: "https://github.com/taheralfayad/tennis-rez" },
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

