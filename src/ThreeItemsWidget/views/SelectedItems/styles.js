const stylesObject = (theme) => ({
    _selected_items: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        paddingBottom: 16
    },
    _label: {
        textAlign: 'left',
        fontSize: 18,
        paddingBottom: 10
    },
    _items_row: {
        minHeight: 32,
        display: 'flex',
        justifyContent: 'flex-start',
    },
    _item: {
        backgroundColor: '#ececec',
        marginRight: 10,
        height: 32,
        width: 180,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 4,
        '& > svg': {
            cursor: 'pointer',
            '&:hover': {
                opacity: 0.6
            }
        },
        '&:last-child': {
            marginRight: 0
        }
    }
});

export default stylesObject
