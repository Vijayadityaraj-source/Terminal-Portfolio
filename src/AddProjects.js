import React, { useState } from 'react';
import axios from 'axios';

function AddProjects() {
    const [project, setProject] = useState({
        name: '',
        description: '',
    });
    const [submittedProject, setSubmittedProject] = useState(null);
    const [gotError,setGotError] =  useState('False');

    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProject((prevProject) => ({
            ...prevProject,
            [name]: value,
        }));
    };
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await axios.post('http://localhost:8000/addJson', { project });
            console.log('JSON file updated successfully');
            setSubmittedProject(project);
        } catch (error) {
            console.error('Error updating JSON file', error);
            setGotError('True');
        }

        //Clear the form after submission
        setProject({
            name: '',
            description: '',
        });
    };

    return (
        <div>
        {!submittedProject && gotError==='False' && (
        <form onSubmit={handleSubmit}>
            <label>Project Name *</label><br/>
            <input
                type="text"
                name="name"
                value={project.name}
                onChange={handleChange}
                required
                style={{
                    border: '1px solid',
                    backgroundColor: 'transparent',
                    color: 'white',
                    outline: 'none',
                    caretColor: 'white',
                    fontFamily: 'monospace',
                    fontSize: 'inherit',
                }}
            />
            <br/>
            <br/>

            <label>Tech Stack Used *</label><br/>
            <input
                type="text"
                name="tech"
                value={project.tech}
                onChange={handleChange}
                required
                style={{
                    border: '1px solid',
                    backgroundColor: 'transparent',
                    color: 'white',
                    outline: 'none',
                    caretColor: 'white',
                    fontFamily: 'monospace',
                    fontSize: 'inherit',
                }}
            />
            <br/>
            <br/>

            <label>Additional Information</label><br/>
            <input
                type="text"
                name="additional_info"
                value={project.additional_info}
                onChange={handleChange}
                style={{
                    border: '1px solid',
                    backgroundColor: 'transparent',
                    color: 'white',
                    outline: 'none',
                    caretColor: 'white',
                    fontFamily: 'monospace',
                    fontSize: 'inherit',
                }}
            />
            <br/>
            <br/>

            <label>Project URL (NA if Offline or Confidential) *</label>
            <br/>
            <input
                type="text"
                name="link"
                value={project.link}
                onChange={handleChange}
                required
                style={{
                    border: '1px solid',
                    backgroundColor: 'transparent',
                    color: 'white',
                    outline: 'none',
                    caretColor: 'white',
                    fontFamily: 'monospace',
                    fontSize: 'inherit',
                }}
            />
            <br/>
            <br/>

            <label>
            Project Description *
            <br/>
            <textarea
                name="description"
                value={project.description}
                onChange={handleChange}
                required
                style={{
                    border: '1px solid',
                    backgroundColor: 'transparent',
                    color: 'white',
                    outline: 'none',
                    caretColor: 'white',
                    fontFamily: 'monospace',
                    fontSize: 'inherit',
                }}
            />
            </label>
            <br/>
            <br/>

            <button 
                type="submit" 
                style={{
                    backgroundColor: 'transparent',
                    color: '#8c7366',
                    outline: 'none',
                    fontFamily: 'monospace',
                    fontSize: 'inherit',
                    cursor: 'pointer'
                }}
            >Add Project</button><br/>
        </form>)}

        {submittedProject && gotError==='False' && (<p style={{ color: 'green' }}>Successfully Added Project - {submittedProject.name}.</p>)}
        {gotError === 'True' && (<p style={{ color: 'red' }}>Error: Couldn't Add Project.</p>)}
        </div>
    );
}

export default AddProjects;
