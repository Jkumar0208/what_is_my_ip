import IpLogo from "./ip-logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faCalendarAlt } from "@fortawesome/free-solid-svg-icons";
import { DateTime } from "luxon";

function Card({ data: { ip, region, city, country } }) {
    return (
        <div>
            <div className="cardHeader">
                <img src={IpLogo} id="ipLogo" alt="What's my IP logo" />
                <h2 className="cardHeaderText">What's My IP?</h2>
            </div>
            <div className="card text-center mb-3" style={{ width: "26.5rem" }}>
                <img src={`https://flagcdn.com/w640/${country.toLowerCase()}.png`} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h6 className="card-title">Your IP address is {ip}</h6>
                    <p className="card-title">You are currently located in {city}, {country}</p>
                </div>
                <div className="card-footer pb-0 text-muted">

                    <small>
                        <p className="mb-0">
                            <FontAwesomeIcon
                                icon={faCalendarAlt}
                                style={{ marginRight: "0.3em" }}
                            />Today's Date {DateTime.local().toLocaleString()}
                        </p>
                        <p><FontAwesomeIcon
                            icon={faClock}
                            style={{ marginRight: "0.3em" }}
                        />Your local time is {DateTime.local().toLocaleString(DateTime.TIME_SIMPLE)}
                        </p>
                    </small>
                </div>
            </div>
        </div>
    );
}

export default Card; 
