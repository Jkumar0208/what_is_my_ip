import IpLogo from "./ip-logo.png";

function Card(props) {
    return (
        <div>
            <div className="cardHeader">
                <img src={IpLogo} id="ipLogo" alt="What's my IP logo" />
                <h2 className="cardHeaderText">What's My IP?</h2>
            </div>
            <div className="card text-center mb-3" style={{ width: "26.5rem" }}>
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Your IP address is:</h5>
                    <p className="card-text">{props.ipAddress}</p>
                    <h5 className="card-title">You are currently located in:</h5>
                    <p className="card-text">{props.region}</p>
                    <h5 className="card-title">You are from:</h5>
                    <p className="card-text">{props.country}</p>
                </div>
            </div>
        </div>
    );
}

export default Card; 
