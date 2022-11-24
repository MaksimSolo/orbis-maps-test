import React from 'react';
import {inputDataElementType} from "../../../../store/layer1-reducer";
import {FeatureGroup} from "react-leaflet";
import {Points} from "./Points/Points";

type GeoJsonLayerType = {
  geoData: inputDataElementType[]
}

export const GeoJsonLayer = ({geoData}: GeoJsonLayerType) => {

  const points = geoData && geoData.map(el=> <Points key={el.id} data={el}/>)

  return (
    <FeatureGroup>
      {points}
    </FeatureGroup>
  );
};

