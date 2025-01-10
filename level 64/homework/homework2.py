import random

class Author:
    def __init__(self, name):
        self.name = name
        self.books_written = []

    def write_book(self, title):
        book = Book(title, self)
        self.books_written.append(book)
        return book

    def list_books(self):
        return [book.title for book in self.books_written]

class Book:
    def __init__(self, title, author):
        self.title = title
        self.author = author

    def __str__(self):
        return f"'{self.title}' by {self.author.name}"

    @staticmethod
    def generate_book_code():
        return f"BOOK-{random.randint(1000, 9999)}"

class Library:
    books = []

    def __init__(self, name):
        self.name = name

    @classmethod
    def add_book(cls, book):
        cls.books.append(book)

    @classmethod
    def remove_book(cls, book):
        if book in cls.books:
            cls.books.remove(book)
        else:
            print(f"Book '{book.title}' not found in the library.")

    @classmethod
    def list_books(cls):
        return [str(book) for book in cls.books]

    @staticmethod
    def generate_library_id():
        return f"LIB-{random.randint(100, 999)}"

author1 = Author("J.K. Rowling")
author2 = Author("George Orwell")

book1 = author1.write_book("Harry Potter and the Sorcerer's Stone")
book2 = author2.write_book("1984")
book3 = author1.write_book("Harry Potter and the Chamber of Secrets")

library = Library("Central Library")

Library.add_book(book1)
Library.add_book(book2)
Library.add_book(book3)

print("Books in the Library:")
for book in Library.list_books():
    print(book)

print(f"Library ID: {Library.generate_library_id()}")
print(f"Book code for '{book1.title}': {Book.generate_book_code()}")

Library.remove_book(book2)

print("\nBooks in the Library after removal:")
for book in Library.list_books():
    print(book)

print(f"\nBooks written by {author1.name}: {author1.list_books()}")
