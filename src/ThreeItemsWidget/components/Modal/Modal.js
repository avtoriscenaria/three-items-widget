import {createPortal} from 'react-dom'
import React from 'react';
import {Paper, Backdrop, Button, TextField, FormControl, InputLabel, Select, MenuItem} from '@material-ui/core';
import t from '../../constants/translations.json';
import { makeStyles } from '@material-ui/core/styles';
import stylesObject from "./styles";
import SelectedItems from "../../views/SelectedItems";

const useStyles = makeStyles(stylesObject);

const Modal = ({close}) => {
    const {_all_area, _paper, _backDrop, _label, _filters, _scroll_area, _buttons} = useStyles()

    return createPortal(
        <div className={_all_area}>
            <Backdrop open={true} className={_backDrop} onClick={close}/>
            <Paper elevation={3} className={_paper}>
                <div className={_label}>{t.dialog_title}</div>
                <div className={_filters}>
                    <TextField id="outlined-basic" label={t.search} variant="outlined" />
                    <FormControl variant="outlined" className={''}>
                        <InputLabel id="demo-simple-select-outlined-label">{t.no_filter}</InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={10}
                            onChange={() => {}}
                            label="Age"
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>{t.no_filter}</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className={_scroll_area}>

                </div>
                <SelectedItems/>
                <div className={_buttons}>
                    <Button variant="contained" color="secondary">{t.cancel}</Button>
                    <Button variant="contained" color="primary">{t.save}</Button>
                </div>
            </Paper>
        </div>,
        document.getElementById('body')
    )
}

export default Modal
