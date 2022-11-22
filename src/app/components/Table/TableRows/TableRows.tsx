import React, {memo} from 'react';
import {TableCell, TableRow} from "@mui/material";
import s from './../TableGeneral.module.scss'
import {inputDataElementType} from "../../../../store/layer1-reducer";

type TableRowsType = {
  element: inputDataElementType
}

export const TableRows = memo(({element}: TableRowsType) => {
  return (
    <TableRow key={element.id} sx={{backgroundColor: 'lightgray',}}>
      <TableCell className={s.firstColumn}
                 scope="row"><span>{element.id}</span></TableCell>
      <TableCell scope="row">{element.properties.name}</TableCell>
      <TableCell scope="row">{element.properties.address}</TableCell>
      <TableCell scope="row">{element.geometry.coordinates[0]}</TableCell>
      <TableCell scope="row">{element.geometry.coordinates[1]}</TableCell>
    </TableRow>);
});
