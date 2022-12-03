import React, {useState} from 'react';
import s from './Header.module.scss'
import {useDispatch} from "react-redux";
import {LayerType, setCurrentPointIdAC, setLayerAC} from "../../../store/layer1-reducer";

type HeaderType = {
  layer: LayerType
}


export const Header = ({layer}: HeaderType) => {

  const [demoMode, setDemoMode] = useState<boolean>(false)
  const dispatch = useDispatch();

  const definedDemoMode = demoMode ? 'Stop Demo' : 'Start Demo'
  const changeDemoMode = () => {
    setDemoMode(!demoMode)
  }
  const definedLayerButtonStyle = (value: LayerType) => {
    return `${s.button} ${value === layer ? s.active : ''}`
  }

  const changeLayer = (e: React.FormEvent<HTMLButtonElement>) => {
    dispatch(setLayerAC(e.currentTarget.value as LayerType))
    dispatch(setCurrentPointIdAC(''))

  }
  return (
    <header className={s.header}>
      <div>
        <button className={definedLayerButtonStyle('layer1')} value={'layer1'} onClick={changeLayer}>layer1</button>
        <button className={definedLayerButtonStyle('layer2')} value={'layer2'} onClick={changeLayer}>layer2</button>
      </div>
      <span>ORBIS-MAPS-test</span>
      <button className={s.button} onClick={changeDemoMode}>
        {definedDemoMode}
      </button>
    </header>
  );
};
