

function Card(props) {
    return (
        <div>
            <div className="card text-center mb-3" style={{ width: "18rem" }}>
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
