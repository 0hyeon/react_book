import React, { Component } from 'react'
//키를 눌렀을때 발생하는 KeyPress 이벤트를 처리하는 방법을 알아보겠습니다.
//comment 인풋에서 엔터를 눌렀을 때 handleClick 메서드를 호출함 
export class App extends Component {
    state= {
        username:'',
        message:''
    }
    handleChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.username + ' : ' +this.state.message );
        this.setState({
            username:'',
            message:''
        });
    }
    handleKeyPress = (e) => {
        if(e.key === 'Enter'){
            this.handleClick();
        }
    }
    render() {
        return (
            <div>
                <h1>이벤트연습</h1>
                <input 
                    type="text"
                    name="username"
                    placeholder="사용자명"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input 
                    type="text"
                    name="message"
                    placeholder="메시지를입력하세요"
                    value={this.state.message}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default App
