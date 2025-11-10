
import React from 'react'
import { useAtom } from "jotai"
import { counterAtom } from "../atoms/counterAtom"

const CounterJotai = () => {

    const [ count, setCount ] = useAtom(counterAtom)

    console.log('counterAtom (Jotai):', counterAtom)

    return (
        <>
            <button onClick={() => setCount(c => c - 1)}> - </button>
                <span style={ { margin: "0 1rem"} }>{ count }</span>
            <button onClick={() => setCount(c => c + 1)}> + </button>
        </>
    )
}

export default CounterJotai
