import React from 'react';
// import MyComponent from './MyComponent_3'; 
// import MyComponent from './3.3.6_propTypes'; // propTypes String
// import MyComponent from './3.3.6.1_isRequired.js';//필수 isRequired
import MyComponent from './3.3.7_classprops.js';//클래스형 컴포넌트에서 props 사용하기
const App = () => {
    return (
        <MyComponent name="React" favoriteNumber={1}>리액트</MyComponent>
    );
};

export default App;