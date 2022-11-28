import React from 'react';
import {inputDataElementType} from "../../../../store/layer1-reducer";
import {FeatureGroup} from "react-leaflet";
import {Point} from "./Points/Point";

type GeoJsonLayerType = {
  geoData: inputDataElementType[]
}

export const GeoJsonLayer = ({geoData}: GeoJsonLayerType) => {
  console.log('GeoJsonLayer')
  const points = geoData && geoData.map(el=> <Point key={el.id} data={el}/>)

  return (
    <FeatureGroup>
      {points}
    </FeatureGroup>
  );
};

