import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import styles from './Model.module.css'
import {pumaArr} from "./Puma";
import {SneackersItem} from "../../App";

type SneakersModel = {
    [key: string]: (SneackersItem[])
}

const sneakersModel : SneakersModel = {
    adidas: adidasArr,
    puma: pumaArr
}


export const Model = () => {
    const {model, id} = useParams()
    console.log(model)
    console.log(id)
    const currentModel = model
        ? sneakersModel[model].find(el => el.id === Number(id))
        : null


    return (
        <>
            {
                currentModel ? <div className={styles.wrapper}>
                        <h3>{currentModel.model}</h3>
                        <span>{currentModel.collection}</span>
                        <span>{currentModel.price}</span>
                        <img className={styles.img} src={currentModel.picture} alt={'picture'}/>
                    </div>
                    : <div className={styles.wrapperError}>Модель отсутствует</div>
            }
        </>
    )
}