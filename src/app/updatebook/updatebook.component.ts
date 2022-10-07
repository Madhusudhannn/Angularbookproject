import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent implements OnInit {
  book={
    bookId:"",
    author:"",
    title:"",
    publisher:"",
    releaseDate:"",
    catagory:"",
    price:0.0,
    active:"",
    content:""
  }
  constructor(private bookService : BookService) { }

  updatebook(){
    if(this.book.author=="")
    {
      alert("please enter author")
    }
    else if(this.book.title=="")
    {
      alert("please enter title")
    }
    else if(this.book.publisher=="")
    {
      alert("please enter publisher")
    }
    else{
      
    console.log('updated');
    const observable= this.bookService.updatebook(this.book);
    observable.subscribe(response=>{
      console.log(response);
      alert("book update successfully")

    })
  }
}

  ngOnInit(): void {
  }

}

