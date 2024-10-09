import React from 'react'
import Card from './card'

const Table = ({tasksState}) => {
    return (
        <div>
            <Card tasksState={tasksState}/>
        </div>
    )
}

export default Table