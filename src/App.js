import React, {useState, useEffect} from "react";
import axios from "axios";
import "./App.css";
import Details from './Details'
import { BASE_URL, API_KEY } from './index.js'

export default function App() {
  const [nasaData, setNasaData] = useState([]);
  const [currentDate, setDate] = useState(null);

  const dateButton = date => {
    setDate(date)
  }
  const dateButtonClose = () => {
    setDate(null);
  }

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

  const Date = props => (
    <div className='App'>
      <button onClick={() => dateButton(props.info.date)}>
        See Image
      </button>
    </div>
  )


  return (
    <div className='App'>
          <h1>The Nasa Photo of the Day</h1>
      {
        <Date key={nasaData.date} info={nasaData} />        
      }
      {
        currentDate && <Details dateId={currentDate} close={dateButtonClose}/>
      }
    </div>
  )

}

/* <p>
  Read through the instructions in the README.md file to build your NASA
  app! Have fun <span role="img" aria-label='go!'>🚀</span>!
</p>       */

// export default App;
