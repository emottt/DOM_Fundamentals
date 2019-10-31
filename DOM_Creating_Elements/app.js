// Create element
const li = document.createElement('li');

// Add class
li.className = 'collection-item';

// Add Id
li.id = 'new-item';

// Add attribute
li.setAttribute('title', 'New Item');

// Create text node and append
li.appendChild(document.createTextNode('List Item'));

// Create link element
const link = document.createElement('a');

// Add classes
link.className = 'delete-item secondary-content';

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// Append link into li
li.appendChild(link);

console.log(link);
console.log(li);