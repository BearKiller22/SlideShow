import { Component, AfterViewInit, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit{

  @ViewChild('id') id !: ElementRef;

  ngAfterViewInit() {
  }
  
  data = [
    {id:1, img:"https://yt3.ggpht.com/ytc/AKedOLRFkqTZlgrDTpppwnUE25WXjXbHxQartkOVH0ZbBA=s900-c-k-c0x00ffffff-no-rj"},
    {id:2, img:"https://yt3.ggpht.com/ytc/AKedOLRFkqTZlgrDTpppwnUE25WXjXbHxQartkOVH0ZbBA=s900-c-k-c0x00ffffff-no-rj"},
    {id:3, img:"https://yt3.ggpht.com/ytc/AKedOLRFkqTZlgrDTpppwnUE25WXjXbHxQartkOVH0ZbBA=s900-c-k-c0x00ffffff-no-rj"},
    {id:4, img:"https://upload.wikimedia.org/wikipedia/commons/6/69/Junction_2.svg"},
    {id:5, img:"https://upload.wikimedia.org/wikipedia/commons/6/69/Junction_2.svg"},
    {id:6, img:"https://upload.wikimedia.org/wikipedia/commons/6/69/Junction_2.svg"},
    {id:7, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Junction_3.svg/1024px-Junction_3.svg.png"},
    {id:8, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Junction_3.svg/1024px-Junction_3.svg.png"},
    {id:9, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Junction_3.svg/1024px-Junction_3.svg.png"},
    {id:9, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuC80e60z70WvVF2XdNBR1-JT5C8t3_lsutWwhdWeCPnXGYQXnXky-p5cRw9XFy1vYro&usqp=CAU"},
    {id:9, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuC80e60z70WvVF2XdNBR1-JT5C8t3_lsutWwhdWeCPnXGYQXnXky-p5cRw9XFy1vYro&usqp=CAU"},
    {id:9, img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUuC80e60z70WvVF2XdNBR1-JT5C8t3_lsutWwhdWeCPnXGYQXnXky-p5cRw9XFy1vYro&usqp=CAU"}
  ];

  imgArray = Array();
  Tmp = this.data.length / 3;
  Counter = Array();

  constructor(){
    for (let i = 0; i < 3; i++) { 
      this.imgArray[i] = this.data[i]["img"];
    }
    for (let i = 0; i < this.Tmp; i++) {
      this.Counter[i] = i;
    }
  }


  changeImg(test:any){
    for (let i = test; i < test + 3; i++) {
      this.imgArray[i - test] = this.data[i]["img"];
    }
    
  }
}
