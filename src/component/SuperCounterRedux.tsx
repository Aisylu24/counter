import React, {useEffect, useState} from 'react';
import Button from "./Common-button/Button";
import SetterWindow from "./Common-setter/SetterWindow";
import s from "./SuperCounter/SuperCounter.module.css";
import Counter from "./Common-counter/Counter";
import {incAC, resetAC, setErrorAC, setMaxAC, setStartAC, setValuesAC, ValuesType} from "../state/values-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../state/store";

const SuperCounter = () => {

    const startValue = useSelector<AppRootStateType, number>(state => state.values.startValue)
    const maxValue = useSelector<AppRootStateType, number>(state => state.values.maxValue)
    const counter = useSelector<AppRootStateType, number>(state => state.values.counter)
    const error = useSelector<AppRootStateType, string | null>(state => state.values.error)
    const editMode = useSelector<AppRootStateType, boolean>(state => state.values.editMode)

    const dispatch = useDispatch()

    useEffect(() => {
        console.log('eff')
        let maxString = localStorage.getItem('max')
        let startString = localStorage.getItem('start')
        if (maxString && startString) {
            let newMax = JSON.parse(maxString)
            let newStart = JSON.parse(startString)
            dispatch(setMaxAC(newMax))
            dispatch(setStartAC(newStart))
        }

    }, [])

    useEffect(() => {
        if (startValue >= maxValue) {
            dispatch(setErrorAC('incorrect values'))
        } else {
            dispatch(setErrorAC(null))
        }
    }, [startValue, maxValue])

    const setValues = () => {
        localStorage.setItem('max', JSON.stringify(maxValue))
        localStorage.setItem('start', JSON.stringify(startValue))
        dispatch(setValuesAC(editMode, startValue, maxValue))
    }

    const setStart = (startValue: number) => {
        // !editMode && setEdit(true)
        // setStartValue(startValue)
        dispatch(setStartAC(startValue))

    }

    const setMax = (maxValue: number) => {
        // !editMode && setEdit(true)
        // setMaxValue(+maxValue)
        dispatch(setMaxAC(maxValue))
    }

    const Inc = () => {
        if (maxValue > counter) {
            dispatch(incAC())
        }
    }

    const Reset = () => {
        dispatch(resetAC())
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
                            disabled={!!error || startValue < 0 || maxValue < 0}
                    />
                    <Button name={'inc'} callback={Inc}
                            disabled={counter === maxValue || startValue < 0 || maxValue < 0}/>
                    <Button name={'reset'} callback={Reset}
                            disabled={counter === startValue || startValue < 0 || maxValue < 0}/>
                </div>
            </div>
        </div>
    );
}

export default SuperCounter;