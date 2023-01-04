import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

const UserMap = ({ position, zoom }) => {
    return (
        <MapContainer center={position} zoom={zoom} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
        </MapContainer>
    )
}

export default UserMap;