import { Component, OnInit } from '@angular/core';
import {segmentService} from './seven-Segment.services';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-seven-segment',
  templateUrl: './seven-segment.component.html',
  styleUrls: ['./seven-segment.component.css']
})
export class SevenSegmentComponent implements OnInit {
  
  public stringData:string;
  public nextLine:number=0;
  public finalOutput="";/* This contains all the data */
  public singleNumber:number=0;
  constructor(private serv: segmentService) { }

  ngOnInit() {
    this.serv.getDocumet().subscribe(data => {
      this.stringData=data;
      this.manipulate(this.stringData)
  });
  }
  public counter:number=0;
  public manipulate(data){
   
   for(let i=0;i<data.length;i=i+3) {
     if(data[i]==='\n'||data[i]==='\r'){
      // console.log(data[i]);
     }
     else{
      // console.log(data[i]);
       let num=this.getTheNumber(i).toString();
       this.counter++;
       this.finalOutput+=num;
       
       if(this.counter==9){
       this.makeNumber();
       console.log(this.finalOutput);
       i=i+this.newLine(this.counter);
       }
     }   
  }
  
  } 
  
  public makeNumber(){
   this.finalOutput+="\n";
  }
  public newLine(data){
    if(data==9){
     this.counter=0;
     return 62;
    }
  }
  
  public getTheNumber(index){
    /* for 0 */
    let data1=index;
    let data2=index+1;
    let data3=index+2;
    let data4=index+29;
    let data5=index+30;
    let data6=index+31;
    let data7=index+58;
    let data8=index+59;
    let data9=index+60;

    if(this.stringData[data1]==" " && this.stringData[data2]=="_" && this.stringData[data3]==" " &&
       this.stringData[data4]=="|" && this.stringData[data5]==" " && this.stringData[data6]=="|" &&
       this.stringData[data7]== "|" && this.stringData[data8]=="_" && this.stringData[data9]== "|"){
          return "0";   
    }else if(this.stringData[data1]==" " && this.stringData[data2]=="_" && this.stringData[data3]==" " &&
             this.stringData[data4]=="|" && this.stringData[data5]=="_" && this.stringData[data6]==" " &&
             this.stringData[data7]== "|" && this.stringData[data8]=="_" && this.stringData[data9]== "|"
    ){
        return "6";
    }else if(this.stringData[data1]==" " && this.stringData[data2]==" " && this.stringData[data3]==" " &&
    this.stringData[data4]==" " && this.stringData[data5]==" " && this.stringData[data6]=="|" &&
    this.stringData[data7]== " " && this.stringData[data8]==" " && this.stringData[data9]== "|"
    ){
        return "1";
    }else if(this.stringData[data1]==" " && this.stringData[data2]=="_" && this.stringData[data3]==" " &&
    this.stringData[data4]==" " && this.stringData[data5]=="_" && this.stringData[data6]=="|" &&
    this.stringData[data7]== "|" && this.stringData[data8]=="_" && this.stringData[data9]== " "
    ){
        return 2;
    }else if(this.stringData[data1]==" " && this.stringData[data2]=="_" && this.stringData[data3]==" " &&
    this.stringData[data4]==" " && this.stringData[data5]=="_" && this.stringData[data6]=="|" &&
    this.stringData[data7]== " " && this.stringData[data8]=="_" && this.stringData[data9]== "|"
    ){
        return "3";
    }else if(this.stringData[data1]==" " && this.stringData[data2]==" " && this.stringData[data3]==" " &&
    this.stringData[data4]=="|" && this.stringData[data5]=="_" && this.stringData[data6]=="|" &&
    this.stringData[data7]== " " && this.stringData[data8]==" " && this.stringData[data9]== "|"
    ){
        return "4";
    }else if(this.stringData[data1]==" " && this.stringData[data2]=="_" && this.stringData[data3]==" " &&
    this.stringData[data4]=="|" && this.stringData[data5]=="_" && this.stringData[data6]==" " &&
    this.stringData[data7]== " " && this.stringData[data8]=="_" && this.stringData[data9]== "|"
    ){
        return "5";
    }else if(this.stringData[data1]==" " && this.stringData[data2]=="_" && this.stringData[data3]==" " &&
    this.stringData[data4]==" " && this.stringData[data5]==" " && this.stringData[data6]=="|" &&
    this.stringData[data7]== " " && this.stringData[data8]==" " && this.stringData[data9]== "|"
    ){
        return "7";
    }else if(this.stringData[data1]==" " && this.stringData[data2]=="_" && this.stringData[data3]==" " &&
    this.stringData[data4]=="|" && this.stringData[data5]=="_" && this.stringData[data6]=="|" &&
    this.stringData[data7]== "|" && this.stringData[data8]=="_" && this.stringData[data9]== "|"
    ){
        return "8";
    }else if(this.stringData[data1]==" " && this.stringData[data2]=="_" && this.stringData[data3]==" " &&
    this.stringData[data4]=="|" && this.stringData[data5]=="_" && this.stringData[data6]=="|" &&
    this.stringData[data7]== " " && this.stringData[data8]=="_" && this.stringData[data9]== "|"
    ){
        return "9";
    }
    }
    
    public save(){
    const blob = new Blob([this.finalOutput], {type : 'text/plain'});
    saveAs(blob, 'abc.txt');
    }
}
