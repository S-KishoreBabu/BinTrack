import React, { useEffect, useState, useCallback } from "react";
import {
  GoogleMap,
  Marker,
  DirectionsRenderer,
  useJsApiLoader,
} from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "350px",
};

const center = {
  lat: 11.016,
  lng: 76.955,
};

const truckLocation = { lat: 10.88964, lng: 76.99225 };
const libraries = ["geometry"];

const Map = ({ dustbins }) => {
  const [directions, setDirections] = useState(null);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyBszl7IDU_I-hIJBVwSyAxrZXwpt23kyZg",
    libraries,
  });

  const calculateRoute = useCallback(() => {
    if (!window.google) return;

    const filledBins = dustbins.filter((b) => b.filled);
    if (filledBins.length === 0) return;

    // Distance function
    const gmDist = (a, b) => {
      return window.google.maps.geometry.spherical.computeDistanceBetween(
        new window.google.maps.LatLng(a.lat, a.lng),
        new window.google.maps.LatLng(b.lat, b.lng)
      );
    };

    // Nearest neighbour (simple)
    const getOptimizedRoute = (bins) => {
      const unvisited = [...bins];
      const ordered = [];
      let current = truckLocation;

      while (unvisited.length > 0) {
        let nearestIndex = 0;
        let nearestDist = Infinity;

        unvisited.forEach((bin, index) => {
          const dist = gmDist(current, bin);
          if (dist < nearestDist) {
            nearestDist = dist;
            nearestIndex = index;
          }
        });

        const next = unvisited.splice(nearestIndex, 1)[0];
        ordered.push(next);
        current = next;
      }

      return ordered;
    };

    const ordered = getOptimizedRoute(filledBins);

    const directionsService = new window.google.maps.DirectionsService();

    const waypoints = ordered.map((bin) => ({
      location: { lat: bin.lat, lng: bin.lng },
      stopover: true,
    }));

    directionsService.route(
      {
        origin: truckLocation,
        destination: truckLocation,
        waypoints,
        travelMode: window.google.maps.TravelMode.DRIVING,
      },
      (result, status) => {
        if (status === "OK") {
          setDirections(result);
        }
      }
    );
  }, [dustbins]);

  useEffect(() => {
    if (isLoaded) calculateRoute();
  }, [isLoaded, dustbins, calculateRoute]);

  if (!isLoaded) return <div>Loading Map...</div>;

  return (
    <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
      
      {/* Truck Marker */}
      <Marker position={truckLocation} label="Truck" />

      {/* Dustbin Markers */}
      {dustbins.map((bin) => (
        <Marker
          key={bin.id}
          position={{ lat: bin.lat, lng: bin.lng }}
          icon={
            bin.filled
              ? "http://maps.google.com/mapfiles/ms/icons/red-dot.png"
              : "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
          }
        />
      ))}

      {/* Route */}
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
};

export default Map;