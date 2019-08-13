import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Books} from './books';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private readonly API_URL = 'http://localhost:3000/books';
  constructor(private http: HttpClient) { }

  getBook(count = 10): Observable<Books[]> {
    return this.http.get<Books[]>(this.API_URL).pipe(
      map(response => response.filter((book, i) => i < count))
    );
  }
  getBookById(id: number): Observable<Books> {
    return this.http.get<Books>(`${this.API_URL}/${id}`);
  }
  createBook(book: Partial<Books>): Observable<Books> {
    return this.http.post<Books>(this.API_URL, book);
  }
  deleteBook(id: number): Observable<any> {
    return this.http.delete(`${this.API_URL}/${id}`);
  }
  updatebook(book: Books): Observable<Books> {
    return this.http.put<Books>(`${this.API_URL}/${book.id}`, book);
  }
}
