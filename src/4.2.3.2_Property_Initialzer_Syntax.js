import React, { Component } from 'react'

//Property Initializer Syntax를 사용한 메서드 작성 

//새 메서드를 만들 때마다 constructor도 수정해야 하기 때문.
//이결 해결하기 위해 바벨의 transform-class-properties문법을 사용
export class App extends Component {
    state = {
        message: ''
    }
    handleChange = (e) => {
        this.setState({
            message: e.target.value
        });
    }
    handleClick = () => {
        alert(this.state.message);
        this.setState({
            message:''
        })
    }
    render() {
        return (
            <div>
                <h1>이벤트연습</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}//message에 값을담는다.
                    onChange={this.handleChange}
                />
                <button onClick={this.handleClick}>확인</button>
            </div>
        )
    }
}

export default App
