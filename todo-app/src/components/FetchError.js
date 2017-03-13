import React from 'react'

const FetchError = ({ message, onRetry }) => (
    <div>
        <p>Something went wrong. {message}</p>
        <button onClick={onRetry}>Retry</button>
    </div>
)

export default FetchError