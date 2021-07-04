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
                        this.setState(prevState => {
                            return{
                                number:prevState.number+1
                            }
                        });
                        //위코드와 아래코드는 완전히 똑같은 기능을 합니다. 
                        //아래코드는 함수에서 바로 객체를 반환한다는 뜻입니다. 
                        this.setState(prevState => ({
                            number : prevState.number +1 
                        } ));
                    }}
                >+1</button>
                {/* prevState => ({}) 두번째로 함수를 사용할때는 화살표함수에서 바로 객체를 반환하도록 했기때문에 숫자가 2씩 올라간다. */}
            </div>
        )
    }
}

export default Counter
