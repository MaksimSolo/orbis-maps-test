import React from 'react';
import {Header} from "./components/Header/Header";
import {MapComponent} from "./components/MapComponent/MapComponent";

import {Search} from "./components/Search/Search";
import {TableGeneral} from "./components/Table/TableGeneral";


function App() {
  return (
    <>
      <Header/>
      <MapComponent/>
      {/*<Search action={setNameSearchAC} search={searchByName} />*/}
      <TableGeneral/>
    </>
  )
    ;
}

export default App;
