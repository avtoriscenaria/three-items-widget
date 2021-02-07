const isDataEqual = (data1, data2) => {
    return JSON.stringify(data1) === JSON.stringify(data2)
};

export default isDataEqual
