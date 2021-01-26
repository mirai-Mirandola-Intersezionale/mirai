import React from 'react'

//Components
import Card from './Card'

//Fetching API
import useSWR from 'swr'

//Fetch data from API
const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function Fetch ({links, value}) {
    
    const { data, error } = useSWR('https://api.mirai.plus/api/v1/'+ links , fetcher)

    if (error) return <div className="text-center p-4">failed to load</div>

    if (!data) return (
    <div className="text-center p-4">
        <div>loading...</div>
        <img className="m-auto" src="https://s2.svgbox.net/loaders.svg?ic=elastic-spinner&color=000000" width="32" height="32"></img>
    </div>
    )

    return (
        <Card data={data} value={value}/>
    )
}