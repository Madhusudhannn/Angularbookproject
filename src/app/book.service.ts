import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  Base_URL = 'http://localhost:8010/api/auth/';
  saveBook(book: { author: string; title: string; publisher: string; releaseDate: string; catagory: string; price: number; content: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];
    return this.http.post(this.Base_URL+'createbook', book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  updatebook(book: { bookId:String;author: string; title: string; publisher: string; releaseDate: string; catagory: string; price: number; content: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];
    return this.http.put(this.Base_URL+'updatebook', book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  
  
  constructor(private http: HttpClient) { }
  
}