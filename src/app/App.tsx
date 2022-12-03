import React, {useEffect} from 'react';
import {Header} from "./components/Header/Header";
import {MapComponent} from "./components/MapComponent/MapComponent";
import inputLayer1Data from '../assets/geojson/layer1-places.json'
import inputLayer2Data from '../assets/geojson/layer2-places.json'

import {Search} from "./components/Search/Search";
import {TableGeneral} from "./components/Table/TableGeneral";
import {inputDataElementType, LayerType, setInitialStateAC, setSearchedDataAC} from "../store/layer1-reducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "../store/store";


function App() {

  const dispatch = useDispatch()
  const layer = useSelector<AppRootStateType, LayerType>(state => state.layer1.layer)

  const search = useSelector<AppRootStateType, string>(state => state.layer1.search)
  const geoData = useSelector<AppRootStateType, inputDataElementType[]>(state =>
    !search ? state.layer1.inputData : state.layer1.filteredData)

  useEffect(() => {
    const definedDataSource = layer === 'layer1' ? inputLayer1Data : inputLayer2Data
    dispatch(setInitialStateAC(definedDataSource as inputDataElementType[]))
  }, [layer, dispatch])


  return (
    <>
      <Header layer={layer}/>
      <MapComponent geoData={geoData}/>
      <Search action={setSearchedDataAC} search={search}/>
      <TableGeneral geoData={geoData}/>
    </>
  )
    ;
}

export default App;
