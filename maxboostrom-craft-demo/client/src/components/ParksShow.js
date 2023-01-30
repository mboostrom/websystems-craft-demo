import React from "react";
import { useState, useEffect } from "react";

import ParkTile from "./ParkTile";

const ParksShow = () => {
const [data, setData] = useState([])

const fetchData = async () => {
  try {
    const response = await fetch('api/v1/parks')
    if (!response.ok) {
      const error = new Error(`${response.status} (${response.statusText})`)
      throw error
    }
    const responseBody = await response.json()
    setData(responseBody.parks)
  } catch (error) {
    console.log(`Error in fetch: ${error.message}`)
  }
}

useEffect(() => {
  fetchData()
}, [])

const parksWithImages = data.filter(park => park.image !== '');

const parks = parksWithImages.map((park) => {
  return(
    <ParkTile 
    key={park.title}
    park={park}
    />
  )
})

  return(
    <div className="park-tile-container">
    {parks}
    </div>
  )
}

export default ParksShow