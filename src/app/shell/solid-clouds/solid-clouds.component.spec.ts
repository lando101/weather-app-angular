import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolidCloudsComponent } from './solid-clouds.component';

describe('SolidCloudsComponent', () => {
  let component: SolidCloudsComponent;
  let fixture: ComponentFixture<SolidCloudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SolidCloudsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolidCloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
