import React, { useState} from 'react';
import './Terminal.css';
import SocialLinks from './SocialLinks';
import AddProjects from './AddProjects';
import DeleteProject from './DeleteProject';
import Projects from './Projects';
import Auth from './Auth';

function Terminal() {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState([]);
  const [signedIn,setSignedIn] = useState(false);

  const updateSignedIn = () => {
    setSignedIn(true);
  };

  const helptext = {
    'who': 'Who is Vijayaditya?',
    'skills': 'Skills of Vijay',
    'social': 'Display social networks',
    'auth': 'Are u vijay?',
    'projects': 'View coding projects',
    'addProject': 'Add new projects',
    'deleteProject': 'Delete a existing project',
    'help': 'You obviously already know what this does',
    'contact': 'Display contact information',
    'clear': 'Clear terminal',
  };

  const skilltext = {
    "Programming":"C,C++,Python,Java",
    "Front-End":"HTML,CSS,Js,React.js",
    "Back-End":"Node Js,Express Js,Mongoose,MongoDB,Flask",
    "Data Analysis":"Numpy,Pandas,Matplotlib,Tensorflow",
    "Software Testing":"Unittest(pyunit)"
  }
  const whotext = 'I am Vijayaditya currently in my final year of B.Tech at NIT Warangal in Computer Science Engineering Branch.\nHave a good day <3';
  const abouttext = 'This is a simple terminal-like interface which provides information about me.\nUsed React for front end and Express for back end.\nYou can checkout the code on my github page, type social to get my github link.\n';
  const contacttext = 'You can contact me at \'vijayaditya.eng@gmail.com\'\nBut it might take some time for me to reply\n';
  const defaulttext = 'Command not found. Type "help" for a list of commands.\n';

  const processCommand = (command) => {
    const commandLine = <p style={{color: '#7a9288'}}>visitor@vijay_portfolio.com:~$ {command}<br/><br/></p>;
  
    switch (command.trim()) {
      case 'auth':
        return [commandLine, <Auth isauth={signedIn} updateData={updateSignedIn}/>];
      case 'who':
        return [commandLine, <p key="who">{whotext}<br/></p>];
      case 'skills':
        return [commandLine,
        <table style={{ borderSpacing: '10px' }}>
          <tbody>
            {Object.entries(skilltext).map(([category, skills]) => (
              <tr key={category}>
                <td style={{color: '#89aaa6',textShadow: '0 0 5px rgba(255, 255, 255, 0.8)'}}>{category}</td>
                <td style={{color: '#8c7366'}}>{skills}</td>
              </tr>
            ))}
          </tbody>
        </table>]
      case 'help':
        return [commandLine, 
        <table style={{ borderSpacing: '10px' }}>
          <tbody>
            {Object.entries(helptext).map(([key, value]) => (
              <tr key={key}>
                <td style={{color: '#89aaa6',textShadow: '0 0 5px rgba(255, 255, 255, 0.8)'}}>{key}</td>
                <td style={{color: '#8c7366'}}>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>];
      case 'about':
        return [commandLine, <p key="about">{abouttext}<br/></p>];
      case 'contact':
        return [commandLine, <p key="contact">{contacttext}<br/></p>];
      case 'social':
        return [commandLine, <SocialLinks key="social"/>];
      case 'projects':
        return [commandLine, <Projects key="projects"/>];
      case 'addProject':
        return [commandLine, 
          <>
          {(signedIn) && <AddProjects key="addProject"/>}
          {!signedIn && <p key="addproject">Sign in to access these commands :D</p>}
        </>];
      case 'deleteProject':
        return [commandLine, 
          <>
          {(signedIn) && <DeleteProject key="deleteProject"/>}
          {!signedIn && <p key="deleteproject">Sign in to access these commands :D</p>}
        </>];
      case 'clear':
        return [];
      default:
        return [commandLine, <p key="default">{defaulttext}<br/></p>];
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      const result = processCommand(input);
      if(input!== 'clear') setOutput((prevOutput) => [...prevOutput, result]);
      else setOutput([]);
      setInput('');
    }
  };

  return (
    <div className="terminal-container">
      <pre>
        {output.map((item, index) => (
          <div key={index}>
            {item}
          </div>
        ))}
      </pre>
      <label htmlFor="commandInput">visitor@vijay_portfolio.com:~$ </label>
      <input
        className="terminal-input"
        id="commandInput"
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyPress}
        autoFocus

        style={{
          cursor: 'text',
          border: 'none',
          backgroundColor: 'transparent',
          color: "#7a9288",
          outline: 'none',
          caretColor: 'white',
          fontFamily: 'monospace',
          fontSize: 'inherit',
        }}
      />
    </div>
  );
}

export default Terminal;
