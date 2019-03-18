import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Marco Polo Game';

 public digitEntered:number=0;
 public output:string="1";
  
  ngOnInit(){
    let output="" ;
    for(let i=2;i<=100;i++){
      if(i%4==0 && i%7!=0){
         output="marco";
      }else if(i%7==0 && i%4!=0){
        output="polo";
      }else if(i%4==0 && i%7==0){
        output="marcopolo";
      }else{
        output=i.toString();
      }
      this.output=(this.output+","+output);
   }

  // alert(this.output);

  
 } 
  }

