import React from 'react'
import Card from './card'

const Table = ({tasksState}:any) => {
    return (
        <div>
            <Card tasksState={tasksState}/>
        </div>
    )
}

export default Table