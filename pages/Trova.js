import React from 'react'

//Fetching API
import useSWR from 'swr'
const fetcher = (...args) => fetch(...args).then(res => res.json())
function Profile () {
  const { data, error } = useSWR('https://api.mirai.plus/api/v1/arcigay', fetcher)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  const arcigay = data[0]
  const properties = Object.getOwnPropertyNames(data[0])
   

  // render data
  return (
    <ul>
        {
        properties.map(prop => 
        <li key={prop}>{prop}:
        <li>{arcigay.prop}</li>
        </li>)
        }
    </ul>
  )
}

export default function Trova(){
    return(
        <div>
            <Profile/>
        </div>
    )
}