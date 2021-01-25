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
  <div className="text-center p-4">
    <div>loading...</div>
    <img className="m-auto" src="https://s2.svgbox.net/loaders.svg?ic=elastic-spinner&color=000000" width="32" height="32"></img>
  </div>
)
   
  // render data
  return (
    <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-1 gap-10">
      <Card data={data} />
    </div>
  )
}

//Display data fetched

export default function Trova(){

  //get geolocation
  

    return(
        <div className="p-4 pt-20">
            <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pb-6">
              <label className="block">
                <span className="text-gray-700">Cerca</span>
                <input type="search" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="Cerca..."/>
              </label>
              
              <label className="block">
                <span className="text-gray-700">Scegli il tuo comune</span>
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