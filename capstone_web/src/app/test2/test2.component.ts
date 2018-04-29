import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NgIf } from '@angular/common';
import { HttpService } from '../../services/http.service';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.css']
})
export class Test2Component implements OnInit {

  data:any;
  fft_no:any;
  label:any[] = [];
  constructor(private http:HttpService) { 
      
      
  }

  ngOnInit() { 
    // this.load(); 
    this.x_axis(); 
  }

  load(){
    this.http.get('/')
    .subscribe((items:any)=>{
      this.data = items.json();
      this.fft_no = items[0].timestamp;

  //    this.fft_no = this.data.fft_no;

      /* y axi */
      for(var i = 0; i < 15 ; i++)
      {
      this.lineChartData[0].data[i] = this.data[i].x_amp;
      }
      for(var i = 0; i < 15 ; i++)
      {
      this.lineChartData[1].data[i] = this.data[i].y_amp;
      }
      for(var i = 0; i < 15 ; i++)
      {
      this.lineChartData[2].data[i] = this.data[i].z_amp;
      }
     
      // [1,2,3,4,5,6,7,8,9,1,2,3,4,5,6,7]

      //  for(var i=0; i<20; i++){
      //  this.label.push(this.data[i].timestamp);
      //    console.log(this.lineChartLabels[i]);
      //    console.log(this.label[i]);

      //  }
    console.log("ttttt");
   // console.log(this.lineChartLabels[8]);
    // this.x_axis();
    
    })
    
  }

  
  x_axis(){

    this.http.get('/v/fft')
    .subscribe((items:any)=>{
      this.data = items.json();
      //this.fft_no = items[0].timestamp;

      console.log(this.data);
      /* x axi */
      let Arr:Array<any>=[];
      for(let i =0; i< this.data.length; i++)
      {
        // console.log(this.data[i])
        this.lineChartData[0].data[i] = this.data[i].x_amp;
        this.lineChartData[1].data[i] = this.data[i].y_amp;
        this.lineChartData[2].data[i] = this.data[i].z_amp;
        Arr.push(this.data[i].timestamp)
        // this.lineChartLabels[i] = this.data[i].timestamp;
        // this.data[i].timestamp
      }
      this.lineChartLabels = Arr;

      // this.lineChartLabels = 
      // [this.data[0],this.data[1],this.data[2],this.data[3],this.data[4],this.data[5],this.data[6],
      // this.data[7],this.data[8]]

     
      // [this.data[0].timestamp,this.data[1].timestamp,this.data[2].timestamp,
      //  this.data[3].timestamp,this.data[4].timestamp,this.data[5].timestamp,
      //  this.data[6].timestamp,this.data[7].timestamp,this.data[8].timestamp,
      //  this.data[9].timestamp,this.data[10].timestamp,this.data[11].timestamp,
      //  this.data[12].timestamp,this.data[13].timestamp,this.data[14].timestamp];
       
  })
  }
  // public lineChartData:Array<any> = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  //   {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
  //   {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  // ];
  public lineChartData:Array<any> = [
    {data: [], label: 'acccel_x'},
    {data: [], label: 'acccel_y'},
    {data: [], label: 'acccel_z'}

  ];

     //public lineChartLabels:Array<any> = ['January2', 'February', 'March', 'April', 'May', 'June', 'July'];
  // public lineChartLabels:Array<any> = this.label;
  public lineChartLabels:Array<any> = [];
 
  
  public lineChartOptions:any = {
    responsive: true
  };
  public lineChartColors:Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend:boolean = true;
  public lineChartType:string = 'line';
 
 
  // events
  public chartClicked(e:any):void {
    console.log(e);
  }
 
  public chartHovered(e:any):void {
    console.log(e);
  }


}