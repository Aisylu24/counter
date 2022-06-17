import React from 'react';
import Button from "./Button";
import SetterWindow from "./SetterWindow";
import s from "./Setter.module.css";

export type SetterPropsType = {
    setStart: (startValue: any) => void
    setMax: (maxValue: any) => void
    startValue: number
    maxValue: number
    onClick: () => void
    counter: number
    editMode: boolean
    error: string | null
}

const Setter = (props: SetterPropsType) => {
    return (
        <div  className={s.setter}>
            <SetterWindow maxValue={props.maxValue}
                          setMax={props.setMax}
                          setStart={props.setStart}
                startValue={props.startValue}
            />
            <Button name={'set'} callback={props.onClick}
                    disabled={!props.editMode || !!props.error}
            />
        </div>
    );
};

export default Setter;