import React from 'react';
import s from './Button.module.css'


type PropsType = {
    name: string
    callback: () => void
    disabled: boolean
}

const Button = (props: PropsType) => {

    return (
        <span className={s.span}>
            <button disabled={props.disabled} className={s.button} onClick={props.callback}>{props.name}</button>
        </span>
    );
};

export default Button;