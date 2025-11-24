import React from 'react'
import Banner from '../../Components/Banner/Banner'
import Books from '../Books/Books'
import { useLoaderData } from 'react-router'

function Home() {
  const data = useLoaderData();
  return (
    <div>
        <Banner></Banner>
        <Books data={data}></Books>
    </div>
  )
}

export default Home