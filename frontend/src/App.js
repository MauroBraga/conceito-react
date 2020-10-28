import React from 'react'
import Header from './components/Header'

function App (){
    return (
    <>
        <Header title="Project"/>
            <ul>
                <li>Homepage</li>
                <li>Projects</li>
            </ul>
        <Header/>
        <Header title="ReactJs"/>
            <ul>
                <li>Homepage</li>
                <li>Projects</li>
            </ul>
        <Header/>
    </>
    
    
    )
}

export default App