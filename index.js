// I attempted to get this to work on the other JS file so that i didnt have to add it to the bottom of the other JS file but
// Import and export wouldnt work and it wouldnt work when i ran it and i tried to fix it for about 3 hours before i just added
// it to the other JS file at the bottom

// // import bookData from './book-data';

// class Book {
//     constructor(title, author, language, subject) {
//       // add required properties for the book
//       this.title = title;
//       this.author = author;
//       this.language = language;
//       this.subject = subject;
//     }
  
//     // method to generate a DOM element for the book
//     render() {
//       const bookElement = document.createElement('li');
//       bookElement.innerHTML = `
//         <h3>${this.title}</h3>
//         <p>by ${this.author}</p>
//         <p>${this.language}</p>
//         <p>${this.subject}</p>
//       `;
//       return bookElement;
//     }
//   }
  
//   class Bookshelf {
//     constructor() {
//       this.books = [];
//     }
  
//     // method to add a book to the bookshelf
//     addBook(book) {
//       this.books.push(book);
//     }
  
//     // method to generate a DOM element for the bookshelf
//     render() {
//       const bookshelfElement = document.createElement('ul');
//       this.books.forEach(book => {
//         const bookElement = book.render();
//         bookshelfElement.appendChild(bookElement);
//       });
//       return bookshelfElement;
//     }
    
//   }

//   const bookshelf = new Bookshelf();

//   // generate the bookshelf DOM element and append it to the page
//   const bookshelfElement = bookshelf.render();
//   document.getElementById('bookshelf').appendChild(bookshelfElement);
    
  
//   // loop through the book data and create a Book instance for each book
//   for (let i = 0; i < bookData.length; i++) {
//     const book = bookData[i];
//     const newBook = new Book(book.title, book.author, book.language, book.subject);
//     bookshelf.addBook(newBook);
//   }

//   const searchForm = document.querySelector('.search-form');

//   searchForm.addEventListener('submit', event => {
//     event.preventDefault();
  
//     const searchQuery = document.querySelector('.search-query').value;
//     const bookshelf = new Bookshelf();
  
//     for (let i = 0; i < bookData.length; i++) {
//       const book = bookData[i];
//       if (book.title.includes(searchQuery) || book.author.includes(searchQuery) || book.subject.includes(searchQuery)) {
//         const newBook = new Book(book.title, book.author, book.language, book.subject);
//         bookshelf.addBook(newBook);
//       }
//     }
  
//     const bookshelfElement = bookshelf.render();
//     document.getElementById('bookshelf').innerHTML = '';
//     document.getElementById('bookshelf').appendChild(bookshelfElement);
//   });
  
  