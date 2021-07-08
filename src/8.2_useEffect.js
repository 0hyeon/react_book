import React, { useState, useEffect} from 'react';
//useEffect는 랜더링 될때마다 특정작업을 수해하도록 할 수있는 Hook 
const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');

    useEffect(() => {
        console.log('effect');
        console.log(name);
        return () => {
            console.log('cleanup');
            console.log(name);
        }
        // console.log({
        //     name,
        //     nickname
        // });
    });
    
    const onChangeName = e => {
        setName(e.target.value);
    };
    const ohChageNickname = e => {
        setNickname(e.target.value);
    }
    return (
        <div>
            <div>
                <input value={name} onChange={onChangeName} />
                <input value={nickname} onChange={ohChageNickname} />
            </div>    
            <div>
                <div>
                    <b>이름:</b> {name}
                </div>
                <div>
                    <b>닉네임:</b> {nickname}
                </div>
            </div>
        </div>
    );
};

export default Info;