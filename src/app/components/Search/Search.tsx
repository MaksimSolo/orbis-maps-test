import React, {ChangeEvent, useEffect, useState} from 'react';
import {InputAdornment, TextField, Typography} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useDispatch} from "react-redux";
import {Layer1ReducerActionsType} from "../../../store/layer1-reducer";
import s from './Search.module.scss'


type SearchPropsType = {
  action: (value: string) => Layer1ReducerActionsType;
  search: string;
};


export const Search = ({action, search}: SearchPropsType) => {

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>(search);

  const onChangeTextSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    dispatch(action(searchValue.trim()));
  }, [searchValue, dispatch, action]);

  return (
    <div className={s.search}>
      <Typography component="p">Search by Name</Typography>
      <TextField
        fullWidth
        placeholder='Enter text for searching...'
        type="search"
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
        }}
      />
    </div>
  );
};

