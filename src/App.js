/* eslint-disable no-lone-blocks */
import React , {Fragment}from "react"; //이코드는 리액트를 불러와서 사용할수있게해주는 코드
// import logo from "./logo.svg";
import "./App.css";

function App(){
  return(
    <>
    <Fragment>
      <div>
        {/* 꼭 한개의 div로 감싸 주어야 한다. 혹은 Fragment */}
        <h1>리액트안녕</h1>
        <h2>잘작동하니?</h2>
      </div>
    </Fragment>
    </>
  )
}

export default App;