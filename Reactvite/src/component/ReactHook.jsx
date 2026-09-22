import React ,{ useState } from 'react'

function ReactHook() {
    const [counter,setCount]=useState(100);
    function IncreaseCounter() {
        setCount(counter+10);
    }
    function DecreaseCounter(){
        setCount(counter-10);
    }
    return (
        <div>
            <h2 style={{color:'browm'}}>Working on Reacthook</h2>
            <h1>Counter Value={counter}</h1>
            <button onClick={IncreaseCounter}>IncreaseCounterValue</button>
            <button onClick={DecreaseCounter}>DecreaseCounterValue</button>
        </div>
    )
}

export default ReactHook