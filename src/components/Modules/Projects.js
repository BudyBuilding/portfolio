import { useState, useEffect } from 'react';
import React from 'react';
import Button from '../Reusable-components/Button';
import Project from '../Reusable-components/Project';


function Projects({ projects }) {
    const [currentPage, setCurrentPage] = useState(0);
    const projectsPerPage = useProjectsPerPage();
  
    function useProjectsPerPage() {
        const [projectsPerPage, setProjectsPerPage] = useState(calculateProjectsPerPage());
      
        useEffect(() => {
          function handleResize() {
            setProjectsPerPage(calculateProjectsPerPage());
          }
      
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);
      
        return projectsPerPage;
    }
    
  
    const startIndex = currentPage * projectsPerPage;
    const displayedProjects = projects.slice(startIndex, startIndex + projectsPerPage);

      
    function calculateProjectsPerPage() {
        return window.innerWidth < 1070 ? 1 : window.innerWidth < 1400 ? 2 : 3;
    }
  
    const totalPages = Math.ceil(projects.length / projectsPerPage);
  
    const handlePrevPage = () => {
        setCurrentPage(prevPage => Math.max(prevPage - 1, 0));
    };
  
    const handleNextPage = () => {
        setCurrentPage(prevPage => Math.min(prevPage + 1, totalPages - 1));
    };


  //  const startSlice = Math.max(currentPage, 0);
//    const endSlice = Math.min(startSlice + projectsPerPage, projects.length);

    return (
        <div className='project-section' id='projects'>
            <div className='main-title project-title'>Projects</div>
            <div className='project-list'>
                {displayedProjects.map((project, index) => (
                    <div key={index} className='project-box'>
                     <Project img={project.picURL} name={project.Name} 
                            description={project.Description}
                            usedtech={project.Used_tech}
                            url={project.URL}/>
                            </div>
                ))}
                <div className="project-navigation-buttons">
                    <Button text={"<"} className="project-nav-button" onClick={handlePrevPage}/>
                    <Button text={">"} className="project-nav-button" onClick={handleNextPage}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
