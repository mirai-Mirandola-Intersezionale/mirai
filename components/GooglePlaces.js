import React from 'react'

//Places Autocomplete
import PlacesAutocomplete, {
    geocodeByAddress,
    geocodeByPlaceId,
    getLatLng,
  } from 'react-places-autocomplete';


export default function GooglePlaces(){
    const [address, setAddress] = React.useState('')

    const handleSelect = async (value) =>{}

    return(
        <>
            <PlacesAutocomplete 
                value={address} 
                onChange={setAddress} 
                onSelect={handleSelect}>
                    {({ getInputProps, suggestions, getSuggestionItemProps, loading })=>(
                        <div>
                        <input
                          {...getInputProps({
                            placeholder: 'Inserisci CAP, Città, Paese',
                            className: 'location-search-input block w-full py-4 px-3 md:rounded-l-none md:rounded-r-md rounded-t-none rounded-b-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50',
                          })}
                        />
                        <div className="autocomplete-dropdown-container">
                          {loading && <div>Loading...</div>}
                          {suggestions.map(suggestion => {
                            const className = suggestion.active
                              ? 'suggestion-item--active'
                              : 'suggestion-item';
                            // inline style for demonstration purpose
                            const style = suggestion.active
                              ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                              : { backgroundColor: '#ffffff', cursor: 'pointer' };
                            return (
                              <div
                                {...getSuggestionItemProps(suggestion, {
                                  className,
                                  style,
                                })} key={suggestion}
                              >
                                <span>{suggestion.description}</span>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    )}
            </PlacesAutocomplete>
        </>
    )
}