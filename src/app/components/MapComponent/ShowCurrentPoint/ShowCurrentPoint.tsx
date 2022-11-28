import React, {useEffect} from 'react';
import {MapParamsType} from "../../../../store/layer1-reducer";
import {useMap} from "react-leaflet";
import L from "leaflet";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../../store/store";


type ShowCurrentPointType = {
  currentMapParams: MapParamsType
}

export const ShowCurrentPoint = ({currentMapParams}: ShowCurrentPointType) => {
  console.log('ShowCurrentPoint')
  const defaultMapParams = useSelector<AppRootStateType, MapParamsType>(state => state.layer1.defaultMapParams)
  const map = useMap()
  const popup = L.popup({
    content: `<div>
      <h2><strong>{"data.properties.name"}</strong></h2>
      <span>{'data.properties.address'}</span>
      <span>{'data.properties.note && data.properties.note'}</span>
    </div>`,
  })
  const marker = currentMapParams.center.length && L.marker(currentMapParams.center,).addTo(map).bindPopup(popup).openPopup();


  useEffect(() => {
    currentMapParams.center.length && map.flyTo(L.latLng(currentMapParams.center[0], currentMapParams.center[1]), currentMapParams.zoom, {animate: true,},)
    if (currentMapParams.center[0] === defaultMapParams.center[0]) {marker.closePopup()}
    return () => {
      // marker.closePopup()
      marker.remove()
      // map.remove()
    }
  }, [currentMapParams])

  return null
};

