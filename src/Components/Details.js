import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from '../Constants/index.js'

export default function Details(){
    const [details, setDetails] = useState(null);

    useEffect(() => {
        console.log(` fetching nasa data on certain date`);
        axios
        .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then((res) => {
        
        setDetails(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
        return () => {
            console.log(`Cleanup for nasadata fetch`);
        };
    }, [])


    return(
      <>
          {
              details &&              
              <>
                  <img src={details.hdurl} alt='Photo of The Day'></img>
                  <p>Copright: {details.copyright}</p>
                  <p>Date: {details.date}</p>
                  <a href={details.url}>Image URL</a>
                  <p>Explanation: {details.explanation}</p>
              </>
              
          }
      </>
  );



}