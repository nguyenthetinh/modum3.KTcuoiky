import { NgModule } from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {BookPageComponent} from './book-page/book-page.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookUpdateComponent} from './book-update/book-update.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookViewComponent} from './book-view/book-view.component';


const routes: Routes = [
  {
    path: 'books',
    component: BookPageComponent
  },
  {
    path: 'books/create',
    component: BookCreateComponent
  },
  {
    path: 'books/:id/edit',
    component: BookUpdateComponent
  },
  {
    path: 'books/:id/delete',
    component: BookDeleteComponent
  },
  {
    path: 'books/:id/view',
    component: BookViewComponent
  }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
