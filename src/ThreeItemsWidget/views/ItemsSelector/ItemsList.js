import React, {memo} from "react";
import {Checkbox, FormControlLabel} from "@material-ui/core";
import {areEqual, FixedSizeList as List} from "react-window";
import {createItemData, getElements} from "./memo";

const ItemsList = ({elements, search, filter, updatedElements, setUpdatedElements, _item}) => {

    const {memoElements} = getElements(elements, search, filter)

    const chooseElement = (item) => {
        if (updatedElements.includes(item)) {
            setUpdatedElements(updatedElements.filter(el => el !== item))
        } else {
            setUpdatedElements([...updatedElements, item])
        }
    }

    const itemData = createItemData(memoElements, updatedElements, chooseElement, _item);

    return (
        <List
            height={300}
            itemCount={memoElements.length}
            itemSize={44}
            itemData={itemData}
        >
            {Row}
        </List>
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

export default ItemsList
