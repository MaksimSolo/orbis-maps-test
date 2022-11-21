import React, {ChangeEvent, useEffect, useState} from 'react';
import {InputAdornment, TextField, Typography} from "@mui/material";
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import {useDispatch} from "react-redux";
import {AnyAction} from "redux";


type SearchPropsType = {
  action: (value: string) => AnyAction;
  search: string;
};


export const Search = ({action, search}: SearchPropsType) => {

  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState<string>(search);

  const onChangeTextSearch = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value);
  };
  useEffect(() => {
    dispatch(action(searchValue));
  }, [action, searchValue, dispatch]);

  return (
    <div style={{marginTop: '10px'}}>
      <Typography component="p">Search</Typography>
      <TextField
        fullWidth
        placeholder='Search by column "name"'
        type="search"
        color="primary"
        variant="outlined"
        value={searchValue}
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

