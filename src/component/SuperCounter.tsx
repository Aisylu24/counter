import React, {useEffect, useState} from 'react';
import Button from "./Button";
import SetterWindow from "./SetterWindow";
import s from "./SuperCounter.module.css";
import Counter from "./Counter";

// export type SuperCounterPropsType = {
//     setCounter: (startValue: any) => void
//     setStart: (startValue: any) => void
//     setMax: (maxValue: any) => void
//     startValue: number
//     maxValue: number
//     onClick: () => void
//     editMode: boolean
//     error: string | null
//     counter: number
//     Inc: () => void
//     Reset: () => void
// }

const SuperCounter = () => {
    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)
    let [counter, setCounter] = useState<number>(0)
    let [error, setError] = useState<string | null>(null)
    let [editMode, setEdit] = useState<boolean>(false)

    useEffect(() => {
        if (+startValue >= +maxValue) {
            setError('incorrect values')
        } else {
            setError(null)
        }
    }, [startValue, maxValue])

    const setValues = () => {
        setEdit(!editMode)
        setCounter(startValue)

    }

    const setStart = (startValue: number) => {
        !editMode && setEdit(true)
        setStartValue(startValue)

    }

    const setMax = (maxValue: number) => {
        !editMode && setEdit(true)
        setMaxValue(maxValue)
    }

    const Inc = () => {
        if (+maxValue > counter)
            setCounter(++counter)
    }

    const Reset = () => {
        if (+maxValue > +startValue)
            setCounter(startValue)
    }

    return (
        <div className="App-header">
            <div className={s.superCounter}>
                {editMode ?

                    <SetterWindow maxValue={maxValue}
                                  setMax={setMax}
                                  setStart={setStart}
                                  startValue={startValue}
                    />
                    : ''}
                {!editMode ?
                    <Counter counter={counter}
                             maxValue={maxValue}
                             startValue={startValue}
                             editMode={editMode}
                             error={error}
                    /> : ''
                }
                <div className={s.buttons}>
                    <Button name={'set'} callback={setValues}
                            disabled={!!error}
                    />
                    <Button name={'inc'} callback={Inc}
                            disabled={counter === maxValue}/>
                    <Button name={'reset'} callback={Reset}
                            disabled={counter === startValue}/>
                </div>
            </div>
        </div>
    );
}

export default SuperCounter;