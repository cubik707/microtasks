
type ButtonCompType = {
    name: string,
    callBack: () => void
};
export const ButtonComp = (props: ButtonCompType) => {
    const onClickButtonHandler = () => {
        props.callBack()
    }
    return (
        <button onClick={onClickButtonHandler}>{props.name}</button>
    );
};