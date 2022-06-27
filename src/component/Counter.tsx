import React from 'react';
import s from './Counter.module.css'


type PropsType = {
    counter: number
    maxValue: number
    startValue: number
    editMode: boolean
    error: string | null
}


const Counter = (props: PropsType) => {
    console.log(props.maxValue, props.counter)
    let finalClass = `${s.counter}  ${(props.counter === props.maxValue ? s.redMax : '') || ((props.error || props.editMode)? s.text : '')}`

    let finalValue = props.error? props.error : props.editMode ? 'set values' : props.counter
    return (
        <div className={finalClass}>{finalValue}</div>
    );
};

export default Counter;