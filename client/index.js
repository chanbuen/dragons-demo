import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main';

console.log('my JS is running');

ReactDOM.render(<Main/>, document.getElementById("content"))


// if (location.hash.length) {
//   const frontEndHash = location.hash.slice(1);
//   //'#dogs', '#dragons'...

//   //route is 'dogs', 'dragons', or 'cats'

//   fetch(`/${frontEndHash}`)
//     .then(response => response.json())
//     .then(data => renderView(data))
//     .catch(console.error);

// }

// ['dragon', 'cat', 'dog'].forEach(animal => {
//   const button = document.getElementById(`${animal}-button`);
//   button.addEventListener('click', () => {
//     fetch(`/${animal}s`)
//       .then(res => res.json())
//       .then(renderView)
//       .then(() => {
//         location.hash = `${animal}s`;
//       })
//       .catch(console.error);
//   })
// })



// function renderView(arrOfData) {
//   const view = document.getElementById('content');

//   //remove anything in the content div if there is something
//   if (view.firstChild) view.removeChild(view.firstChild);

//   //create a new div
//   const list = document.createElement('div');
//   list.className = 'list'

//   //run through the list of animals
//   arrOfData.forEach(animal => {
//     //create div for each
//     const item = document.createElement('div');
//     //set the innerHTML to include the animals name and image
//     item.innerHTML = `<div class="item"><h2>${animal.name}</h2><img src=${animal.image} /></div>`
//     //append the new div to the list
//     list.appendChild(item);
//   })
//   //append the new list to the content div
//   view.appendChild(list);
// }
