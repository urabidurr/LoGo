import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "../styles.css";

import { Icon, divIcon, point } from "leaflet";

import MarkerClusterGroup from "react-leaflet-cluster"; // for neighborhoods
import Navbar from "../components/Navbar";

// Function to set the map bounds
const SetMapBounds = () => {
    const map = useMap();
    // Define the bounds for NYC
    const bounds = [
        [40.700292, -74.25909], // Southwest coordinates (approximately)
        [40.7831, -73.700272]   // Northeast coordinates (approximately)
    ];
    map.fitBounds(bounds); // Fit the map to these bounds
    return null; // This component doesn't render anything
};

const Map = () => {
    const custIcon = new Icon({
        iconUrl: require("../assets/location.png"),
        iconSize: [40, 40],
        iconAnchor: [20, 40], // Center the icon (half of icon size width and full height)
    });

    const custClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
            iconSize: point(33, 33, true),
            className: "custom-cluster-icon",
            iconUrl: require("../assets/location.png"),
        });
    };

    const markers = [
        { geocode: [40.6501, -73.94958], message: "Event 1" },
        { geocode: [40.68149, -73.83652], message: "Event 2" },
        { geocode: [40.78343, -73.96625], message: "Event 3" },
    ];

    return (
        <>
            <Navbar />
            <MapContainer className="map-container" center={[40.7128, -74.0060]} zoom={12} maxZoom={15} minZoom={10}>
                <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

                <MarkerClusterGroup chunkedLoading iconCreateFunction={custClusterIcon}>
                    {markers.map((marker, index) => (
                        <Marker 
                            key={index} 
                            position={marker.geocode} 
                            icon={custIcon} 
                            eventHandlers={{
                                click: (e) => {
                                    const map = e.target._map; // Get the map instance from the marker event
                                    map.setView(marker.geocode, 15, {
                                        animate: true,
                                        duration: 1,
                                    });
                                },
                            }}
                        >
                            <Popup offset={[0, -40]}> {/* Move the popup above the marker */}
                                <h2>{marker.message}</h2>
                            </Popup>
                        </Marker>
                    ))}
                </MarkerClusterGroup>

                <SetMapBounds /> {/* Set the map bounds to NYC */}
            </MapContainer>
        </>
    );
};

export default Map;