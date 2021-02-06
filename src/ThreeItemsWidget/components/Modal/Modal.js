import {createPortal} from 'react-dom'
import React from 'react';
import {Paper, Backdrop} from '@material-ui/core';
import t from '../../constants/translations.json';
import { makeStyles } from '@material-ui/core/styles';
import stylesObject from "./styles";

const useStyles = makeStyles(stylesObject);

const Modal = ({close}) => {
    const {_paper, _backDrop, _label, _filters, _scroll_area} = useStyles()

    return createPortal(
        <Backdrop open={true} className={_backDrop} onClick={close}>
            <Paper elevation={3} className={_paper}>
                <div className={_label}>{t.dialog_title}</div>
                <div className={_filters}>

                </div>
                <div className={_scroll_area}>

                </div>
            </Paper>
        </Backdrop>,
        document.getElementById('body')
    )
}

export default Modal
