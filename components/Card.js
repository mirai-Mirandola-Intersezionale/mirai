import React from 'react'

export default function Card(props){
    const properties = Object.getOwnPropertyNames(props.data)
    return (
        <>
            {
                properties.map(p=>(
                    props.data.map((d)=>
                    <div className="">
                        <h1 key={d.id}>{d.denom_struttura}</h1>
                        {d.indirizzo && <li key={d.id}>{d.indirizzo}</li>}
                    </div>
                    )
                ))
            }
        </>
    )
}