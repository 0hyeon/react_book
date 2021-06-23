import React from "react"; //이코드는 리액트를 불러와서 사용할수있게해주는 코드

const MyComponent = props => {//문법이 약간 다르다 ES6에 도입된 화살표 함수 문법
    return <div>안녕하세요, 제 이름은 {props.name}입니다.</div>;
}

MyComponent.defaultProps = {
    name:'기본 이름'
}
export default MyComponent;
