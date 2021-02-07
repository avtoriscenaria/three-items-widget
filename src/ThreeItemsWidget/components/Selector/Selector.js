import React, {useState} from 'react';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import t from '../../constants/translations.json';
import { makeStyles } from '@material-ui/core/styles';
import stylesObject from "./styles";

const useStyles = makeStyles(stylesObject);

const Selector = ({onSelect, selected, data}) => {
    const {_filter} = useStyles()
    //const [filter, setFilter] = useState()

    return (
        <FormControl variant="outlined" className={_filter}>
            <Select
                className={''}
                labelId="filter"
                id="demo-simple-select-outlined"
                value={selected}
                onChange={e => onSelect(e.target.value)}
            >
                {
                    data.map(v => (
                        <MenuItem key={v} value={v}>
                            {v === t.no_filter ? <em style={{opacity: 0.5}}>{v}</em> : v}
                        </MenuItem>
                        )
                    )
                }
            </Select>
        </FormControl>
    )
}

export default Selector
