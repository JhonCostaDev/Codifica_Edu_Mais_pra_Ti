const books = [
  { title: "To Kill a Mockingbird", author: "Harper Lee", launchDate: 1960 },
  { title: "1984", author: "George Orwell", launchDate: 1949 },
  { title: "The Great Gatsby", author: "F. Scott Fitzgerald", launchDate: 1925 },
  { title: "Moby-Dick", author: "Herman Melville", launchDate: 1851 },
  { title: "Pride and Prejudice", author: "Jane Austen", launchDate: 1813 },
  { title: "The Catcher in the Rye", author: "J.D. Salinger", launchDate: 1951 },
  { title: "Brave New World", author: "Aldous Huxley", launchDate: 1932 },
  { title: "The Hobbit", author: "J.R.R. Tolkien", launchDate: 1937 },
  { title: "War and Peace", author: "Leo Tolstoy", launchDate: 1869 },
  { title: "Crime and Punishment", author: "Fyodor Dostoevsky", launchDate: 1866 }
];

console.log(books);


//console.log(books);
// For of para iterar e verificar os livros publicados antes de 1900

for(let value of Object.values(books)){
    if (value.launchDate < 1900){
        console.log(value.launchDate);
    }
}

