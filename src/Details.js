import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { BASE_URL, API_KEY } from './index.js'

export default function Details(props){
    const { dateId, close } = props
    const [details, setDetails] = useState(null);

    useEffect(() => {
        console.log(` fetching nasa data on certain date`);
        axios
        .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
        .then((res) => {
          debugger
        setDetails(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
        return () => {
            console.log(`Cleanup for nasadata fetch`);
        };
    }, [dateId])


    return(
      <>
          {
              details &&
              <>
              <div className='App-header'>
                  <p><b>Title</b>: {details.title}</p>
                  <img src={details.hdurl} alt='Photo of The Day'></img>
                  <p><b>Copright</b>: {details.copyright}</p>
                  <p><b>Date</b>: {details.date}</p>
                  <a className='App-link' href={details.url}>Image URL</a>
                  <p><b>Explanation</b>: {details.explanation}</p>
              </div>
              </>
          }
          <button onClick={close}>Hide Image</button>
      </>
  );



}