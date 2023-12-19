import React, { useState} from 'react';

function Auth(props){
  const [password, setPassword] = useState('');
  const [isAuth,setIsAuth] = useState(false);
  const updatefxn = props.updateData;
  const alreadyauth = props.isauth;

  const sendPasswordToServer = async () => {
    try {
      // Send the plain-text password to the server
      const response = await fetch('https://server-terminal-portfolio.netlify.app/verifyPassword', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plainPassword: password }),
      });

      const result = await response.json();
      setIsAuth(result.success);
      if(result.success) updatefxn();
    } catch (error) {
      console.error('Error sending password to server:', error);
    }
  };

  return (<>
    {alreadyauth && <p style={{color: 'green'}}>Already Signed In :|</p>}
    {!alreadyauth && <div>
    {!isAuth && 
    <div>
      <label style={{color: '#8c7366'}}>
        Enter Password:
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            cursor: 'text',
            border: 'none',
            backgroundColor: 'transparent',
            outline: 'none',
            fontFamily: 'monospace',
            fontSize: 'inherit',
          }}
        />
      </label>
      <button 
      onClick={sendPasswordToServer}
      style={{
            backgroundColor: 'transparent',
            color: '#8c7366',
            outline: 'none',
            fontFamily: 'monospace',
            fontSize: 'inherit',
            cursor: 'pointer'
        }}
      >Send Password to Server</button>
    </div>}
    {isAuth && <p style={{color: 'green'}}>Signed in, Hey there Vijay How are you?</p>}
    </div>}

    </>);
};

export default Auth;
