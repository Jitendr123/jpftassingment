import React, { useState } from 'react'
import Header from '../component/Header'
import Dashboard from './Dashboard'

function Home() {
    const [analyticsMode, setAnalyticsMode] = useState(false);
    const [callApi, setCallApi] = useState(true);


    function handleMode() {
        setAnalyticsMode((prevMode) => !prevMode);
    }
    return (
        <>
            <Header analyticsMode={analyticsMode} handleMode={handleMode} callApi={callApi} setCallApi={setCallApi} />
            <Dashboard analyticsMode={analyticsMode} callApi={callApi} setCallApi={setCallApi} />
        </>
    )
}

export default Home
