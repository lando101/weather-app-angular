import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of, Subscription, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private theme: BehaviorSubject<boolean>;

  constructor() {
    this.theme = new BehaviorSubject<boolean>(true);
  }

  setTheme(theme: boolean): void {
    this.theme.next(theme);
  }

  getTheme(): Observable<boolean> {
    return this.theme.asObservable();
  }
}
