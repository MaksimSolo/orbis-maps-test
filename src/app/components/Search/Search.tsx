import React, {ChangeEvent, useEffect, useState} from 'react';
import {IconButton, InputAdornment, TextField, Typography} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import {useDispatch, useSelector} from "react-redux";
import {
  Layer1ReducerActionsType,
  MapParamsType,
  setCurrentPointIdAC,
  toggleViewMarkerDataAC
} from "../../../store/layer1-reducer";
import s from './Search.module.scss'
import {AppRootStateType} from "../../../store/store";


type SearchPropsType = {
  action: (value: string) => Layer1ReducerActionsType;
  search: string;
};


export const Search = ({action, search}: SearchPropsType) => {

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>(search);
  const defaultMapParams = useSelector<AppRootStateType, MapParamsType>(state => state.layer1.defaultMapParams)

  const onChangeTextSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };
  const clearSearch = () => {
    setSearchValue("")
    dispatch(toggleViewMarkerDataAC(defaultMapParams))
    dispatch(setCurrentPointIdAC(''))
  }
  useEffect(() => {
    dispatch(action(searchValue.trim()));
  }, [searchValue, dispatch, action]);

  return (
    <div className={s.search}>
      <Typography component="p">Search by Name</Typography>
      <TextField
        fullWidth
        placeholder='Enter text for searching...'
        type="text"
        color="primary"
        variant="outlined"
        value={search}
        onChange={onChangeTextSearch}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchOutlinedIcon/>
            </InputAdornment>
          ),
          endAdornment: (
            <IconButton onClick={clearSearch}>
              {searchValue.length > 0 ? <ClearOutlinedIcon color="primary"/> : ''}
            </IconButton>
          )
        }}
      />
    </div>
  );
};

