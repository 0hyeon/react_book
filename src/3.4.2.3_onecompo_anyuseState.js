import React, {useState} from 'react';

const App = () => {
    const [message, setMessage] = useState();
    const onClickEnter = () => setMessage('welcome');
    const onClickLeave = () => setMessage('bye');
    
    const [color, setColor] = useState();

    return (
        <div>
            <button onClick={onClickEnter}>ENTER</button>
            <button onClick={onClickLeave}>LEAVE</button>
            <h1 style={{color}}>{message}</h1>
            <button style={{ color : 'red'}} onClick={()=>setColor('red')}>red</button>
            <button style={{ color : 'green'}} onClick={()=>setColor('green')}>green</button>
            <button style={{ color : 'blue'}} onClick={()=>setColor('blue')}>blue</button>
        </div>
    );
};

export default App;