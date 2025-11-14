
import React from 'react'
import { useAtom } from "jotai"
import { useCounter } from "../atoms/collectionAtoms"

const CounterJotai = () => {

    const [count, setCount] = useCounter()

    return (
        <>
            <button onClick={() => setCount(c => c - 1)}> - </button>
                <span style={ { margin: "0 1rem"} }>{ count }</span>
            <button onClick={() => setCount(c => c + 1)}> + </button>
        </>
    )
}

export default CounterJotai
