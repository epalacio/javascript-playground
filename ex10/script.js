const addButton = document.getElementById('add');
const removeButton = document.getElementById('remove');
const uncheckAllButton = document.getElementById('uncheck-all');
const list = document.getElementById('list');

addButton.addEventListener('click', () => {
  const newItem = document.createElement('li');
  const newCheckbox = document.createElement('input');
  const textContent = document.getElementById('item-text');
  //Task 3 - Add remove button to each item, instead of one at top
  const newRemoveButton = document.createElement('input');
  newRemoveButton.type = 'button'
  newRemoveButton.value = 'delete';
  newCheckbox.type = "checkbox";
    //Task 2 -  Add input value instead of "An Item"
  const textNode = document.createTextNode(textContent.value);
  textContent.value = '';

  newItem.appendChild(newCheckbox);
  newItem.appendChild(textNode);
  newItem.appendChild(newRemoveButton);
  list.appendChild(newItem);
});

removeButton.addEventListener('click', () => {
  const items = document.querySelectorAll('#list li');
  const lastItem = items[items.length - 1];
  list.removeChild(lastItem);
});

list.addEventListener('change', (e) => {
  const checker = e.target;
  //Task 1 - Reverse done by toggling the checkbox.
  checker.checked ? checker.parentElement.classList.add('done') : checker.parentElement.classList.remove('done');
});

//Task 3 - Add remove button to each item, instead of one at top

list.addEventListener('click', (e) => {
  if(e.target.tagName === 'INPUT' && e.target.type === 'button') {
    list.removeChild(e.target.parentElement);
  }
})



