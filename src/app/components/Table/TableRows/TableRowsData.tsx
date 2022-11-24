import React, {memo, useState} from 'react';
import {TableCell, TableRow} from "@mui/material";
import s from './../TableGeneral.module.scss'
import {inputDataElementType} from "../../../../store/layer1-reducer";
import {useDispatch} from "react-redux";

type TableRowsType = {
  element: inputDataElementType
}

export const TableRowsData = memo(({element}: TableRowsType) => {
  const [clicked, SetClicked] = useState<boolean>(false)
  const dispatch = useDispatch()
  const highlightElement = () => {
    SetClicked(true)



  }
  const defineStyleClicked = clicked ? {backgroundColor: 'lightsteelblue',}: {backgroundColor: 'lightgray',}
  return (
    <TableRow key={element.id} sx={defineStyleClicked}>
      <TableCell className={s.firstColumn}
                 scope="row"><span>{element.id}</span></TableCell>
      <TableCell scope="row"><span onClick={highlightElement}
                                   onMouseLeave={() => SetClicked(false)}>
        {element.properties.name}</span></TableCell>
      <TableCell scope="row">{element.properties.address}</TableCell>
      <TableCell scope="row">{element.geometry.coordinates[0]}</TableCell>
      <TableCell scope="row">{element.geometry.coordinates[1]}</TableCell>
    </TableRow>);
});
