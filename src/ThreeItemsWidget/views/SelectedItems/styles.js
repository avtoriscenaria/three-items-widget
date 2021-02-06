import sizes from "../../constants/sizes";

const {itemHeight} = sizes

const stylesObject = (theme) => ({
    _selected_items: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start'
    },
    _label: {
        textAlign: 'left',
        fontSize: 18,
        paddingBottom: 10
    },
    _items_row: {
        minHeight: itemHeight,
        display: 'flex',
        justifyContent: 'flex-start'
    },
    _item: {
        marginRight: 10,
        height: itemHeight
    }
});

export default stylesObject
