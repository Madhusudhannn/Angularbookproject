import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from '../book.service';

@Component({
  selector: 'app-search-book',
  templateUrl: './search-book.component.html',
  styleUrls: ['./search-book.component.css']
})
export class SearchBookComponent implements OnInit {
  searchbook1={
    catagory:"",
    author:"",
    price:"",
    publisher:""

  }

  constructor(private bookService : BookService) { }
  searchbook(){

    const observable: Observable<any>= this.bookService.searchbook(this.searchbook1);

    observable.subscribe(

      responce =>{//success.fuction

        console.log(responce);



       },

       error=>{

         console.log(error);

       }

    )

  }

  ngOnInit(): void {
  }

}
