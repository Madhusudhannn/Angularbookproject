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
    releaseDate:"",
    catagory:"",
    price:0.0,
    active:"",
    content:""
  }


  constructor(private bookService : BookService) { }

  saveBook(){
    if(this.book.author=="")
    {
      alert("Please enter Author")
    }
    else if(this.book.title=="")
    {
      alert("Please enter title")
    }
    else if(this.book.publisher=="")
    {
      alert("Please enter publisher")
    }
    else if(this.book.releaseDate=="")
    {
      alert("Please enter releaseDate")
    }
    else if(this.book.catagory=="")
    {
      alert("Please enter Catagory")
    }
  
    else if(this.book.active=="")
    {
      alert("Please enter active")
    }
    else if(this.book.content=="")
    {
      alert("Please enter content")
    }
    else{
    console.log('saved');
    const observable= this.bookService.saveBook(this.book);
    observable.subscribe(response=>{
      console.log(response);

    })
  }
}

  ngOnInit(): void {
  }

}
