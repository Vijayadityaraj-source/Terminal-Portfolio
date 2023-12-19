import React, { useState, useEffect } from 'react';
import axios from 'axios';

function DeleteProject() {
    const [name, setName] = useState('');
    const [isDeleted,setIsDeleted] = useState('');
    const [projects,setProjects] = useState([]);

    useEffect(() => {
        //calls function when component mounts.
        getProjects();
    }, []);
    
    const handleKeyPress = async (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();

            try {
                await axios.post('http://localhost:8000/deleteJson', { name });
                console.log('Project Deleted successfully');
                setIsDeleted('True');
            } catch (error) {
                console.error('Error Deleting Project.', error);
                setIsDeleted('False');
            }

            //Clear the name after submission
            // setName('');
        }
    };

    const getProjects = async (e) => {
        try {
            const res = await axios.get('http://localhost:8000/');
            setProjects(res.data);
        } catch (error) {
            console.error('Error Deleting Project.', error);
        }
    }

    return (
        <>
            <p>Choose from projects : </p>
            <ol>
                {projects.map((project) => (
                <li key={project.id}>
                    <strong>{project.name}</strong>
                </li>
                ))}
            </ol>
            {isDeleted === '' && <>
            <label htmlFor="projectToDelete" >Enter the name of project : </label>
            <input
                className="DeleteProject-Input"
                id="projectToDelete"
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                onKeyDown={handleKeyPress}
                autoFocus
                style={{
                border: 'none',
                backgroundColor: 'transparent',
                color: '#7a9288',
                outline: 'none',
                caretColor: 'white',
                fontFamily: 'monospace',
                fontSize: 'inherit',
                }}
            />
            </>}
            {isDeleted === 'True' && <p style={{ color: 'green' }}>Successfully deleted project - {name}!</p>}
            {isDeleted === 'False' && <p style={{ color: 'red' }}>Project not found!</p>}
        </>
    );
}

export default DeleteProject;
