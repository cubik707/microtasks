import {ChangeEvent} from "react";

type InputCompType = {
    title: string
    setTitle: (title: string) => void
};
export const InputComp = (props: InputCompType) => {
    const onChangeInputHandler = (event:ChangeEvent<HTMLInputElement>) => {
        props.setTitle(event.currentTarget.value);

    }
    return (
        <input value={props.title} onChange={onChangeInputHandler}/>
    );
};