import React from 'react';
import {inputDataElementType} from "../../../../../store/layer1-reducer";
import {Marker, Popup} from "react-leaflet";

type PointsType = {
  data: inputDataElementType
}

export const Points = ({data}: PointsType) => {
  return (
    <Marker position={data.geometry.coordinates}>
      <Popup>
        <div>
          <h2><strong>{data.properties.name}</strong></h2>
          <span>{data.properties.address}</span>
          <span>{data.properties.note && data.properties.note}</span>
        </div>
      </Popup>
    </Marker>
  );
};
