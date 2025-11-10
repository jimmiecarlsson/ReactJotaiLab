
import React from 'react'

const Counter = ({ count, setCount }) => {

    console.log('count (useState):', count)

    return (
        <>
            <button onClick={() => setCount(count - 1)}> - </button>
            <span style={{ margin: "0 1rem" }}>{count}</span>
            <button onClick={() => setCount(count + 1)}> + </button>
        </>
    )
}

export default Counter
