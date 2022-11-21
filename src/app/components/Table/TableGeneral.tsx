import React, {memo, useMemo} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useSelector} from "react-redux";
import {inputDataElementType} from "../../../store/layer1-reducer";
import {AppRootStateType} from "../../../store/store";
import s from './TableGeneral.module.scss'

const TABLE_COLUMNS_NAMES = ['ID', 'Name', 'Address', 'Latitude', 'Longitude']


export const TableGeneral: React.FC = memo(() => {

  const tableRowElem = useSelector<AppRootStateType, inputDataElementType[]>(state => state.layer1.inputData.map(el => el))
  const columnsNames = useMemo(() => TABLE_COLUMNS_NAMES.map((n, index) =>
    <TableCell key={index}
               sx={{
                 backgroundColor: 'gray',
                 color: 'beige'
               }}>{n}
    </TableCell>), [])
  const tableRowsForRender = useMemo(() => tableRowElem && tableRowElem.map(el =>
      <TableRow key={el.id} sx={{backgroundColor: 'lightgray',}}>
        <TableCell className={s.firstColumn}
                   scope="row"><span>{el.id}</span></TableCell>
        <TableCell scope="row">{el.properties.name}</TableCell>
        <TableCell scope="row">{el.properties.address}</TableCell>
        <TableCell scope="row">{el.geometry.coordinates[0]}</TableCell>
        <TableCell scope="row">{el.geometry.coordinates[1]}</TableCell>
      </TableRow>),
    [tableRowElem]
  )

  return (
    <TableContainer component={Paper} sx={{marginTop: '10px'}}>
      <Table aria-label="caption table">
        <TableHead>
          <TableRow>
            {columnsNames}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowsForRender ||
              <TableRow>
                  <TableCell>Points not found</TableCell>
              </TableRow>}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
