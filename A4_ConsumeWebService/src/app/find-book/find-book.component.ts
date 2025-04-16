// Asma Ahmed
// 991699083

import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-book',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './find-book.component.html',
  styleUrl: './find-book.component.css'
})
export class FindBookComponent {
  title: string = '';
  foundBooks: Book[] = [];

  constructor(private bookService: BookService) { }

  searchBooks(): void {
    this.bookService.findBooksByTitle(this.title).subscribe((results: Book[]) => {
      this.foundBooks = results;
    });
  }
}
