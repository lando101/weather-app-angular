import { Title } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() sidenav!: MatSidenav;
  isLoading = true;
  count = 0;
  constructor(private titleService: Title) {}

  ngOnInit() {}

  get title(): string {
    return this.titleService.getTitle();
  }

  dataLoading(event: any) {
    this.count++;

    // if(this.count <= 0 && event){
    //   this.isLoading = event;
    // }
    // this.isLoading = event;

    if (!event) {
      setTimeout(() => {
        this.isLoading = event;
      }, 1000);
    } else {
      this.isLoading = event;
    }

    console.log('GOT DATA FROM LOCATION SEARCH');
  }
}
