import React from 'react'

export default function Card(props){
    return (
        <>
            {
                props.data.map(d => (
                    <div className="p-4 bg-white rounded-md shadow">
                        {d.logo[0] && <img key={d.id} src={d.logo[0]} width="50px" height="50px" className="w-16 rounded-full object-cover"/>}
                        <h1 key={d.id}>{d.nome}</h1>
                        <br/>
                        {d.indirizzo && <h5 key={d.indirizzo}>{d.indirizzo}</h5>}
                        <br/>
                        {d.verificato.nome && <h5 key={d.verificato.nome}>Verificato da {d.verificato.nome}</h5>}
                        <br/>
                        {d.sito_web && <a href={d.sito_web} target="_blank">{d.sito_web.length < 25 ? d.sito_web : d.sito_web.slice(0, 25)+'...'}</a>}
                    </div>
                    )
                )
            }
        </>
    )
}