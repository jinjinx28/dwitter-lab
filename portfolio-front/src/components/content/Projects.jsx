import React, { useState } from 'react';
import AvatarImage from '../commons/AvatarImage.jsx';
import Modal from './Modal.jsx';
import { getFetchData } from '../../util/fetch.js';

export default function Projects({ projects }) {
    const [selectedProject, setSelectedProject] = useState(null);
    const handleClose = () => {
        setSelectedProject(null);
    }

    const handleProjectDetail = async (pid) => {
        const jsonData = await getFetchData(`/work/project/${pid}`);

    }

    return (
        <>
            <ul className="projects">
                {projects?.map((project, idx) => 
                    <li className="project" 
                        key={idx}
                        onClick={()=> handleProjectDetail(project.pid)}>
                        <AvatarImage    img={project.img}
                                        alt={project.alt}
                                        style="project-img" />
                        <div className="project-meta">
                            <h3 className="project-meta-title">{project.title}</h3>
                            <p>{project.description}</p>
                        </div>
                    </li> 
                )}
            </ul>

            { selectedProject && 
                <Modal 
                    project={selectedProject}
                    onClose={()=> setSelectedProject(null)}
                />  
            }
        </>
    );
}
