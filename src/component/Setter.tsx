import React from 'react';
import s from './Setter.module.css'
import Button from "./Button";

export type SetterPropsType = {
    setCounter: (startValue: any) => void
    setStart: (startValue: any) => void
    setMax: (maxValue: any) => void
    startValue: number
    maxValue: number
    onClick: () => void
    counter: number | null
    editMode: boolean
    error: string | null
}

const Setter = (props: SetterPropsType) => {

    return (
        <div className={s.setter}>
            <div className={s.values}>
                <label>
                    <span className={s.nameValues}
                    >start value</span>
                    <input className={s.input} type={"number"}
                           value={props.startValue}
                           onChange={e => props.setStart(e.currentTarget.value)}
                    />
                </label>
                <label>
                    <span className={s.nameValues}
                    >max value</span>
                    <input className={s.input} type={"number"}
                           value={props.maxValue}
                           onChange={e => props.setMax(e.currentTarget.value)}
                    />
                </label>

            </div>
            <Button name={'set'} callback={props.onClick}
                    disabled={!props.editMode || !!props.error}
            />
        </div>
    );
};

export default Setter;