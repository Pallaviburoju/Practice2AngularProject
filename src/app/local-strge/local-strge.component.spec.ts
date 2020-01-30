import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalStrgeComponent } from './local-strge.component';

describe('LocalStrgeComponent', () => {
  let component: LocalStrgeComponent;
  let fixture: ComponentFixture<LocalStrgeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalStrgeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalStrgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
