import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input()
  get item () {
    return this._item;
  }
  set item(value: string) {
    this._item = value;
  }
  private _item: string;

  constructor() { }

  ngOnInit(): void {
    console.log('_item', this._item);
  }

  sampleMethod() {
    console.log('sampleMethod()');
  }
}
