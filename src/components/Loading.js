import React from 'react'
import LoadingGif from '../images/loading-arrow.gif'

const Loading = () => {
    return (
        <div className="loading">
            <h4>Property Data Loading....</h4>
            <img src={LoadingGif} alt="Property Page Loading"/>
        </div>
    )
}

export default Loading
