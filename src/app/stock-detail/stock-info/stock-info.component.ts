import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nli-stock-info',
  templateUrl: './stock-info.component.html',
  styleUrls: ['./stock-info.component.css']
})
export class StockInfoComponent implements OnInit {

  @Input() data: any;

  constructor() { }

  ngOnInit() {
  }

}
