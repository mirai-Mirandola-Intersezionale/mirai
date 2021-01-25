import React from 'react'

export default function Card(props){
    return(
        <>
         <ul>
            {
            props.data.map(prop => 
            <li key={prop}>{prop}</li>)
            }
         </ul>
        </>
    )
}