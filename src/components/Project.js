import React, { useState } from 'react';

const Project = ({ project }) => {
  const [hover, setHover] = useState(false);

  const handleClickVideo = (e) => {
    e.preventDefault();
    window.open(project.video, '_blank');
  };

  const handleClickCode = (e) => {
    e.preventDefault();
    window.open(project.link, '_blank');
  };

  return (
    <div className="flex items-center mb-16">
      <div className="flex-shrink-0">
        <div className="inline-block relative">
          <div className="h-16 w-16 bg-slate-400 rounded-full"></div>
          <div className="absolute top-0 right-0 h-6 w-6 bg-red-300 rounded-full border-2 border-white"></div>
        </div>
      </div>
      <div className="ml-4 max-w-full w-full md:max-w-xl lg:max-w-2xl xl:max-w-3xl">
        <div className="bg-white p-6 rounded-lg shadow-lg relative h-full">
          <a 
            href={project.link} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ position: 'relative', display: 'block' }}
          >
            <video 
              src={project.video}
              alt={project.title}
              className="rounded-lg mb-4 w-full h-full object-cover hidden md:block"
              autoPlay
              loop
              muted
            >
                Your browser does not support the video tag.
            </video>
            <div 
              style={{ display: hover ? 'flex' : 'none' }} 
              className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg"
            >
              <div 
                className="w-1/2 h-full flex items-center justify-center cursor-pointer" 
                onClick={handleClickVideo}
              >
                <p className="text-white text-lg">Click here to see the video</p>
              </div>
              <div 
                className="w-1/2 h-full flex items-center justify-center cursor-pointer" 
                onClick={handleClickCode}
              >
                <p className="text-white text-lg">Click here to see the code</p>
              </div>
            </div>
          </a>
          <h2 className="text-2xl font-semibold mb-2 overflow-auto">{project.title}</h2>
          <p className="text-sm overflow-auto">{project.description}</p>
          <div className="flex flex-col md:hidden"> {/* This section will only appear on mobile */}
            <button onClick={handleClickVideo} className="bg-blue-500 text-white rounded-lg mb-2 p-2">
              Click here to see the video
            </button>
            <button onClick={handleClickCode} className="bg-green-500 text-white rounded-lg p-2">
              Click here to see the code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
