import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  searchbook={
    catagory:"",
    author:"",
    price:"",
    publisher:""

  }

  constructor(private bookService : BookService) { }
  Searchbook(){
    console.log('allbooks');
    const observable= this.bookService.byauthor(this.searchbook);
    observable.subscribe(response=>{
      console.log(response);

    })
  }

  ngOnInit(): void {
  }

}
