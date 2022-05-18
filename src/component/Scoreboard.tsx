import React, {useState} from 'react';
import Counter from "./Counter";
import Button from "./Button";
import s from './Scoreboard.module.css'

export type ScoreboardPropsType = {
    value: number
    Inc: () => void
    Reset: () => void
    startValue: number
    maxValue: number
}


export const Scoreboard: React.FC<ScoreboardPropsType> =
    ({value, Inc, Reset, startValue, maxValue}) => {
        return (
            <div className={s.scoreboard}>
                <div className={s.counter}>
                    <Counter value={value}/>
                </div>
                <div className={s.buttons}>
                    <Button name={'inc'} callback={Inc}
                            disabled={value === maxValue}/>
                    <Button name={'reset'} callback={Reset}
                            disabled={value === startValue}/>
                </div>
            </div>
        );
    }
