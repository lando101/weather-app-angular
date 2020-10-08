import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokenCloudsComponent } from './broken-clouds.component';

describe('BrokenCloudsComponent', () => {
  let component: BrokenCloudsComponent;
  let fixture: ComponentFixture<BrokenCloudsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BrokenCloudsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrokenCloudsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
