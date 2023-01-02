import { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {

  const [location, setLocation] = useState({});

  const { REACT_APP_IPIFY_API_KEY } = process.env;

  useEffect(() => {
    let ipify;
    axios
      .get(`https://geo.ipify.org/api/v2/country?apiKey=${REACT_APP_IPIFY_API_KEY}`)
      .then(({ data: ipifyData }) => {
        ipify = ipifyData;
        setLocation({
          ip: ipify.ip,
          region: ipify.location.region,
          country: ipify.location.country
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }, [REACT_APP_IPIFY_API_KEY]);


  return (
    <div className="App">

      <Fragment>
        <h1>Your IP address is: {location.ip}</h1>
        <p>You are currently located in: {location.region} </p>
        <p>You are from: {location.country}</p>
      </Fragment>


    </div>
  );
}

export default App;
