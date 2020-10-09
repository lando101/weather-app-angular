import { Component, OnInit, Input } from '@angular/core';
import { ThemeService } from 'src/services/theme.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  @Input() isLoading = true;
  @Input() size = 1;
  @Input() message: string | undefined;
  themeLight = true;
  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.getTheme().subscribe((data) => {
      // if (data){
      this.themeLight = data;
      // console.log(this.themeLight + ' :THEME LIGHT');
      // }
    });
  }
}
