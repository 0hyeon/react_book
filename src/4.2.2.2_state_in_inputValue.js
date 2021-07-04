import React, { Component } from 'react'

export class App extends Component {
    state = {//state에 input값 담기 
        message:''
    }
    render() {
        return (
            <>
                <h1>이벤트연습</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    value={this.state.message}//이게추가됨 
                    onChange={
                        (e) => {
                            this.setState({
                                message: e.target.value
                            })
                        }
                    }
                />
            </>
        )
    }
}
export default App;
