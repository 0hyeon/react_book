import React, { useState } from 'react';
// useState 사용하기
const App = () => {
    const [message, setMessage] = useState();
    const onClickEnter = () => setMessage('welcome');
    const onClickLeave = () => setMessage('bye');
    return (
        <div>
            <button onClick={onClickEnter}>ENTER</button>
            <button onClick={onClickLeave}>LEAVE</button>
            <h1>{message}</h1>
        </div>
    );
};

export default App;