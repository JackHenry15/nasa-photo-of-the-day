import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
// import Details from './Details'
import { BASE_URL, API_KEY } from './index'

function App() {
  // const [nasadat, SetNasaDat] = useState([]);
  // const [todaysPic, SetTodaysPic] = useState(null);

  const [nasaData, setNasaData] = useState({})

    useEffect(() => {
        console.log(` fetching nasa data`);
        axios
        .get(`${BASE_URL}/planetary/apod?api_key=${API_KEY}`)
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


    // nas
    return(
      <div className='App'>
          <h1>this is the nasa data</h1>
          {
              <>
                  <p><b>Title</b>: {nasaData.title}</p>
                  <img src={nasaData.hdurl} alt='Photo of The Day'></img>
                  <p><b>Copright</b>: {nasaData.copyright}</p>
                  <p><b>Date</b>: {nasaData.date}</p>
                  <a className='App-link' href={nasaData.url}>Image URL</a>
                  <p><b>Explanation</b>: {nasaData.explanation}</p>
              </>
          }
      </div>
  );









    // return (
    //   <App />
    // )
  // return (
  //   <div className="App">
  //     <div className="Header">
  //       <h1>Hey welcome placeholder stuff</h1>
  //     </div>
  //     <div className="Picdiv">
  //       <h3>NASA Pic of the day:</h3>
  //       <img className="Nasapic" href='#'></img>
  //       <h3>copyright</h3>
  //       <h3>Set (insert date)</h3>
  //       <p>explanation</p>
  //     </div>
  //   </div>
  // );
}

/* <p>
  Read through the instructions in the README.md file to build your NASA
  app! Have fun <span role="img" aria-label='go!'>🚀</span>!
</p>       */

export default App;
