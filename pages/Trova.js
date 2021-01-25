import React from 'react'

//Components
import Card from '../components/Card'


//Fetching API
import useSWR from 'swr'

//Fetch data from API
const fetcher = (...args) => fetch(...args).then(res => res.json())
function Profile () {
const { data, error } = useSWR('https://api.mirai.plus/api/v1/arcigay', fetcher)
if (error) return <div>failed to load</div>
if (!data) return (
  <>
    <div>loading...</div>
    <img src="https://s2.svgbox.net/loaders.svg?ic=elastic-spinner&color=000000" width="32" height="32"></img>
  </>
)

const properties = Object.getOwnPropertyNames(data[0])
   
  // render data
  return (
    <>
      <Card data={properties}/>
    </>
  )
}

//Display data fetched

export default function Trova(){

  //get geolocation
  

    return(
        <div>
            <Profile/>
        </div>
    )
}