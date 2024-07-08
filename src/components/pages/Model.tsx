import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import styles from './Model.module.css'


export const Model = () => {
    const {id} = useParams()
    console.log(id)
    //todo: необходимо убрать хардкод массива
    const currentModel = adidasArr.find(el => el.id === Number(id))
    console.log(currentModel?.model)
    return (
        <>
            {
                currentModel ? <div className={styles.wrapper}>
                        <h3>{currentModel.model}</h3>
                        <span>{currentModel.collection}</span>
                        <span>{currentModel.price}</span>
                        <img src={currentModel.picture} alt={'picture'}/>
                    </div>
                    : <div className={styles.wrapperError}>Модель отсутствует</div>
            }
        </>
    )
}