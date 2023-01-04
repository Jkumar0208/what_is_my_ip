import { useEffect, useState } from 'react';
import axios from 'axios';
import "./styles.css";
import Card from "./Card.js";
import BeatLoader from "react-spinners/BeatLoader";
import IpLogo from "./ip-logo.png";
import UserMap from "./UserMap";
import cogoToast from "cogo-toast";

function App() {

  const bermudaTriangleLocation = [27.380863, -71.18844];
  const [location, setLocation] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [coordinates, setCoordinates] = useState();

  const { REACT_APP_IPIFY_API_KEY } = process.env;

  useEffect(() => {
    let ipify;
    setIsLoading(true);
    axios
      .get(`https://geo.ipify.org/api/v2/country,city?apiKey=${REACT_APP_IPIFY_API_KEY}`)
      .then(({ data: ipifyData }) => {
        ipify = ipifyData;
        //console.log(ipify);
        setLocation({
          ip: ipify.ip,
          lat: ipify.location.lat,
          lng: ipify.location.lng,
          region: ipify.location.region,
          city: ipify.location.city,
          country: ipify.location.country
        });
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsError(true);
        setIsLoading(false);
      })
  }, [REACT_APP_IPIFY_API_KEY]);


  useEffect(() => {
    const message =
      "The map's location will only be based on your IP address 😉";
    if (!navigator.geolocation) {
      cogoToast.warn(
        <div>
          <strong>
            Oh no! Geolocation is not available through your current browser!
          </strong>
          <p>{message}</p>
        </div>
      );
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates([position.coords.latitude, position.coords.longitude]);
          cogoToast.success(
            <div>
              <strong>Thank you for accepting to be geolocated!</strong>
              <p>The map now shows your precise location.</p>
            </div>
          );
        },
        () => {
          cogoToast.warn(
            <div>
              <strong>Geolocation denied!</strong>
              <p>{message}</p>
            </div>
          );
        }
      );
    }
  }, []);


  if (isLoading || isError) {
    return (
      <div className='center-message'>
        {isLoading && <BeatLoader />}
        {isError && (
          <>
            <img src={IpLogo} alt="logo" />
            <h1 className="errorText errorBig">
              There was a problem loading your ip/location data{" "}
              <span role="img" aria-label="poop emoji">
                💩
              </span>
            </h1>
            <h2 className="errorText errorSmall">
              please disable your adblocker/extensions and try again{" "}
              <span role="img" aria-label="recycle emoji">
                ♻️
              </span>{" "}
              !
            </h2>
          </>
        )}
        <div className="leaflet-container" id="map">
          <UserMap position={bermudaTriangleLocation} zoom={6} />
        </div>
      </div>
    )
  }

  const lat = coordinates ? coordinates[0] : location.lat;
  const lng = coordinates ? coordinates[1] : location.lng;

  return (
    <div className="center">

      <Card data={location} />

      <div className="leaflet-container">
        <UserMap position={[lat, lng]} zoom={13} />
      </div>

    </div>
  );
}

export default App;
