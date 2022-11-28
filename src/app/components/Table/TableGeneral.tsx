import React, {memo, useMemo, useState} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {inputDataElementType} from "../../../store/layer1-reducer";
import {TableRowsData} from "./TableRows/TableRowsData";
import {useSelector} from "react-redux";
import {AppRootStateType} from "../../../store/store";

const TABLE_COLUMNS_NAMES = ['ID', 'Name', 'Address', 'Latitude', 'Longitude']

type TableGeneralType = {
  geoData: inputDataElementType[]
}

export const TableGeneral = memo(({geoData,}: TableGeneralType) => {

  const currentPointId = useSelector<AppRootStateType, string>(state => state.layer1.currentPointId)

  const columnsNames = useMemo(() => TABLE_COLUMNS_NAMES.map((n, index) =>
    <TableCell key={index}
               sx={{
                 backgroundColor: 'gray',
                 color: 'beige'
               }}>{n}
    </TableCell>), [])

  const tableRowsForRender = geoData.length ? geoData.map(el =>
    <TableRowsData key={el.id} element={el} currentPointId={currentPointId}/>) : <TableRow>
    <TableCell>Points not found</TableCell>
  </TableRow>;

  return (
    <TableContainer component={Paper} sx={{marginTop: '10px',height: '40vh'}}>
      <Table stickyHeader aria-label="caption table">
        <TableHead>
          <TableRow>
            {columnsNames}
          </TableRow>
        </TableHead>
        <TableBody>
          {tableRowsForRender}
        </TableBody>
      </Table>
    </TableContainer>
  );
})
