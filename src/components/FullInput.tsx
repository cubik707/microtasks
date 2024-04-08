import {ChangeEvent, useState} from "react";

type FullInputPropsType = {
    addMessage: (title: string) => void
};

export const FullInput = (props: FullInputPropsType) => {

    // const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
    //     setTitle(title = event.currentTarget.value);
    //
    // }
    // const onClickButtonHandler = () => {
    //     props.addMessage(title)
    //     setTitle(title = '')
    // }
    return (
        <div>
            {/*<input value={title} onChange={onChangeInputHandler}/>*/}
            {/*<button onClick={onClickButtonHandler}>+</button>*/}
        </div>
    );
};