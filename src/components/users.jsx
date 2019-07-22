import React from 'react'

function Users(props) {
    return (
        <div>
        <h1 onClick={ e =>{props.delete(props.index)}} >{props.name}</h1>
        </div>
    )
}

export default Users