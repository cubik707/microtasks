import React from 'react';
import styles from "./components/Site.module.css";
import {Link, NavLink, Outlet, useNavigate} from 'react-router-dom';
import {PATH} from "./routes/router";



export type SneackersItem = {
    id: number
    model: string;
    collection: string;
    price: string;
    picture: string;
}



function App() {
    const navigate = useNavigate()
    const navigateHandler = ()=>{
        navigate(-1)
    }

    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <div><NavLink
                        to={PATH.ADIDAS}
                        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}>
                        Adidas
                    </NavLink></div>
                    <div><NavLink
                        to={PATH.PUMA}
                        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                    >Puma</NavLink></div>
                    <div><NavLink
                        to={PATH.ABIBAS}
                        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                    >Abibas</NavLink></div>
                    <div><NavLink
                        to={PATH.PRICES}
                        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                    >Цена для оптовиков</NavLink></div>
                    <div><NavLink
                        to={'/protectedPage'}
                        className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink}
                    >ProtectedPage</NavLink></div>
                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <Link className={styles.LinkLikeButton} to={"/"}>ГЛАВНАЯ СТРАНИЦА (ADIDAS)</Link>
                        <button onClick={navigateHandler} className={styles.ButtonLikeLink} >НАЗАД</button>
                    </div>
                    <Outlet/>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
