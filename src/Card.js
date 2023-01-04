import IpLogo from "./ip-logo.png";

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
            </div>
        </div>
    );
}

export default Card; 
