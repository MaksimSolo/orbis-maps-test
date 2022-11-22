import React, {memo, useMemo} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {useSelector} from "react-redux";
import {inputDataElementType} from "../../../store/layer1-reducer";
import {AppRootStateType} from "../../../store/store";
import {TableRows} from "./TableRows/TableRows";

const TABLE_COLUMNS_NAMES = ['ID', 'Name', 'Address', 'Latitude', 'Longitude']

type TableGeneralType = {
  search: string
}

export const TableGeneral = memo(({search}: TableGeneralType) => {

  const tableRowElem = useSelector<AppRootStateType, inputDataElementType[]>(state =>
    !search ? state.layer1.inputData : state.layer1.filteredData)
  const columnsNames = useMemo(() => TABLE_COLUMNS_NAMES.map((n, index) =>
    <TableCell key={index}
               sx={{
                 backgroundColor: 'gray',
                 color: 'beige'
               }}>{n}
    </TableCell>), [])
  const tableRowsForRender = useMemo(() => tableRowElem.length ? tableRowElem.map(el =>
      <TableRows key={el.id} element={el}/>) : <TableRow>
      <TableCell>Points not found</TableCell>
    </TableRow>,
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
          {tableRowsForRender}
        </TableBody>
      </Table>
    </TableContainer>
  );
});
