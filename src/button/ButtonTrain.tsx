
type Props = {

};
export const ButtonTrain = (props: Props) => {
    // const myFirstSubscriber = ( event: MessageEvent<HTMLButtonElement>) =>{
    //     console.log("Hello Im VASYA!");
    // }
    // const mySecondSubscriber = () =>{
    //     console.log("Hello Im IVAN!");
    // }

    const onClickHandler =(name:string) => {
        console.log(name)
    }

    return (
        <div>
            <button>MyYouTubeChannel-1</button>
            <button>MyYouTubeChannel-2</button>

        </div>
    );
};