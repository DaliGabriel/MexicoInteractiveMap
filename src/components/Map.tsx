"use client";

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

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
  const position: LatLngExpression = [20.63087146186356, -103.2211034886408]; // Explicitly type position
  const [mexicoMunicipiosGeoJSON, setMexicoMunicipiosGeoJSON] = useState(null); // State for GeoJSON data

  useEffect(() => {
    // Fetch GeoJSON data from the provided URL
    fetch(
      "https://raw.githubusercontent.com/angelnmara/geojson/master/mexicoHigh.json"
    )
      .then((response) => response.json())
      .then((data) => setMexicoMunicipiosGeoJSON(data))
      .catch((error) => console.error("Error fetching GeoJSON:", error));
  }, []); // Empty dependency array ensures fetching only once on component mount

  return (
    <MapContainer
      center={position}
      zoom={4.5}
      scrollWheelZoom={true}
      style={{ height: "700px", width: "800px" }}
      attributionControl={false} // Hide the default attribution control
    >
      <GetCoordinates />
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
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
