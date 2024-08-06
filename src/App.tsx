import React from 'react';
import styles from "./components/Site.module.css";
import {NavLink, Outlet} from 'react-router-dom';



export type SneackersItem = {
    id: number
    model: string;
    collection: string;
    price: string;
    picture: string;
}

export const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices'
}


function App() {
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
                </div>
                <div className={styles.content}>
                    <Outlet />
                    {/*<Routes>*/}
                    {/*    <Route path={PATH.PAGE1} element={<Adidas/>}/>*/}
                    {/*    <Route path={PATH.PAGE2} element={<Puma/>}/>*/}
                    {/*    <Route path={PATH.PAGE3} element={<Abibas/>}/>*/}
                    {/*    <Route path={PATH.PRICES} element={<Prices/>}/>*/}
                    {/*    <Route path={"/:model/:id"} element={<Model/>}/>*/}
                    {/*    <Route path={"/"} element={<Navigate to={PATH.PAGE1}/>}/>*/}
                    {/*    <Route path={"/page/error"} element={<Error404/>}/>*/}
                    {/*    <Route path={"/*"} element={<Navigate to={"/page/error"}/>}/>*/}
                    {/*</Routes>*/}

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}


export default App;
