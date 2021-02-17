import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from './index.js'

export default function Details(){
    const [nasaData, setNasaData] = useState([]);

    useEffect(() => {
        console.log(` fetching nasa data`);
        axios
        .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then((res) => {
        //   debugger
        //   console.log(res.data)
            setNasaData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
        return () => {
            console.log(`Cleanup for nasadata fetch`);
        };
    }, [])


    return(
      <div className='App'>
          <h1>The Nasa Photo of the Day</h1>
          {
              <div className='App-header'>
                  <p><b>Title</b>: {nasaData.title}</p>
                  <img src={nasaData.hdurl} alt='Photo of The Day'></img>
                  <p><b>Copright</b>: {nasaData.copyright}</p>
                  <p><b>Date</b>: {nasaData.date}</p>
                  <a className='App-link' href={nasaData.url}>Image URL</a>
                  <p><b>Explanation</b>: {nasaData.explanation}</p>
              </div>
          }
      </div>
  );



}