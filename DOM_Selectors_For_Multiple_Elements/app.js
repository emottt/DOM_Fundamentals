// document.getElementByClassName()
const items = document.getElementsByClassName('collection-item');
console.log(items);
console.log(items[1]);
items[1].style.color = 'red';
items[3].textContent = 'List item 4';

const listItems = document
  .querySelector('ul')
  .getElementsByClassName('collection-item');
console.log(listItems);

// document.getElementByTagName()
let lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[0].style.color = 'red';
lis[4].textContent = 'List item 4';

// Convert HTML Collection into array
lis = Array.from(lis);

lis.reverse();

lis.forEach(function(li, index) {
  console.log(li.className);
  li.textContent = `${index}: Items`;
});
console.log(lis);

// document.querySelectorAll()
const item = document.querySelectorAll('ul.collection li.collection-item');
console.log(item);

item.forEach(function(items, index) {
  items.textContent = `${index}: ITEMS`;
});

const liOdd = document.querySelectorAll('li:nth-child(odd)');
const liEven = document.querySelectorAll('li:nth-child(even)');

liOdd.forEach(function(li, index) {
  li.style.background = '#cccccc';
});

for (let i = 0; i < liEven.length; i++) {
  liEven[i].style.background = '#f4f4f4';
}
console.log(items);
