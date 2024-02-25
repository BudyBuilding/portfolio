import React from 'react';
import "../../css/components/Project.css"
import Button from "./Button";

function Project({ img, name, description, usedtech, url }) {
    return (
        <div className="project">
            <div className="project-image-box">
                <img className="project-image" src={img} alt={name} />
            </div>
            <div className='project-bottom-side'>

            <div className="project-title-box">
                <div className="project-title">{name}</div>
            </div>
            <div className="project-desc-box">
                <div className="project-desc">{description}</div>
            </div>
            {usedtech && usedtech.length > 0 && (
                <div className="tech-list">
                    {usedtech.map((tech, index) => (
                        <div className="tech" key={index}>{tech}</div>
                        ))}
                </div>
            )}
            <div className="link-button-box">
                <a href={url} className="bttn" target="_blank">
                    <Button text="Open" />
                </a>
            </div>
            </div>
        </div>
    );
}

export default Project;
