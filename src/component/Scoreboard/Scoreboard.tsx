import React from 'react';
import Counter from "../Common-counter/Counter";
import Button from "../Common-button/Button";
import s from './Scoreboard.module.css'

export type ScoreboardPropsType = {
    counter: number
    Inc: () => void
    Reset: () => void
    startValue: number
    maxValue: number
    editMode: boolean
    error: string | null
}


export const Scoreboard: React.FC<ScoreboardPropsType> =
    ({counter, Inc, Reset, startValue, maxValue,editMode,error}) => {
        return (
            <div className={s.scoreboard}>
                <div className={s.counter}>
                    <Counter counter={counter}
                             maxValue={maxValue}
                             startValue={startValue}
                             editMode={editMode}
                             error={error}
                    />
                </div>
                <div className={s.buttons}>
                    <Button name={'inc'} callback={Inc}
                            disabled={counter === maxValue}/>
                    <Button name={'reset'} callback={Reset}
                            disabled={counter === startValue}/>
                </div>
            </div>
        );
    }
