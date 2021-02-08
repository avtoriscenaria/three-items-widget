import memoize from "memoize-one";
import t from "../../../constants/translations.json";

const createItemData = memoize((elements, updatedElements, chooseElement, _item) => ({
    elements,
    updatedElements,
    chooseElement,
    _item
}));

const getElements = memoize((elements, search, filter) => ({
        memoElements: elements.filter((v, i) => v.toLowerCase().includes(search.toLowerCase().trim()) && (filter === t.no_filter ? v : (i+1) > +filter.replace(/>/gmi, '')))
    })
)

export {
    createItemData,
    getElements
}
