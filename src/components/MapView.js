import React, { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Markers from "./Markers";
import places from "../assets/data.json";

const MapView = () => {
    const [state, setstate] = useState({
        currentLocation: {
            lat: `-32.94919448458871`,
            lng: `-60.63721596387239`,
        },
        zoom: 16,
    });

    const location = useLocation();
    const history = useHistory();
    useEffect(() => {
        if (location.state.latitude && location.state.longitude) {
            const currentLocation = {
                lat: location.state.latitude,
                lng: location.state.longitude,
            };
            setstate({ ...state, currentLocation });
            history.replace({ pathname: "/map", state: {} });
        }
    }, []);

    return (
        <MapContainer
            className="markercluster-map"
            center={state.currentLocation}
            zoom={state.zoom}
            maxZoom={18}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Markers places={places} />
        </MapContainer>
    );
};

export default MapView;
