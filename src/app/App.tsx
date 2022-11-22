import React, {useEffect} from 'react';
import {Header} from "./components/Header/Header";
import {MapComponent} from "./components/MapComponent/MapComponent";

import {Search} from "./components/Search/Search";
import {TableGeneral} from "./components/Table/TableGeneral";
import {inputData, setInitialStateAC, setSearchedDataAC} from "../store/layer1-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";


function App() {
  const dispatch = useDispatch()
  const search = useSelector<AppRootStateType, string>(state => state.layer1.search)

  useEffect(() => {
    dispatch(setInitialStateAC(inputData))
  }, [])

  return (
    <>
      <Header/>
      <MapComponent/>
      <Search action={setSearchedDataAC} search={search}/>
      <TableGeneral search={search}/>
    </>
  )
    ;
}

export default App;
