'use strict';

const divEl = document.createElement('div');
divEl.innerHTML = `
  <a href='#toop'>
    <button>back to the top</button>
  </a>
`;
console.log(divEl.nodeName, divEl.cloneNode(true));

// --- write some code ---
const anchorEl = divEl.querySelector('a');
anchorEl.setAttribute = ('href', '#top');

const buttonEl = divEl.querySelector('button');
buttonEl.innerHTML = 'to the top';
// --- --- --- --- --- ---

console.log(divEl.nodeName, divEl.cloneNode(true));

console.assert(divEl.children[0].getAttribute('href') === '#toop', 'Test: href');

console.assert(
    divEl.children[0].children[0].innerHTML = 'to the top',
    'Test: button innerHTML',
);
