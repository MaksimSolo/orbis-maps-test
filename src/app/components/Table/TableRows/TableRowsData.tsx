import React from 'react';
import {TableCell, TableRow} from "@mui/material";
import s from './../TableGeneral.module.scss'
import {inputDataElementType, setCurrentPointIdAC} from "../../../../store/layer1-reducer";
import {useDispatch,} from "react-redux";


type TableRowsType = {
  element: inputDataElementType
  currentPointId: string
  clicked: boolean
  setClicked: (value: boolean) => void
}


export const TableRowsData = ({element, currentPointId, setClicked, clicked}: TableRowsType) => {

  const dispatch = useDispatch()

  const toggleViewMarkerData = () => {
    if (element.id) {
      setClicked(true)
      dispatch(setCurrentPointIdAC(element.id))
      if (element.id === currentPointId && clicked) {
        setClicked(false)
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
