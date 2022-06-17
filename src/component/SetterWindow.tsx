import React from 'react';
import s from "./Setter.module.css";

export type SetterWindowPropsType = {
    setStart: (startValue: any) => void
    setMax: (maxValue: any) => void
    startValue: number
    maxValue: number
}



const SetterWindow = (props: SetterWindowPropsType) => {

    let finalClass = `${s.input} ${(props.startValue >= props.maxValue ? s.redInput : '')}`

    return (
        <div>
            <div className={s.values}>
                <label>
                    <span className={s.nameValues}
                    >start value</span>
                    <input className={finalClass} type={"number"}
                           value={props.startValue}
                           onChange={e => props.setStart(e.currentTarget.value)}
                    />
                </label>
                <label>
                    <span className={s.nameValues}
                    >max value</span>
                    <input className={finalClass} type={"number"}
                           value={props.maxValue}
                           onChange={e => props.setMax(e.currentTarget.value)}
                    />
                </label>
            </div>
        </div>
    );
};

export default SetterWindow;