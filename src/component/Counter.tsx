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
    // let counterValue
    // if (props.maxValue <= props.startValue)
    //     counterValue = 'incorrect values'
    // if (props.counter == null)
    //     counterValue = 'set values'
    // if (props.maxValue > props.startValue)
    //     counterValue = props.counter

    console.log('counter')
    let finalClass = `${s.counter}  ${(props.counter === props.maxValue ? s.redMax : '') || ((props.error || props.editMode)? s.text : '')}`

    let finalValue = props.error? props.error : props.editMode ? 'set values' : props.counter
    return (
        <div className={finalClass}>{finalValue}</div>
    );
};

export default Counter;