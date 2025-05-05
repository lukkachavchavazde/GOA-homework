const books = [
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald" },
    { title: "1984", author: "George Orwell" },
    { title: "To Kill a Mockingbird", author: "Harper Lee" },
    { title: "Moby Dick", author: "Herman Melville" }
];

function showPage(pageId) {
    document.getElementById('booksPage').style.display = 'none';
    document.getElementById('libraryPage').style.display = 'none';
    document.getElementById(pageId).style.display = 'block';
}

function renderBooks() {
    const grid = document.getElementById('booksGrid');
    grid.innerHTML = '';
    books.forEach((book, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p><button onclick="addToLibrary(${index})">Add to Library</button>`;
        grid.appendChild(div);
    });
}

function renderLibrary() {
    const grid = document.getElementById('libraryGrid');
    grid.innerHTML = '';
    const library = JSON.parse(localStorage.getItem('library')) || [];
    library.forEach((book, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${book.title}</h3><p>by ${book.author}</p><button onclick="removeFromLibrary(${index})">Remove</button><button onclick="toggleReadStatus(${index})">${book.read ? 'Mark as Unread' : 'Mark as Read'}</button><p>${book.read ? 'Read' : 'Unread'}</p>`;
        grid.appendChild(div);
    });
}

function addToLibrary(index) {
    const book = books[index];
    const library = JSON.parse(localStorage.getItem('library')) || [];
    if (!library.some(b => b.title === book.title)) {
        library.push({ ...book, read: false });
        localStorage.setItem('library', JSON.stringify(library));
        renderLibrary();
    }
}

function removeFromLibrary(index) {
    let library = JSON.parse(localStorage.getItem('library')) || [];
    library.splice(index, 1);
    localStorage.setItem('library', JSON.stringify(library));
    renderLibrary();
}

function toggleReadStatus(index) {
    const library = JSON.parse(localStorage.getItem('library')) || [];
    library[index].read = !library[index].read;
    localStorage.setItem('library', JSON.stringify(library));
    renderLibrary();
}

showPage('booksPage');
renderBooks();
