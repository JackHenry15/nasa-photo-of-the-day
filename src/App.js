import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Details from './Details'
// import { BASE_URL, API_KEY } from './index.js'

function App() {
  // const [nasadat, SetNasaDat] = useState([]);
  // const [todaysPic, SetTodaysPic] = useState(null);

  // const [nasaData, setNasaData] = useState([]);

  //   useEffect(() => {
  //       console.log(` fetching nasa data`);
  //       axios
  //       .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
  //       .then((res) => {
  //         debugger
  //           setNasaData(res.data)
  //       })
  //       .catch((err) => {
  //           console.log(err);
  //       })
  //       return () => {
  //           console.log(`Cleanup for nasadata fetch`);
  //       };
  //   }, [])


  //   return(
  //     <div className='App'>
  //         <h1>this is the nasa data</h1>
  //         {
  //             <div className='App-header'>
  //                 <p><b>Title</b>: {nasaData.title}</p>
  //                 <img src={nasaData.hdurl} alt='Photo of The Day'></img>
  //                 <p><b>Copright</b>: {nasaData.copyright}</p>
  //                 <p><b>Date</b>: {nasaData.date}</p>
  //                 <a className='App-link' href={nasaData.url}>Image URL</a>
  //                 <p><b>Explanation</b>: {nasaData.explanation}</p>
  //             </div>
  //         }
  //     </div>
  // );
  return (
    <div>
    <Details />
    </div>
  )

}

/* <p>
  Read through the instructions in the README.md file to build your NASA
  app! Have fun <span role="img" aria-label='go!'>🚀</span>!
</p>       */

export default App;
