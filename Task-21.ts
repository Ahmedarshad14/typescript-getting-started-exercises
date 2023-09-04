// Define a TypeScript interface for a Book
interface Book {
    title: string;
    author: string;
    publicationYear: number;
    genre: string;
}

// Create objects for different books
const book1: Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publicationYear: 1960,
    genre: "Fiction"
};

const book2: Book = {
    title: "1984",
    author: "George Orwell",
    publicationYear: 1949,
    genre: "Dystopian"
};

const book3: Book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    publicationYear: 1925,
    genre: "Classic"
};

// Display information about the books
console.log("Book 1:", book1);
console.log("Book 2:", book2);
console.log("Book 3:", book3);
