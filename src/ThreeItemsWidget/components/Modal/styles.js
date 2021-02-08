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
    }
});

export default stylesObject
