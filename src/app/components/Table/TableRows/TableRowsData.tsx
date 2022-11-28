import React, {memo, useEffect, useState} from 'react';
import {TableCell, TableRow} from "@mui/material";
import s from './../TableGeneral.module.scss'
import {
  inputDataElementType,
  MapParamsType,
  setCurrentPointIdAC,
  toggleViewMarkerDataAC
} from "../../../../store/layer1-reducer";
import {useDispatch, useSelector,} from "react-redux";
import {LatLngTuple} from "leaflet";
import {AppRootStateType} from "../../../../store/store";


type TableRowsType = {
  element: inputDataElementType
  currentPointId: string
  clicked: boolean
  setClicked: (value: boolean) => void
}


export const TableRowsData = ({element, currentPointId, setClicked, clicked}: TableRowsType) => {

  const dispatch = useDispatch()
  const currentMapParams = {center: element.geometry.coordinates, zoom: 17}
  const defaultMapParams = useSelector<AppRootStateType, MapParamsType>(state => state.layer1.defaultMapParams)


  const toggleViewMarkerData = () => {
    if (element.id) {
      setClicked(true)
      dispatch(toggleViewMarkerDataAC(currentMapParams))
      dispatch(setCurrentPointIdAC(element.id))
      if (element.id === currentPointId && clicked) {
        setClicked(false)
        dispatch(toggleViewMarkerDataAC(defaultMapParams))
        dispatch(setCurrentPointIdAC(''))
      }
    }
  }

  const defineStyleClicked = () => element.id === currentPointId ?
    {backgroundColor: 'lightsteelblue',} : {backgroundColor: 'lightgray',}

  return (
    <TableRow key={element.id} sx={defineStyleClicked}>
      <TableCell className={s.firstColumn}
                 scope="row"><span>{element.id}</span></TableCell>
      <TableCell className={s.nameSpan} scope="row"><span onClick={toggleViewMarkerData}>
        {element.properties.name}</span></TableCell>
      <TableCell scope="row">{element.properties.address}</TableCell>
      <TableCell scope="row">{element.geometry.coordinates[0]}</TableCell>
      <TableCell scope="row">{element.geometry.coordinates[1]}</TableCell>
    </TableRow>);
}
