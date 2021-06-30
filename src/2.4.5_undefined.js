import React from 'react';

function App() {
    const name = undefined;
    // return name; //이건오류
    // return name || '값이undefined입니다.'; //이건정상
    return <div>{name || 'react'}</div>;
    //jsx내부에서도 정상 
}

export default App