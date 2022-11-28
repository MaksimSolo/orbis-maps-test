import React, {memo} from 'react';
import L from 'leaflet';
import {MapContainer, TileLayer} from "react-leaflet";
import s from './MapComponent.module.scss'
import {inputDataElementType, MapParamsType} from "../../../store/layer1-reducer";
import {GeoJsonLayer} from "./GeoJsonLayer/GeoJsonLayer";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";
import {ShowCurrentPoint} from "./ShowCurrentPoint/ShowCurrentPoint";

L.Icon.Default.imagePath = "https://unpkg.com/leaflet@1.9.3/dist/images/";

type MapComponentType = {
  geoData: inputDataElementType[]
}
export const MapComponent = ({geoData,}: MapComponentType) => {
  console.log('MapComponent')

  const defaultMapParams = useSelector<AppRootStateType, MapParamsType>(state => state.layer1.defaultMapParams)
  const currentMapParams = useSelector<AppRootStateType, MapParamsType>(state => state.layer1.currentMapParams)
  const currentPointId = useSelector<AppRootStateType, string>(state => state.layer1.currentPointId)

  console.log(currentMapParams)
  return (
    <section>
      <MapContainer className={s.map}
                    zoom={defaultMapParams.zoom}
                    center={defaultMapParams.center}
                    scrollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {currentMapParams.center.length && <ShowCurrentPoint currentMapParams={currentMapParams}/>}
          <GeoJsonLayer geoData={geoData}/>
      </MapContainer>
    </section>
  );
};
