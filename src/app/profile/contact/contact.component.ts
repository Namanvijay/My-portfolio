import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Contact } from './contact';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
  export class ContactComponent implements OnInit {
    public submitted = false;
    public contact = new Contact('', '', '', '');
    constructor( private http: HttpClient) { }

    ngOnInit(): void {}

    onSubmit(): void
  {
     const data = {
       name: this.contact.name,
       subject: this.contact.subject,
       email: this.contact.email,
       message: this.contact.message,

     };


     if (data.name !== '' && data.subject !== '' && data.email !== '')
     {
        alert(`Hi ${data.name} thanks for connecting!`);
        console.log(data);
        this.http.post('https://portfolio-d66c0-default-rtdb.firebaseio.com/posts.json', data).subscribe(responseData => {
          console.log(responseData);
        });


     }



  }



    }
