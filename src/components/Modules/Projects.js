import React from 'react';
import Button from '../Reusable-components/Button';
import Project from '../Reusable-components/Project';

function Projects({ projects, currentPage, handlePrevPage, handleNextPage }) {
    const projectsPerPage = 3;
    const startSlice = Math.max(currentPage, 0);
    const endSlice = Math.min(startSlice + projectsPerPage, projects.length);

    return (
        <div className='project-section' id='projects'>
            <div className='main-title project-title'>Projects</div>
            <div className='project-list'>
                {projects.slice(startSlice, endSlice).map((project, index) => (
                    <div key={index} className='project-box'>
                     <Project img={project.picURL} name={project.Name} 
                            description={project.Description}
                            usedtech={project.Used_tech}
                            url={project.URL}/>
                            </div>
                ))}
                <div className="project-navigation-buttons">
                    <Button text={" < "} className="project-nav-button" onClick={handlePrevPage}/>
                    <Button text={">"} className="project-nav-button" onClick={handleNextPage}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
