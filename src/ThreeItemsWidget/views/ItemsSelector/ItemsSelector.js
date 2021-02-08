import React, {useState} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {Button, TextField} from '@material-ui/core';
import t from '../../constants/translations.json';
import { makeStyles } from '@material-ui/core/styles';
import stylesObject from "./styles";
import SelectedItems from "../../views/SelectedItems";
import Selector from "../../components/Selector";
import filterValues from "../../constants/filterValues";
import ItemsList from "./ItemsList";
import {isDataEqual} from "../../utils";

const useStyles = makeStyles(stylesObject);

const ItemsSelector = ({close, elements, chosenElements, saveElements}) => {
    const { _label, _filters, _item, _scroll_area, _buttons} = useStyles()
    const [filter, setFilter] = useState(t.no_filter)
    const [search, setSearch] = useState('')
    const [updatedElements, setUpdatedElements] = useState(chosenElements)

    const save = () => {
        saveElements(updatedElements);
        close()
    }

    return (
        <>
            <div className={_label}>
                {t.dialog_title}
                <CloseIcon style={{cursor: 'pointer'}} onClick={close}/>
            </div>
            <div className={_filters}>
                <TextField id="outlined-basic" label={t.search} variant="outlined" value={search} onChange={e => setSearch(e.target.value)}/>
                <Selector onSelect={v => setFilter(v)} selected={filter} data={filterValues}/>
            </div>
            <div className={_scroll_area}>
                <ItemsList elements={elements}
                           search={search}
                           filter={filter}
                           updatedElements={updatedElements}
                           setUpdatedElements={setUpdatedElements}
                           _item={_item}
                />
            </div>
            <SelectedItems items={updatedElements} updateElements={arr => setUpdatedElements(arr)}/>
            <div className={_buttons}>
                <Button variant="contained" color="secondary" onClick={close}>{t.cancel}</Button>
                <Button variant="contained" color="primary" onClick={save} disabled={isDataEqual(updatedElements, chosenElements)}>{t.save}</Button>
            </div>
        </>
    )
}

export default ItemsSelector
