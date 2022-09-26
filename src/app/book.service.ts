import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const URL = 'http://localhost:8010/api/auth/';
@Injectable({
  providedIn: 'root'
})
export class BookService {
  saveBook(book: { author: string; title: string; publisher: string; releasedate: string; catagory: string; price: number; content: string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];
    return this.http.post(URL+'createbook', book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  
  constructor(private http: HttpClient) { }
}