// Asma Ahmed
// 991699083

import { Component } from '@angular/core';
import { BookService } from '../services/book.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-delete-book',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './delete-book.component.html',
  styleUrl: './delete-book.component.css'
})
export class DeleteBookComponent {
  id!: number;

  constructor(private bookService: BookService) { }

  deleteBook(): void {
    this.bookService.deleteBook(this.id).subscribe(() => {
      alert('Book deleted.');
      this.id = 0;
    });
  }
}
