import React, {useEffect, useState} from 'react';
import stylesObject from './styles';
import t from '../../constants/translations.json';
import {makeStyles} from "@material-ui/core/styles";
import CloseIcon from '@material-ui/icons/Close';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';

const useStyles = makeStyles(stylesObject);

export default function SelectedItems({items = [], main, updateElements})  {
    const {_selected_items, _label, _items_row, _item} = useStyles()
    const [chosenElements, setChosenElements ] = useState(items)

    useEffect(() => {
       //console.log('update items', items, main)
        setChosenElements(items)
    },[items])

    const deleteItem = (element) => {
        updateElements(chosenElements.filter(el => el !== element))
    };

    return (
        <div className={_selected_items}>
            <div className={_label}>{t.selected_items}</div>
            <div className={_items_row}>
                {
                    chosenElements.length === 0 ? <SentimentVeryDissatisfiedIcon/> :
                    chosenElements.map(el => (
                        <div key={`${el}`} className={_item}>
                            {el}
                            <CloseIcon
                                //style={{cursor: 'pointer'}}
                                onClick={() => deleteItem(el)}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
};
