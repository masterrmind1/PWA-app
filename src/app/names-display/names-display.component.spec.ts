import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesDisplayComponent } from './names-display.component';

describe('NamesDisplayComponent', () => {
  let component: NamesDisplayComponent;
  let fixture: ComponentFixture<NamesDisplayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NamesDisplayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
