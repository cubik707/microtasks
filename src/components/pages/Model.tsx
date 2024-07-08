import {adidasArr} from "./Adidas";
import {useParams} from "react-router-dom";
import styles from './Model.module.css'


export const Model = () => {
    const {id} = useParams()
    console.log(id)
    const adidas = adidasArr.find(el => el.id === Number(id))
    console.log(adidas?.model)
    return (
        <>
            {
                adidas ? <div className={styles.wrapper}>
                        <h3>{adidas?.model}</h3>
                        <span>{adidas?.collection}</span>
                        <span>{adidas?.price}</span>
                        <img src={adidas?.picture} alt={'picture'}/>
                    </div>
                    : <div className={styles.wrapperError}>Модель отсутствует</div>
            }
        </>
    )
}