import React, { useState } from 'react'
import Header from '../component/Header'
import Dashboard from './Dashboard'

function Home() {
    const [analyticsMode, setAnalyticsMode] = useState(false);
    // console.log('hi')
    function handleMode() {
        setAnalyticsMode((prevMode) => !prevMode);
    }
    return (
        <>
            <Header analyticsMode={analyticsMode} handleMode={handleMode} />
            <Dashboard analyticsMode={analyticsMode} />
        </>
    )
}

export default Home
