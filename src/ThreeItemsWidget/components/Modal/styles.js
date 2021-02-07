const stylesObject = (theme) => ({
    _all_area: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0
    },
    _paper: {
        width: 600,
        padding: 20,
        zIndex: 150,
    },
    _backDrop: {
        zIndex: 100
    },
    _label: {
        paddingBottom: 16,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        '& > svg': {
            cursor: 'pointer',
            '&:hover': {
                opacity: 0.6
            }
        }
    },
    _filters: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 16
    },
    _scroll_area: {
        paddingBottom: 16,
    },
    _item: {
        width: 210,
        height: 32,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 4,
        backgroundColor: '#d1d1d1'
    },
    _buttons: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

export default stylesObject
