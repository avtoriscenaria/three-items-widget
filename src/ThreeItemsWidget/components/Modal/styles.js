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

    },
    _filters: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    _scroll_area: {

    },
    _buttons: {
        display: 'flex',
        justifyContent: 'space-between'
    }
});

export default stylesObject
