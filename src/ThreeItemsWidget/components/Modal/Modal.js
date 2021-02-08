import {createPortal} from 'react-dom'
import React, {useState, memo} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {Paper, Backdrop, Button, TextField, Checkbox, FormControlLabel} from '@material-ui/core';
import t from '../../constants/translations.json';
import { makeStyles } from '@material-ui/core/styles';
import stylesObject from "./styles";
import SelectedItems from "../../views/SelectedItems";
import Selector from "../Selector";
import filterValues from "../../constants/filterValues";

import { FixedSizeList as List, areEqual } from 'react-window';
import memoize from 'memoize-one';
import {isDataEqual} from "../../utils";

const useStyles = makeStyles(stylesObject);

const Modal = ({close, elements, chosenElements, saveElements}) => {
    const {_all_area, _paper, _backDrop, _label, _filters, _item, _scroll_area, _buttons} = useStyles()
    const [filter, setFilter] = useState(t.no_filter)
    const [search, setSearch] = useState('')
    const [updatedElements, setUpdatedElements] = useState(chosenElements)

    const {memoElements} = getElements(elements, search, filter)

    const chooseElement = (item) => {
        if (updatedElements.includes(item)) {
            setUpdatedElements(updatedElements.filter(el => el !== item))
        } else {
            setUpdatedElements([...updatedElements, item])
        }
    }

    const itemData = createItemData(memoElements, updatedElements, chooseElement, _item);

    const save = () => {
        saveElements(updatedElements);
        close()
    }
    //console.log(updatedElements)
    return createPortal(
        <div className={_all_area}>
            <Backdrop open={true} className={_backDrop} onClick={close}/>
            <Paper elevation={3} className={_paper}>
                <div className={_label}>
                    {t.dialog_title}
                    <CloseIcon style={{cursor: 'pointer'}} onClick={close}/>
                </div>
                <div className={_filters}>
                    <TextField id="outlined-basic" label={t.search} variant="outlined" value={search} onChange={e => setSearch(e.target.value)}/>
                    <Selector onSelect={v => setFilter(v)} selected={filter} data={filterValues}/>
                </div>
                <div className={_scroll_area}>
                    <List
                        height={300}
                        itemCount={memoElements.length}
                        itemSize={44}
                        itemData={itemData}
                    >
                        {Row}
                    </List>
                </div>
                <SelectedItems items={updatedElements} updateElements={arr => setUpdatedElements(arr)}/>
                <div className={_buttons}>
                    <Button variant="contained" color="secondary" onClick={close}>{t.cancel}</Button>
                    <Button variant="contained" color="primary" onClick={save} disabled={isDataEqual(updatedElements, chosenElements)}>{t.save}</Button>
                </div>
            </Paper>
        </div>,
        document.getElementById('body')
    )
}

const Row = memo(({data, index, style }) => {
    const {elements, _item, chooseElement, updatedElements} = data;
    const el = elements[index];
    const checked = updatedElements.includes(el);

    return <div style={{...style, display: 'flex', alignItems: 'center', justifyContent: 'flex-start'}}>
        <FormControlLabel
            className={_item}
            control={
                <Checkbox checked={checked}
                          onChange={e => chooseElement(el)}
                          disabled={updatedElements.length === 3 && !checked}
                          color="primary"/>
            }
            label={el}
        />
    </div>
}, areEqual );

const createItemData = memoize((elements, updatedElements, chooseElement, _item) => ({
    elements,
    updatedElements,
    chooseElement,
    _item
}));

const getElements = memoize((elements, search, filter) => ({
        memoElements: elements.filter((v, i) => v.toLowerCase().includes(search.toLowerCase().trim()) && (filter === t.no_filter ? v : (i+1) > +filter.replace(/>/gmi, '')))
    })
)


export default Modal
