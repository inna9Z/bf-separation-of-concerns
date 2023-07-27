'use strict';

const actual = (level, text, styling) => {
    const header = document.createElement(`h${level}`);
    header.innerHTML = text;
    header.className = styling;
    return header;
};
