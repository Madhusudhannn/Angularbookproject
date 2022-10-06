import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-searchby-author',
  templateUrl: './searchby-author.component.html',
  styleUrls: ['./searchby-author.component.css']
})
export class SearchbyAuthorComponent implements OnInit {

  byauthor={
    author:""
  }

 constructor(private bookService : BookService) { }

  author(){
    console.log('allbooks');
    const observable= this.bookService.byauthor(this.byauthor);
    observable.subscribe(response=>{
      console.log(response);

    })
  }


  ngOnInit(): void {
  }

}
