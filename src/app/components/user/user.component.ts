import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  address:Address;
  hobbies:string[];
  hello:any;

  constructor() { }

  ngOnInit() {
    this.name = 'Jarren San Jose';
    this.email = "sanjose.jarren@gmail.com"
    this.age = 22;
    this.address = {
      street: '123 Street st',
      city: 'Irvine',
      state: 'CA'
    }
    this.hobbies = ["code", "play basketball"];
    this.hello = "hello";
  }
  onClick(){
    this.name = "Jarrensj";
    this.hobbies.push('New Hobby');
  }
  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby);
    return false;
  }
  deleteHobby(hobby){
    for(let i = 0; i < this.hobbies.length; ++i){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

}

interface Address{
  street:string,
  city:string,
  state:string
}
