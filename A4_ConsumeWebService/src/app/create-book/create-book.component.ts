// Asma Ahmed
// 991699083

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Book } from '../models/book.model';
import { BookService } from '../services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-book.component.html',
  styleUrl: './create-book.component.css'
})
export class CreateBookComponent {
  book: Book = {
    title: '',
    authorName: '',
    price: 0,
    quantity: 0
  };

  constructor(private bookService: BookService) { }

  onSubmit() {
    this.bookService.createBook(this.book).subscribe(() => {
      alert('Book has been added.');
      this.book = { title: '', authorName: '', price: 0, quantity: 0 };
    });
  }
}
