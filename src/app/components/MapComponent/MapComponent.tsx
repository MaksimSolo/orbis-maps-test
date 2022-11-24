import React, {memo} from 'react';
import L from 'leaflet';
import {MapContainer, TileLayer} from "react-leaflet";
import s from './MapComponent.module.scss'
import {inputDataElementType} from "../../../store/layer1-reducer";
import {GeoJsonLayer} from "./GeoJsonLayer/GeoJsonLayer";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.9.3/dist/images/";

const CENTER: L.LatLngExpression = [38.902708, -77.018728];

type MapComponentType = {
  geoData: inputDataElementType[]
}
export const MapComponent = memo(({geoData}: MapComponentType) => {



  return (
    <main>
      <MapContainer className={s.map} zoom={12} center={CENTER} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJsonLayer geoData={geoData}/>
      </MapContainer>
    </main>
  );
});
