import React, {memo, useMemo} from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {inputDataElementType} from "../../../store/layer1-reducer";
import {TableRowsData} from "./TableRows/TableRowsData";

const TABLE_COLUMNS_NAMES = ['ID', 'Name', 'Address', 'Latitude', 'Longitude']

type TableGeneralType = {
  geoData: inputDataElementType[]
}

export const TableGeneral = memo(({geoData}: TableGeneralType) => {

  const columnsNames = useMemo(() => TABLE_COLUMNS_NAMES.map((n, index) =>
    <TableCell key={index}
               sx={{
                 backgroundColor: 'gray',
                 color: 'beige'
               }}>{n}
    </TableCell>), [])

  const tableRowsForRender = useMemo(() => geoData.length ? geoData.map(el =>
      <TableRowsData key={el.id} element={el}/>) : <TableRow>
      <TableCell>Points not found</TableCell>
    </TableRow>,
    [geoData]
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
