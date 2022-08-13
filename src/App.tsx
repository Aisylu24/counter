import React, {useEffect, useState} from 'react';
import './App.css';
import {Scoreboard} from "./component/Scoreboard/Scoreboard";
import Setter from "./component/Common-setter/Setter";
import SuperCounter from "./component/SuperCounter/SuperCounter";

function App() {

    let [startValue, setStartValue] = useState<number>(0)
    let [maxValue, setMaxValue] = useState<number>(5)

    let [counter, setCounter] = useState<number>(0)

    let [error, setError] = useState<string | null>(null)
    let [editMode, setEdit] = useState<boolean>(false)

    useEffect(() => {
        if (startValue >= maxValue || startValue < 0 || maxValue < 0 ) {
            setError('incorrect values')
        } else {
            setError(null)
        }

    }, [startValue, maxValue])

    const setValues = () => {
        setEdit(false)
        setCounter(startValue)

    }

    const setStart = (startValue: number) => {
        !editMode && setEdit(true)
        setStartValue(startValue)

    }

    const setMax = (maxValue: number) => {
        !editMode && setEdit(true)
        setMaxValue(+maxValue)
    }

    const Inc = () => {
        if (maxValue > counter)
            setCounter(++counter)
    }

    const Reset = () => {
        if (maxValue > startValue)
            setCounter(startValue)
    }

    return (
        <div className="App-header">
            <Setter
                counter={counter}
                onClick={setValues}
                setStart={setStart}
                setMax={setMax}
                startValue={startValue}
                maxValue={maxValue}
                editMode={editMode}
                error={error}

            />
            <Scoreboard
                editMode={editMode}
                Inc={Inc}
                Reset={Reset}
                counter={counter}
                startValue={startValue}
                maxValue={maxValue}
                error={error}
            />
            <SuperCounter
            />
        </div>
    );
}

export default App;

