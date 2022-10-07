import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-buybook',
  templateUrl: './buybook.component.html',
  styleUrls: ['./buybook.component.css']
})
export class BuybookComponent implements OnInit {
  book={
    paymentId:"",
    readerId:"",
    bookID:"",
    price:"",
    email:"",
    paymentDate:""
    
  }

  constructor(private bookService : BookService) { }
  buyBook(){
    if(this.book.paymentId=="")
    {
      alert("Enter paymentId")
    }
    else if(this.book.readerId=="")
    {
      alert("Enter readerId")
    }
    else if(this.book.bookID=="")
    {
      alert("Enter bookID")
    }
    else if(this.book.paymentId=="")
    {
      alert("Enter paymentId")
    }
    else if(this.book.price=="")
    {
      alert("Enter price")
    }
    else if(this.book.email=="")
    {
      alert("Enter email")
    }
    else if(this.book.paymentDate=="")
    {
      alert("Enter paymentDate")
    }
else{
    console.log('new Book purchased');
    const observable= this.bookService.buybook(this.book);
    observable.subscribe(response=>{
      console.log(response);
      alert("Payment success")

    })
  }
}
  

  ngOnInit(): void {
  }

}
