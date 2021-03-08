import React from 'react'

//SEO
import Head from 'next/head'
import { NextSeo } from 'next-seo';

//Components
import Form from '../../components/Form'
import GooglePlaces from '../../components/GooglePlaces'

//Fetching API
// import Fetch from '../../components/Fetch'

//Display data fetched



export default function Trova(){

    return(
      <>
      <NextSeo
       title="Trova i centri della salute più vicini"
      />
      </>
    )
}