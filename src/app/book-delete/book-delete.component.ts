import {Component, OnInit} from '@angular/core';
import {Books} from '../books';
import {ActivatedRoute, Router} from '@angular/router';
import {BookService} from '../book.service';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.scss']
})
export class BookDeleteComponent implements OnInit {
  book: Books;
  bookList: Books[] = [];

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private  router: Router
  ) {
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

  deletePost() {
    this.bookService.deleteBook(this.book.id).subscribe(() => {
      this.router.navigate(['/books']);
    });
  }
}
