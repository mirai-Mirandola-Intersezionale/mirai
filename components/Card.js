import React from 'react'

export default function Card(props){
    return (
        <>
            {
                props.data.map(d => {
                    <div className="p-4 bg-gray-200 rounded-md">
                        <h1 key={d.id}>{d.denom_struttura}</h1>
                        {d.indirizzo && <h5 key={d.id}>{d.indirizzo}</h5>}
                        {d.verificato.nome && <p key={d.id}>{d.verificato.nome}</p>}
                    </div>
                    }
                )
            }
        </>
    )
}