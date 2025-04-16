//Asma Ahmed 
//991699083 

import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-update-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-book.component.html',
  styleUrl: './update-book.component.css'
})
export class UpdateBookComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.fetchBooks();
  }

  fetchBooks(): void {
    this.bookService.getAllBooks().subscribe((data: Book[]) => {
      this.books = data.map(book => ({ ...book, edit: false }));
    });
  }

  saveChanges(book: Book): void {
    if (book.edit) {
      this.bookService.updateBook(book).subscribe(() => {
        book.edit = false;
        alert('Book details updated.');
      });
    }
  }
}
