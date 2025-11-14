
import React, { useEffect } from 'react'

import { FaSun, FaMoon } from "react-icons/fa6"


import { useTheme } from '../atoms/collectionAtoms'

const Theme = () => {

    const [appTheme, setAppTheme] = useTheme();

    useEffect(() => {
        document.body.className = appTheme;
    }, [appTheme]);



    const handleClick = () => setAppTheme(appTheme === 'light' ? 'dark' : 'light');

    return (
        <section>
            <button onClick={handleClick}>{appTheme === 'light' ? <FaMoon /> : <FaSun />}</button>
        </section>
    )
}

export default Theme
