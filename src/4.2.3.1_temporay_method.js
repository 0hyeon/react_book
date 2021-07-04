import React, { Component } from 'react'

//이벤트실행시 주의사항에서 js코드가 아니라 함수를 전달해야한다고 했음 그래서 함수로 만들어줘야함 
export class App extends Component {
    state = {
        message:''//객체형태
    }
    //함수를 미리준비 
    constructor(props){//생성자함수 
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    handleChange(e){
        this.setState({
            message:e.target.value//타이핑시 실시간으로 value값이 바뀌고 결국 마지막것이 대상임 
        });
        //console.log(e.target.value);
    }
    handleClick(e){
        alert(this.state.message);
        this.setState({
            message:''
        });
    }
    render() {
        return (
            <div>
                <h1>이벤트연습</h1>
                <input
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default App
