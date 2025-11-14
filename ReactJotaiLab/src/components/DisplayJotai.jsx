
import React from 'react'
import { useAtomValue } from 'jotai'
import { counterAtom } from '../atoms/collectionAtoms'



const DisplayJotai = () => {

    const count = useAtomValue(counterAtom)

    return (
        <>
            <p>Nuvatrande Jotai-värde: { count }</p>
        </>
    )
}

export default DisplayJotai
