// Asma Ahmed
// 991699083

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';

@Component({
  selector: 'app-list-all-books',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-all-books.component.html',
  styleUrl: './list-all-books.component.css'
})
export class ListAllBooksComponent {
  books: Book[] = [];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.bookService.getAllBooks().subscribe(data => {
      this.books = data;
    });
  }
}
