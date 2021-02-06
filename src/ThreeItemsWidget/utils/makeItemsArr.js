const makeItemArr = (length, mask = (i) => i) => {
    const arr = [];

    for (let i = 0; i < length; i++) {
        arr.push(mask(i))
    }

    return arr
}

export default makeItemArr
