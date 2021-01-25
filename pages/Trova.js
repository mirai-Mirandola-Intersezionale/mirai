import React from 'react'

//SEO
import { NextSeo } from 'next-seo';

//Components
import Form from '../components/Form'

//Fetching API
import Fetch from '../components/Fetch'

//Display data fetched



export default function Trova(){

  const [searchResults, setSearchResults] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value)
    };

    const [lists] = React.useState([
        {
          label: "Arcigay",
          value: "arcigay"
        },
        { 
            label: "Consultori", 
            value: "consultori" 
        },
        { 
            label: "Centri Test HIV", 
            value: "testHIV" 
        },
        { 
            label: "Centri Test IST", 
            value: "testIST" 
        }
      ]);

    const [value, setValue] = React.useState('arcigay');
    

    return(
      <>
      <NextSeo
       title="Trova i centri della salute più vicini"
      />
        <div className="p-4 pt-20">
        <div className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6 pb-6">
            <label className="block">
                <span className="text-gray-700">Cerca</span>
                <input 
                type="search" 
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                placeholder="Cerca..."
                value={searchTerm}
                onChange={handleChange}
                />
            </label>
                
            <label className="block">
                <span className="text-gray-700">Scegli la lista</span>
                <select className="block w-full mt-1 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                {lists.map(({ label, value }) => (
                    <option key={value} value={value} onChange={e => setValue(e.target.value)}>
                    {label}
                    </option>
                ))}
                </select>
            </label>
        </div>
            <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-10">
                <Fetch links={value}/>
            </div>
        </div>
      </>
    )
}