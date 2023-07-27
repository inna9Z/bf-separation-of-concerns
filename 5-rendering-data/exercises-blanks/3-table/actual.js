'use strict';

const actual = (arrOfArrs) => {
    const tableEl = document.createElement('table');
    const tbodyEl = document.createElement('tbody');
    for (const arr of arrOfArrs) {
        const trEl = document.createElement('tr');
        for (const text of arr) {
            const tdEl = document.createElement('td');
            const textNode = document.createTextNode(text);
            tdEl.appendChild(textNode); // Append the text node to the 'td' element
            trEl.appendChild(tdEl);
        }
        tbodyEl.appendChild(trEl);
    }
    tableEl.appendChild(tbodyEl);

    return tableEl;
};
