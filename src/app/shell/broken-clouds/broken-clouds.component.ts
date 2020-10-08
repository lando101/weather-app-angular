import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-broken-clouds',
  templateUrl: './broken-clouds.component.html',
  styleUrls: ['./broken-clouds.component.scss'],
})
export class BrokenCloudsComponent implements OnInit {
  @Input() conditions = false;
  @Input() day: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
