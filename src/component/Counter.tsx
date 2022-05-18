import React from 'react';
import s from './Counter.module.css'


type PropsType = {
    value: number
}


const Counter = (props: PropsType) => {

   //   let finalClass = s.tablo + ' ' + (props.value === 5 ? s.redFive : '')
    // let finalClass = `${props.value === 5 ? `s.tablo s.redFive` : `s.tablo`}`
    let finalClass = `${s.counter}  ${props.value === 5 && s.redFive}`

    return (
        <div className={finalClass}>{props.value}</div>
    );
};

export default Counter;