import React from 'react'

//SEO
import { NextSeo } from 'next-seo';

//Components
import Form from '../../components/Form'
import GooglePlaces from '../../components/GooglePlaces'
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

//Fetching API
// import Fetch from '../../components/Fetch'

//Display data fetched



export default function Trova(){

  const [searchResults, setSearchResults] = React.useState([]);
    const [searchTerm, setSearchTerm] = React.useState("");
    const handleChange = event => {
        setSearchTerm(event.target.value)
    };

    const [lists] = React.useState([
        {
            label: "Seleziona il centro",
            value:'seleziona'
        },
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
    const [address, setAddress] = React.useState('')

    return(
      <>
      <NextSeo
       title="Trova i centri della salute più vicini"
      />
      <div className="">
        <div className=" p-4 pb-10 bg-red-500 ">
            <h1 className="text-white text-4xl font-normal text-center my-4">Trova il centro</h1>
            <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-2 grid-cols-1 max-w-screen-xl mx-auto">
                
                    <input 
                    type="search" 
                    className="block w-full py-4 md:rounded-md md:rounded-r-none rounded-t-md rounded-b-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" 
                    placeholder="Cerca..."
                    value={searchTerm}
                    onChange={handleChange}
                    />
                
                    
                
                    <select className="block w-full py-4 rounded-none border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                    {lists.map(({ label, value }) => (
                        <option key={value} value={value} onChange={e => setValue(e.target.value)}>
                        {label}
                        </option>
                    ))}
                    </select>
                    <GooglePlacesAutocomplete 
                      className="py-4"
                      apiKey="AIzaSyBqp5LjDeHLID3AByN-JsWWiw1Ytcwit2Q"
                      autocompletionRequest={{
                        componentRestrictions: {
                          country: ['it'],
                          }
                      }}
                      selectProps={{
                        address,
                        onChange: setAddress,
                        styles: {
                          input: (provided) => ({
                            ...provided,
                            padding:'1rem 0',
                            borderTopLeftRadius:'0',
                            borderBottomLeftRadius:'0'
                          })
                        }
                      }}
                      onLoadFailed={(error) => (
                        console.error("Could not inject Google script", error)
                      )}
                    />


                
            </div>
        </div>
            <div className="grid p-4 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-10 max-w-screen-xl mx-auto">
                {/* <Fetch links={value} value={searchTerm}/> */}
            </div>
        </div>
      </>
    )
}