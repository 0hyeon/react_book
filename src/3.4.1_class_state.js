import React, { Component } from 'react'

export class Counter extends Component {
    constructor(props) {//생성자 함수가 호출시 현재 클래스형 컴포넌트가 상속받고 있는 리액트의 Component클래스가 지닌 생성자 함수를 호출해 줍니다. 
        super(props);//constructor생성자 메서드 사용시 반드시 호출 
        //state의 초깃값 설정하기 
        this.state= {//객체형식이어야 
            number: 0
        };
    }
    render() {
        const { number } = this.state; //state를 조회할 때는 this.state로 조회합니다. 
        return (
            <div>
                <h1>{number}</h1>
                <button
                    //onclick을 클릭 되었을 때 호출할 함수를 지정합니다. 
                    onClick={()=>{
                        //this.setState를 사용하여 state에 새로운 값을 넣을 수 있습니다. 
                        this.setState({number: number + 1});
                    }}
                >+1</button>
            </div>
        )
    }
}

export default Counter;
