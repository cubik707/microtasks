// @flow 
import * as React from 'react';
import {useState} from "react";

import {InputComp} from "./InputComp";
import {ButtonComp} from "./ButtonComp";


export const Input = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )
    let [title, setTitle] = useState('');
    const addMessage = (title: string) => {
        let newMessage = {message: title};
        setMessage([newMessage, ...message ])

    }

    const callBackButtonHandler = () =>{
        addMessage(title);
        setTitle('')
    }
    return (
        <div>
            {/*<div>*/}
            {/*    <input />*/}
            {/*    <button>+</button>*/}
            {/*</div>*/}
            {/*<FullInput addMessage={addMessage}/>*/}
            <InputComp title={title} setTitle = {setTitle}/>
            <ButtonComp name={'+'} callBack={callBackButtonHandler}/>
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    );
};