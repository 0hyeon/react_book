/* eslint-disable no-lone-blocks */
import React , {Fragment}from "react"; //이코드는 리액트를 불러와서 사용할수있게해주는 코드
// import logo from "./logo.svg";
import "./App.css";

function App(){
    const name = '리액트';
    return(
        <div>
            {name === '리액트'?(
                <h1>리액트입니다.</h1>
            ):(
                <h2>리액트가 아닙니다.</h2>
            )}
        </div>
    )
}

export default App;