import React, {useEffect, useState} from 'react';
import stylesObject from './styles';
import {Button} from "@material-ui/core";
import t from './constants/translations.json';
import {makeStyles} from "@material-ui/core/styles";
import {makeItemArr} from "./utils";
import Modal from "./components/Modal";
import SelectedItems from "./views/SelectedItems";
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';

const useStyles = makeStyles(stylesObject);
const LS_CHOSEN_ELEMENTS = 'chosenElements';

export default function ThreeItemsWidget()  {
    const {_container, _button_area} = useStyles()
    const [ready, setReady] = useState(false)
    const [chosenElements, setChosenElements ] = useState([])
    const [elements, setElements ] = useState([])
    const [openModal, setOpenModal ] = useState(false)

    useEffect(() => {
        let elementsFromLS = localStorage.getItem(LS_CHOSEN_ELEMENTS);
        if (elementsFromLS !== null) {
            //console.log('PARSE')
            setChosenElements(JSON.parse(elementsFromLS))
        }
        setReady(true)
        const elements = makeItemArr(1000, i => `Item ${i+1}`);
        setElements(elements)

        //console.log('mount')
    },[])

    const updateElements = (arr) => {
        setChosenElements(arr);
        localStorage.setItem(LS_CHOSEN_ELEMENTS, JSON.stringify(arr));
    }

    return !ready ? null : (
        <div className={_container}>
            <SelectedItems items={chosenElements} main={'main'} updateElements={updateElements}/>
            <div className={_button_area}>
                <Button variant="contained" color="primary" onClick={() => setOpenModal(!openModal)}>
                    {t.change}
                </Button>
                {
                    chosenElements.length === 0 ? null :
                        <SentimentVerySatisfiedIcon/>
                }
            </div>

            {
                !openModal ? null :
                    <Modal close={() => setOpenModal(!openModal)}
                           elements={elements}
                           chosenElements={chosenElements}
                           saveElements={updateElements}
                    />
            }
        </div>
    )
};
