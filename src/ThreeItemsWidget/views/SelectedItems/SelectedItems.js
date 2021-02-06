import React, {useEffect, useState} from 'react';
import stylesObject from './styles';
import {Button} from "@material-ui/core";
import t from '../../constants/translations.json';
import {makeStyles} from "@material-ui/core/styles";
import {makeItemArr} from "../../utils";

const useStyles = makeStyles(stylesObject);

export default function SelectedItems()  {
    const {_selected_items, _label, _items_row, _item} = useStyles()
    const [chosenElements, setChosenElements ] = useState([])
    const [elements, setElements ] = useState([])

    useEffect(() => {
        const elements = makeItemArr(1000, i => `Item ${i+1}`);
        setElements(elements)

        console.log('mount', )
    },[])

    return (
        <div className={_selected_items}>
            <div className={_label}>{t.selected_items}</div>
            <div className={_items_row}>
                {
                    chosenElements.map(el => <div key={`${el}`} className={_item}>{el}</div>)
                }
            </div>
        </div>
    )
};
