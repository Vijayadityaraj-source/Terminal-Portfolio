import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Projects() {
    const [projects,setProjects] = useState([]);

    useEffect(() => {
        //calls function when component mounts.
        getProjects();
    }, []);

    const getProjects = async (e) => {
        try {
            const res = await axios.get('http://localhost:8000/');
            setProjects(res.data);
        } catch (error) {
            console.error('Error Deleting Project.', error);
        }
    }

    const handleLinkClick = (url) => {
        window.open(url, '_blank');
    };

    return(
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'stretch' }}>
        {projects.map(project => (
          <div key={project.id} style={{ width: '60%', margin: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '5px', display: 'flex', flexDirection: 'column' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px',whiteSpace: 'pre-wrap' }}>
              <h3 style={{ margin: '0', display: 'inline' }}>{project.name} |</h3>
              <h3 style={{ margin: '0', display: 'inline' }}>{project.tech}</h3>
              {project.link !== "NA" && <p onClick={() => handleLinkClick(project.link)} style={{ cursor: 'pointer', display: 'inline',whiteSpace: 'pre-wrap' }}>[LINK]</p>}
            </div>
            <p style={{ whiteSpace: 'pre-wrap' }}>{project.description}</p>
            {project.additional_info !== "" && <p style={{ whiteSpace: 'pre-wrap' }}>{project.additional_info}</p>}
          </div>
        ))}
      </div>
    );
}

export default Projects;