import {createPortal} from 'react-dom'
import React from 'react';
import {Paper, Backdrop} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import stylesObject from "./styles";

const useStyles = makeStyles(stylesObject);

const Modal = ({close, children}) => {
    const {_all_area, _paper, _backDrop} = useStyles()

    return createPortal(
        <div className={_all_area}>
            <Backdrop open={true} className={_backDrop} onClick={close}/>
            <Paper elevation={3} className={_paper}>
                {children}
            </Paper>
        </div>,
        document.getElementById('body')
    )
}
export default Modal
