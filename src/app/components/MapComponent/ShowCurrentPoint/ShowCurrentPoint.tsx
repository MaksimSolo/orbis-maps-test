import {useEffect} from 'react';
import {inputDataElementType, MapParamsType} from "../../../../store/layer1-reducer";
import {useMap} from "react-leaflet";
import L from "leaflet";


type ShowCurrentPointType = {
  geoData: inputDataElementType[]
  defaultMapParams: MapParamsType
  currentPointId: string
}

export const ShowCurrentPoint = ({geoData, currentPointId, defaultMapParams}: ShowCurrentPointType) => {
  console.log('ShowCurrentPoint')

  const data = geoData.filter(el => el.id === currentPointId)
  const map = useMap()
  const popup = L.popup({
    content: `<div>
      <h2><strong>${data[0].properties.name}</strong></h2>
      <span>${data[0].properties.address}</span>
      <span>${data[0].properties.note || ''}</span>
    </div>`,
  })
  const marker = L.marker(data[0].geometry.coordinates).addTo(map).bindPopup(popup).openPopup();

  useEffect(() => {
    map.flyTo(L.latLng(data[0].geometry.coordinates), 17, {animate: true,},)

    return () => {
      marker.remove()
      map.flyTo(L.latLng(defaultMapParams.center), defaultMapParams.zoom, {animate: true,},)
    }
  })

  return null
};

