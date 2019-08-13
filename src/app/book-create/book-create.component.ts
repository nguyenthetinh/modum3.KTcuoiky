import {Component, OnInit} from '@angular/core';
import {Books} from '../books';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../book.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.scss']
})
export class BookCreateComponent implements OnInit {
  bookList: Books[] = [];
  book: Partial<Books>;
  bookForm: FormGroup;

  constructor(private bookService: BookService,
              private route: ActivatedRoute) {
    this.bookForm = new FormGroup({
      title: new FormControl(''),
      author: new FormControl(''),
      description: new FormControl('')
    });
  }

  ngOnInit() {
    this.book = {
      title: '',
      author: '',
      description: ''
    };
  }

  onSubmit() {
    if (this.bookForm.valid) {

      this.bookService.createBook(this.book)
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
