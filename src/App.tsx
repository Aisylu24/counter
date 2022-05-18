import React, {useState} from 'react';
import './App.css';
import {Scoreboard} from "./component/Scoreboard";


function App() {

    let startValue = 0
    let maxValue = 5

    let [counter, setCounter] = useState(0)


    const Inc = () => {
        setCounter(++counter)
    }

    const Reset = () => {
        setCounter(0)
    }

    return (
        <div className="App-header">
           <Scoreboard
            Inc={Inc}
            Reset={Reset}
            value={counter}
            startValue={startValue}
            maxValue={maxValue}
           />
        </div>
    );
}

export default App;

