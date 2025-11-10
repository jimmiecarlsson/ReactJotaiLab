
import React from 'react'
import { useAtomValue } from 'jotai'
import { counterAtom } from '../atoms/counterAtom'



const DisplayJotai = () => {

    const count = useAtomValue(counterAtom)

    return (
        <>
            <p>Nuvatrande Jotai-värde: { count }</p>
        </>
    )
}

export default DisplayJotai
