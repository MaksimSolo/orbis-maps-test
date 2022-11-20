import React from 'react';
import L from 'leaflet';
import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import s from './MapComponent.module.scss'

 L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.9.3/dist/images/";

const state = {
  lat: 55.702868,
  lng: 37.530865,
  zoom: 10
};
export const MapComponent: React.FC = () => {

  let center: L.LatLngExpression = [state.lat, state.lng];
  return (
    <main>
      <MapContainer className={s.map} zoom={state.zoom} center={center} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <Marker position={center}>
          <Popup>Какой то крутой текст!!!</Popup>
        </Marker>
      </MapContainer>
    </main>
  );
};
