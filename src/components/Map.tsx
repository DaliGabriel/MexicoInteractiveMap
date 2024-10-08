"use client";
// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
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

interface MapProps {
  selectedState: string | null;
  setSelectedState: (state: string | null) => void;
}

export default function Map({ selectedState, setSelectedState }: MapProps) {
  //** Last option to put the name of the states
  const position: LatLngExpression = [20.63087146186356, -102.2211034886408];
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

  //Detect wich state the user clicked on
  const onEachFeature = (feature: MexicoFeature, layer: L.Layer) => {
    layer.on({
      click: () => {
        const stateName = feature.properties.name;
        setSelectedState(stateName);
      },
    });
  };

  // Define the style for each feature (state)
  const style = (feature: Feature<Geometry, MexicoProperties> | undefined) => {
    if (!feature) {
      return {};
    }

    return {
      //Border of the states
      color: selectedState === feature.properties.name ? "#FFF" : "#ffffff59", // Highlight clicked state in red
      weight: 0.4,
      //Content of the states
      fillColor:
        selectedState === feature.properties.name ? "#00E5FF" : "#1E1E1E", // Change fill color for clicked state
    };
  };
  

  return (
    <>
      <MapContainer
        center={position}
        zoom={3.5}
        scrollWheelZoom={false}
        style={{
          height: "100%", // Change to full viewport height
          width: "100%", // Change to full width
          position: "absolute", // Add this
          top: 0, // Add this
          left: 0, // Add this
          borderRadius: "0", // Remove border radius
          backgroundColor: "black",
        }}
        attributionControl={false}
        doubleClickZoom={false}
        dragging={false}
        zoomControl={false}
        touchZoom={false}
      >
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
            onEachFeature={onEachFeature}
            style={style}
          />
        )}
      </MapContainer>
    </>
  );
}
