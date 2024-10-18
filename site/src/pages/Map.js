import {MapContainer, TileLayer, Marker, Popup} from "react-leaflet"
import "leaflet/dist/leaflet.css"
import "../styles.css"

import { Icon, divIcon, point } from "leaflet"

import MarkerClusterGroup from "react-leaflet-cluster" //for neighborhoods


const Map = () => {

    const custIcon = new Icon ({
        iconUrl: require("../assets/location.png"),
        iconSize: [40,40]
    })

    const custClusterIcon = (cluster) => {
        return new divIcon({
            html: `<div class="cluster-icon">${cluster.getChildCount()}</div>`,
            iconSize: point(33,33, true),
            className: "custom-cluster-icon",
            iconUrl: require("../assets/location.png")
        })
    } 

    const markers = [
        {geocode: [40.6501, -73.94958], message: "Event 1" },
        {geocode: [40.68149, -73.83652], message: "Event 2"},
        {geocode: [40.78343, -73.96625], message: "Event 3"}
     ]



    return <MapContainer center={[40.7128, -74.0060]} zoom={15} >
        <TileLayer
            url='https://tile.openstreetmap.org/{z}/{x}/{y}.png'
        
        />

        <MarkerClusterGroup chunkedLoading
        iconCreateFunction={custClusterIcon}> 
        {markers.map(marker => {
            return <Marker position={marker.geocode} icon={custIcon}>
                <Popup><h2>{marker.message}</h2></Popup>
            </Marker>
        })}
        </MarkerClusterGroup>
        

    </MapContainer>
}

export default Map;