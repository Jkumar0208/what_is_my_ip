import { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles.css";
import Card from "./Card.js";

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
    <div className="center">

      <Card ipAddress={location.ip} country={location.country} region={location.region} />

    </div>
  );
}

export default App;
