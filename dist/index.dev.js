"use strict";

// function fetchBooks() {
// }
// function renderBooks(books) {
//     const main = document.querySelector('main')
//     books.forEach(book => {
//         const h2 = document.createElement('h2')
//         h2.innerHTML = book.name
//         main.appendChild(h2)
//     })
// }
// document.addEventListener('DOMContentLoaded', function() {
//     fetchBooks()
// })
function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books").then(function (resp) {
    return resp.json();
  }).then(function (json) {
    return renderBooks(json);
  });
}

function renderBooks(books) {
  var main = document.querySelector('main');
  books.forEach(function (book) {
    var h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  fetchBooks();
});