import React from "react";

export type FilterType = 'all' | 'dollar' | 'ruble'

type Money = {
    banknote: string,
    nominal: number,
    number: string
}


type NewComponentType = {
    currentMoney: Money[],
    onClickFilterHandler: (filterType: FilterType) => void
};
export const NewComponent = ({currentMoney, onClickFilterHandler}: NewComponentType) => {
    return (
        <>
            <ul>
                {currentMoney.map((objFromMoneyArr, index) => {
                    return (
                        <li key={index}>
                            <span>{objFromMoneyArr.banknote} </span>
                            <span>{objFromMoneyArr.nominal} </span>
                            <span>{objFromMoneyArr.number}</span>
                        </li>
                    )
                })}
            </ul>
            <div style={{marginLeft: '35px'}}>
                <button onClick={() => onClickFilterHandler("all")}>all</button>
                <button onClick={() => onClickFilterHandler("ruble")}>rubles</button>
                <button onClick={() => onClickFilterHandler("dollar")}>dollars</button>
            </div>
        </>
    );
};