import { Component, OnInit } from '@angular/core';
import {Books} from '../books';
import {FormGroup} from '@angular/forms';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.scss']
})
export class BookPageComponent implements OnInit {

  bookList: Books[] = [];
  bookForm: FormGroup;

  constructor(
    private bookSerice: BookService) { }

  ngOnInit() {
    this.bookSerice
      .getBook()
      .subscribe(next => (this.bookList = next), error => (this.bookList = []));
  }
}
