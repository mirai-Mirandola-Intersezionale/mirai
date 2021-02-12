import React from 'react'
import Link from 'next/link'

export default function Card({data, value}){
    return (
        <>
            {
                data.map(d => (
                    <Link href={'/trova/'+d.id} className="cursor-pointer">
                        <div className="p-4 bg-white rounded-md shadow-md cursor-pointer">
                            <div className="flex flex-row-reverse items-start justify-between">
                                {d.logo[0] && <img key={d.id} src={d.logo[0]} width="50px" height="50px" className="w-16 rounded-full object-cover"/>}
                                <div className="flex flex-col">
                                    <h1 key={d.id} className="text-lg">{d.nome}</h1>
                                    <br/>
                                    {d.indirizzo && <h5 key={d.indirizzo} className="text-gray-400 text-sm">{d.indirizzo}</h5>}
                                </div>
                            </div>
                        <br/>
                            <div className="flex flex-row-reverse justify-between items-end">
                                {d.verificato.nome && <h5 key={d.verificato.nome} className="text-right"><span className="text-gray-400 text-sm">Verificato da</span><br/>{d.verificato.nome}</h5>}
                                <br/>
                                {d.sito_web && <a href={d.sito_web} target="_blank">{d.sito_web.length < 20 ? d.sito_web : d.sito_web.slice((d.sito_web.indexOf('/')+2), 25)+'...'}</a>}
                            </div>
                        </div>
                    </Link>
                    )
                )
            }
        </>
    )
}