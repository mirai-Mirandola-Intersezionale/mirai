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
            <div className="grid grid-cols-1 gap-6">
              <label className="block">
                {/* <span className="text-gray-700">Cerca</span> */}
                <input type="search" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Cerca..."/>
              </label>
              
              <label className="block">
                <span className="text-gray-700">What type of event is it?</span>
                <select className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                  <option>Corporate event</option>
                  <option>Wedding</option>
                  <option>Birthday</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
            <Profile/>
        </div>
    )
}