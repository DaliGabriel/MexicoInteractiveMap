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
import { Feature, Geometry, MultiPolygon, Polygon } from "geojson";
// Import your GeoJSON data
import rawGeoJSONData from "../app/data/mexicoHigh.json";
import { useEffect, useState } from "react";

// Define more specific types for your GeoJSON features
type MexicoGeometry = MultiPolygon | Polygon;

type MexicoProperties = {
  name: string;
  id: string;
  CNTRY: string;
  TYPE: string;
};

type MexicoFeature = Feature<MexicoGeometry, MexicoProperties>;

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
  const position: LatLngExpression = [20.63087146186356, -103.2211034886408];
  const [mexicoMunicipiosGeoJSON, setMexicoMunicipiosGeoJSON] = useState<
    MexicoFeature[]
  >([]);

  useEffect(() => {
    // Transform the raw GeoJSON data to ensure each feature has the correct structure
    const transformedFeatures = rawGeoJSONData.features.map((feature) => ({
      type: "Feature" as const,
      geometry: feature.geometry as MexicoGeometry,
      properties: feature.properties as MexicoProperties,
      id: feature.id,
    }));

    setMexicoMunicipiosGeoJSON(transformedFeatures);
  }, []);

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
        url="https://{s}.basemaps.cartocdn.com/rastertiles/dark_nolabels/{z}/{x}/{y}.png"
      />
      {mexicoMunicipiosGeoJSON.length > 0 && (
        <GeoJSON
          data={
            mexicoMunicipiosGeoJSON as unknown as GeoJSON.FeatureCollection<Geometry>
          }
          style={{ color: "red" }}
        />
      )}
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
