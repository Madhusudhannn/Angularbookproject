import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  // Base_URL = 'http://43.206.125.23:8010/api/auth/';
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
    return this.http.put(this.Base_URL+"updatebook/"+book.bookId, book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  buybook(book: { paymentId:string; readerId:string; bookID:string; price:string; email:string; paymentDate:string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];
    return this.http.post(this.Base_URL+"buybook/", book, {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  byauthor(book: { author:string; }) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];
    return this.http.get(this.Base_URL+"searchbyauthor/"+book.author,  {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  searchbook(book: {catagory:string; author:string; price:string;publisher:string}) {
    const credentials = sessionStorage.getItem('credentials');
    const token: any = JSON.parse(credentials||'{}')['accessToken'];
    return this.http.get(this.Base_URL+"searchBooks/"+book.catagory+book.author+book.price+book.publisher,  {
      headers: {
        Authorization: 'Bearer ' + token
      }
    })
  }
  

  
  
  constructor(private http: HttpClient) { }
  
}