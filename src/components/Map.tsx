"use client";

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { features } from "../app/data/mexicoHigh.json";

import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvents,
  GeoJSON,
} from "react-leaflet";
import { LatLngExpression } from "leaflet"; // Import LatLngExpression
import { useEffect, useState } from "react";

function GetCoordinates() {
  const map = useMapEvents({
    click: () => {
      map.locate();
    },
    locationfound: (location) => {
      console.log("location found:", location);
    },
  });
  return null;
}

export default function Map() {

  //** Last option to put the name of the states
  const position: LatLngExpression = [20.63087146186356, -103.2211034886408]; // Explicitly type position
  const [mexicoMunicipiosGeoJSON, setMexicoMunicipiosGeoJSON] = useState(features);

  // useEffect(() => {
  //   // Fetch GeoJSON data from the provided URL
  //   fetch(
  //     "https://raw.githubusercontent.com/angelnmara/geojson/master/mexicoHigh.json"
  //   )
  //     .then((response) => response.json())
  //     .then((data) => setMexicoMunicipiosGeoJSON(data))
  //     .catch((error) => console.error("Error fetching GeoJSON:", error));
  // }, []); // Empty dependency array ensures fetching only once on component mount

  return (
    <MapContainer
      center={position}
      zoom={4.5}
      scrollWheelZoom={false}
      style={{ height: "650px", width: "800px", borderRadius: "5px" }}
      attributionControl={false} // Hide the default attribution control
      doubleClickZoom={false}
      dragging={false}
      zoomControl={false}
    >
      <GetCoordinates />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png
"

      />
      {mexicoMunicipiosGeoJSON && (
        <GeoJSON 
        
        data={mexicoMunicipiosGeoJSON} 
        style={{ color: "red" }} 
        />
      )}{" "}
      {/* Render GeoJSON only if data is available */}
      <Marker position={position}>
        <Popup>
          This Marker icon is displayed correctly with{" "}
          <i>leaflet-defaulticon-compatibility</i>.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
