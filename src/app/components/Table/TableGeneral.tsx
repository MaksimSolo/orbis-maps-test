import React, {memo, useMemo} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useSelector} from "react-redux";
import {inputDataElementType} from "../../../store/layer1-reducer";
import {AppRootStateType} from "../../../store/store";

const TABLE_COLUMNS_NAMES = ['ID', 'Name', 'Address', 'Latitude', 'Longitude']


export const TableGeneral: React.FC = memo(() => {

  const tableRowElem = useSelector<AppRootStateType, inputDataElementType[]>(state => state.layer1.map(el => el))
  const columnsNames = useMemo(() => TABLE_COLUMNS_NAMES.map((n, index) => <TableCell key={index}>
    {n}
  </TableCell>), [])
  const tableRowsForRender = useMemo(() => tableRowElem && tableRowElem.map(el =>
      <TableRow key={el.id}>
        <TableCell component="th" scope="row">{el.id}</TableCell>
        <TableCell component="th" scope="row">{el.properties.name}</TableCell>
        <TableCell component="th" scope="row">{el.properties.address}</TableCell>
        <TableCell component="th" scope="row">{el.geometry.coordinates[0]}</TableCell>
        <TableCell component="th" scope="row">{el.geometry.coordinates[1]}</TableCell>
      </TableRow>),
    [tableRowElem]
  )

  return (
    <TableContainer component={Paper}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            {columnsNames}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowsForRender ||
              <TableRow>
                  <TableCell>Cards not found</TableCell>
              </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
