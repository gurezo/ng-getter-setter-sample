import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'ng-getter-setter-sample';
  @ViewChild('target') element;

  // constructor() {
  //   console.log('this.element', this.element);
    
  //   // this.element.sampleMethod();
  // }


  ngOnInit(): void {
    // console.log('this.element', this.element);
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('this.element', this.element);
    this.element.sampleMethod();
    
  }


}
