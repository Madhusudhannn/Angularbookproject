import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-bookform',
  templateUrl: './bookform.component.html',
  styleUrls: ['./bookform.component.css']
})
export class BookformComponent implements OnInit {
  book={
    author:"",
    title:"",
    publisher:"",
    releasedate:"",
    catagory:"",
    price:0.0,
    content:""
  }


  constructor(private bookService : BookService) { }

  saveBook(){
    console.log('saved');
    const observable= this.bookService.saveBook(this.book);
    observable.subscribe(response=>{
      console.log(response);

    })
  }

  ngOnInit(): void {
  }

}
