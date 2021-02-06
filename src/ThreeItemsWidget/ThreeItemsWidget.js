import React, {useEffect, useState} from 'react';
import stylesObject from './styles';
import {Button} from "@material-ui/core";
import t from './constants/translations.json';
import {makeStyles} from "@material-ui/core/styles";
import {makeItemArr} from "./utils";
import Modal from "./components/Modal";
import SelectedItems from "./views/SelectedItems";

const useStyles = makeStyles(stylesObject);

export default function ThreeItemsWidget()  {
    const {_container} = useStyles()
    const [chosenElements, setChosenElements ] = useState([])
    const [elements, setElements ] = useState([])
    const [openModal, setOpenModal ] = useState(false)

    useEffect(() => {
        const elements = makeItemArr(1000, i => `Item ${i+1}`);
        setElements(elements)

        console.log('mount', )
    },[])

    return (
        <div className={_container}>
            <SelectedItems />
            <div className={''}>
                <Button variant="contained" color="primary" onClick={() => setOpenModal(!openModal)}>
                    {t.change}
                </Button>
            </div>
            {
                !openModal ? null :
                    <Modal close={() => setOpenModal(!openModal)}
                    />
            }
        </div>
    )
};
