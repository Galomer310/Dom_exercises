// 2
const navBar = document.getElementById('navBar');

navBar.setAttribute('id', 'socialNetworkNavigation');
// 3
const newListItem = document.createElement("li");

const logouText = document.createTextNode('Logout');

newListItem.appendChild(logouText);

const ul = document.querySelector('ul');
ul.appendChild(newListItem);
// 4
const firstItem = ul.firstElementChild;
console.log("First item text:", firstItem.textContent);

const lastItem = ul.lastElementChild;
console.log("Last item text:", lastItem.textContent);