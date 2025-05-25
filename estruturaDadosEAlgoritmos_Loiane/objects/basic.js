class Book {
    constructor(title, pages, isbn) {
        this.title = title;
        this.pages = pages;
        this.isbn = isbn;
    }

    printSummary() {
        console.log(`Title: ${this.title}\nNumber of pages: ${this.pages}\nClassification: ${this.isbn}`);
    }
}


let harryPotter = new Book('harryPotter', 468, 12);
console.log(harryPotter.printSummary())