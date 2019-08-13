import {Component, OnInit} from '@angular/core';
import {Books} from '../books';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../book.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss']
})
export class BookUpdateComponent implements OnInit {
  bookList: Books[] = [];
  book: Books;
  bookForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService
  ) {
    this.bookForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl('')
    });
    this.book = {
      id: 0,
      title: '',
      author: '',
      description: ''
    };
  }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBookById(id).subscribe(
      next => (this.book = next),
      error => {
        console.log(error);
        this.book = null;
      }
    );
  }

  updateBook() {
    if (this.bookForm.valid) {

      this.bookService.updatebook(this.book)
        .subscribe(next => {
          this.bookList.unshift(next);
          this.bookForm.reset({
            title: '',
            author: '',
            description: '',
          });
        }, error => console.log(error));
    }
  }

}
