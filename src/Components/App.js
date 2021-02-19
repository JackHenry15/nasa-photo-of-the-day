import React, {useState, useEffect} from "react";
import axios from "axios";
import "../App.css";
import Date from './Date'
import { BASE_URL, API_KEY } from '../Constants/index.js'

export default function App() {
  const [nasaData, setNasaData] = useState([]);

  useEffect(() => {
  axios
  .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
  .then((res) => {
    setNasaData(res.data);
  })
  .catch((err) => {
    console.log(err);
  });
  }, [])


  return (
    <div className='App'>
      <h1>Nasa Photo of the Day</h1>
      {
        <Date bold info={nasaData}/>  
      }
    </div>
  )

}


