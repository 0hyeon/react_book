import React, { Component } from 'react'

export class App extends Component {
    render() {
        return (
            <>
                <h1>이벤트연습</h1>
                <input 
                    type="text"
                    name="message"
                    placeholder="아무거나 입력해 보세요"
                    onChange={
                        (e) => {
                            console.log(e.target.value);
                        }
                    }
                />
            </>
        )
    }
}

export default App;
