import L from "leaflet";
// import markerIconPng from "leaflet/dist/images/marker-icon.png"

export const IconLocation = L.icon({
    iconUrl: "assets/icon.svg",
    iconRetinaUrl: "assets/icon.svg",
    // iconUrl: markerIconPng,
    // iconRetinaUrl: markerIconPng,
    iconAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: [40, 40],
    className: "leaflet-venue-icon",
});
