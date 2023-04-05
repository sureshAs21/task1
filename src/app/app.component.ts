import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'userTask';
  count:number =0;
  mockdata = [
    {name:'ravi'},
    {name:'ravi'},
    {name:'rajesh'},
    {name:'rajesh'},
    {name:'rajesh'},
    {name:'rajesh'},
    {name:'rajesh'},
    {name:'vijay'},
    {name:'vijay'},
    {name:'vijay'},
    {name:'vijay'},
    {name:'vijay'},
    {name:'vijay'},
    {name:'vijay'},
    {name:'vijay'},
    {name:'vijay'},
    {name:'vijay'},
    {name:'ram'},
    {name:'ram'},




  ]
  constructor(){


  }


  getCount(data:any,name:any){

    this.count = data.filter((item:any)=>item.name === name).length;
    return data.filter((item:any)=>item.name === name).length;


  }
}
