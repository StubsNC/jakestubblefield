import React from 'react'
import Content from './content'
import Header from './Header'
import "./styles.scss";

function App() {
    return (
        <div className='page_container'>
            <div className='header_wrapper'>
                <Header />
            </div>
                <Content />
        </div>
    )
}

export default App
