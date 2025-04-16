//Asma Ahmed 
//991699083 

import { Routes } from '@angular/router';
import { CreateBookComponent } from './create-book/create-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { FindBookComponent } from './find-book/find-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { ListAllBooksComponent } from './list-all-books/list-all-books.component';

export const routes: Routes = [
  { path: 'list', component: ListAllBooksComponent },
  { path: 'create', component: CreateBookComponent },
  { path: 'update', component: UpdateBookComponent },
  { path: 'find', component: FindBookComponent },
  { path: 'delete', component: DeleteBookComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full' }
];
