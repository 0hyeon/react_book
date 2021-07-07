/* eslint-disable no-lone-blocks */
import React , {Component}from "react"; //이코드는 리액트를 불러와서 사용할수있게해주는 코드
// import logo from "./logo.svg";
import "./App.css";
import IterationSample from './6.2.1_IterationSample'; //import 함수 from 파일이름

export class App extends Component {
  render() {
    return (
      <IterationSample />
    )
  }
}

export default App
