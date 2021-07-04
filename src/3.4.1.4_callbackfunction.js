import React, { Component } from 'react'

export class Counter extends Component {
    // constructor(props) {
    //     super(props);
    //     //state의 초깃값 설정하기 
    //     this.state= {
    //         number: 0,
    //         fixedNumber:0
    //     };
    // }
    state = {
        number : 0,
        fixedNumber : 0
    }
    // {/* constructor 메서드를 선언하지 않고도 state초깃값을 설정할 수 있다. */}
    render() {
        const { number, fixedNumber } = this.state;//조회시 사용 
        return (
            <div>
                <h1>{ number }</h1>
                <h2>바뀌지 않는 값 : {fixedNumber}+</h2>
                <button
                    //onclick을 클릭 되었을 때 호출할 함수를 지정합니다. 
                    onClick={()=>{
                        //this.setState를 사용하여 state에 새로운 값을 넣을 수 있다. 
                        this.setState(
                            {
                                number : number  + 1 
                            },
                            () => {
                                console.log('방금 setState가 호출 되었습니다. ');
                                console.log(this.state);
                            }
                        );
                    }}
                >+1</button>
                {/* setState의 두번째 함수를 실행할때 콜백함수를 통해서 작업할수 있다.  */}
            </div>
        )
    }
}

export default Counter
