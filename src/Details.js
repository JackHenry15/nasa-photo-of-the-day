import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Details(){
    const [nasaData, setNasaData] = useState(null)

    useEffect(() => {
        console.log(` fetching nasa data`);
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=aRGpKhs417QUpGWeh2fnKSYNPsglpnFn3pQ9wIur`)
        .then((res) => {
            setNasaData(res.data)
        })
        .catch((err) => {
            console.log(err);
        })
        return () => {
            console.log(`Cleanup for nasadata fetch`);
        };
    })



    return(
        <div className='container'>
            <h1>this is the nasa data</h1>
            {
                nasaData &&
                <>
                    <p><b>Title</b>: {nasaData.title}</p>
                    <img src={nasaData.hdurl}></img>
                    <p><b>Copright</b>: {nasaData.copyright}</p>
                    <p><b>Date</b>: {nasaData.date}</p>
                    <a href={nasaData.url}>Image URL</a>
                    <p><b>Explanation</b>: {nasaData.explanation}</p>
                
                
                </>
            }
        </div>
    );




}